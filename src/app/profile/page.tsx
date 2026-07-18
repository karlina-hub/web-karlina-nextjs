"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Averia_Sans_Libre, Inter } from "next/font/google";
import {
  ArrowLeft,
  Camera,
  Edit2,
  Check,
  X,
  AlertCircle,
  ShoppingBag,
  Clock,
  LogOut,
  ChevronRight,
  HelpCircle,
  EyeOff,
  Eye,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const averia = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-averia",
});

// --- INTERFACES ---
interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  avatar?: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
}

interface OrderItem {
  id: string;
  date: string;
  total: number;
  status: "Pending" | "Shipped" | "Completed" | "Cancelled";
}

// --- DUMMY DATA ---
const MOCK_ORDERS: OrderItem[] = [
  {
    id: "ORD-2606-001",
    date: "2026-06-20",
    total: 125000,
    status: "Completed",
  },
  { id: "ORD-2606-002", date: "2026-06-22", total: 85000, status: "Shipped" },
  { id: "ORD-2606-003", date: "2026-06-24", total: 210000, status: "Pending" },
];

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Tab Navigation State
  const [activeTab, setActiveTab] = useState<"profile" | "orders" | "settings">(
    "profile",
  );

  // --- TAB 1: PROFILE STATES ---
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [pendingAvatar, setPendingAvatar] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- TAB 3: SETTING STATES ---
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [addressForm, setAddressForm] = useState({
    detail: "",
    city: "",
    postalCode: "",
  });
  const [addressError, setAddressError] = useState("");

  // --- SISTEM MODAL POP-UP ---
  type ModalStep = "confirm" | "loading" | "success" | "error";
  type ActionContext =
    | "profile"
    | "password"
    | "address"
    | "avatar"
    | "logout"
    | "";

  const [modal, setModal] = useState({
    isOpen: false,
    step: "confirm" as ModalStep,
    context: "" as ActionContext,
    title: "",
    message: "",
  });

  const openConfirmModal = (
    context: ActionContext,
    title: string,
    message: string,
  ) => {
    setModal({ isOpen: true, step: "confirm", context, title, message });
  };

  const closeAndResetModal = () => {
    setModal({ ...modal, isOpen: false });

    // Matikan mode edit setelah berhasil (jika sukses)
    if (modal.step === "success") {
      if (modal.context === "profile") setIsEditingProfile(false);
      if (modal.context === "address") setIsEditingAddress(false);
      if (modal.context === "password") {
        setIsEditingPassword(false);
        setPasswordForm({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        setShowOldPassword(false);
        setShowNewPassword(false);
        setShowConfirmPassword(false);
      }
    }

    // Reset avatar yang di-pending jika dibatalkan/error
    if (modal.context === "avatar" && modal.step !== "success") {
      setImagePreview(userData?.avatar || null);
      setPendingAvatar(null);
    }
  };

  // --- FITUR MENGUNCI SCROLL SAAT MODAL TERBUKA ---
  useEffect(() => {
    if (modal.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modal.isOpen]);

  // --- FETCH INITIAL DATA ---
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          setProfileForm({
            name: data.name || "",
            email: data.email || "",
            phone: data.phone || "",
          });
          setAddressForm({
            detail: data.address || "",
            city: data.city || "",
            postalCode: data.postalCode || "",
          });
          if (data.avatar) setImagePreview(data.avatar);
          localStorage.setItem("userAvatar", data.avatar);
          window.dispatchEvent(new Event("profileUpdated"));
        } else {
          localStorage.removeItem("token");
          router.push("/login");
        }
      } catch (error) {
        console.error("Gagal mengambil data profil", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  // --- HANDLERS SUBMIT ---
  const handleLogoutClick = () => {
    openConfirmModal(
      "logout",
      "Sign Out?",
      "Are you sure you want to sign out?",
    );
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // PERBAIKAN: Validasi ukuran file (Max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        setModal({
          isOpen: true,
          step: "error",
          context: "avatar",
          title: "File Terlalu Besar",
          message: "Ukuran foto maksimal adalah 2MB. Silakan pilih foto lain.",
        });
        return;
      }

      setImagePreview(URL.createObjectURL(file));
      setPendingAvatar(file);
      openConfirmModal(
        "avatar",
        "Change Profile Photo?",
        "Are you sure you want to change your profile photo?",
      );
    }
  };

  const handleProfileSubmit = () => {
    openConfirmModal(
      "profile",
      "Ready to Save?",
      "Are you sure you want to save the changes to your profile?",
    );
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");

    if (
      !passwordForm.oldPassword ||
      !passwordForm.newPassword ||
      !passwordForm.confirmPassword
    ) {
      setPasswordError("Please complete all password fields.");
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      setPasswordError("New password must be at least 6 characters.");
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError(
        "Password confirmation doesn't match your new password.",
      );
      return;
    }

    openConfirmModal(
      "password",
      "Change Password?",
      "Your password will be updated immediately after you confirm.",
    );
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAddressError("");

    if (!addressForm.detail || !addressForm.city || !addressForm.postalCode) {
      setAddressError("Please complete all shipping address fields.");
      return;
    }
    openConfirmModal(
      "address",
      "Save Address?",
      "Your default shipping address will be updated with this information.",
    );
  };

  // --- EXECUTE ACTIONS ---
  const executeModalAction = async () => {
    setModal((prev) => ({ ...prev, step: "loading" }));
    const { context } = modal;

    if (context === "logout") {
      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        router.push("/login");
      }, 800);
      return;
    }

    const token = localStorage.getItem("token");
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let bodyData: any = {};

      if (context === "profile") {
        bodyData = {
          name: profileForm.name,
          email: profileForm.email,
          phone: profileForm.phone,
        };
      } else if (context === "address") {
        bodyData = {
          address: addressForm.detail,
          city: addressForm.city,
          postalCode: addressForm.postalCode,
        };
      } else if (context === "password") {
        bodyData = {
          oldPassword: passwordForm.oldPassword,
          newPassword: passwordForm.newPassword,
        };
      } else if (context === "avatar" && pendingAvatar) {
        // PERBAIKAN UTAMA: Ubah file gambar menjadi teks Base64 sebelum dikirim ke API
        const base64Avatar = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(pendingAvatar);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
        bodyData = { avatar: base64Avatar };
      }

      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      // Di dalam fungsi executeModalAction
      if (response.ok) {
        if (context === "profile") {
          setUserData((prev) => (prev ? { ...prev, ...bodyData } : null));
          localStorage.setItem("userName", profileForm.name);
          localStorage.setItem("userEmail", profileForm.email);
          // Tambahkan baris ini agar perubahan nama juga langsung terupdate di navbar!
          window.dispatchEvent(new Event("profileUpdated"));
        } else if (context === "address") {
          setUserData((prev) => (prev ? { ...prev, ...bodyData } : null));
        } else if (context === "avatar") {
          setPendingAvatar(null);
          setUserData((prev) =>
            prev ? { ...prev, avatar: bodyData.avatar } : null,
          );

          // 👇 TAMBAHKAN 2 BARIS INI 👇
          localStorage.setItem("userAvatar", bodyData.avatar);
          window.dispatchEvent(new Event("profileUpdated"));
        }

        setModal((prev) => ({
          ...prev,
          step: "success",
          title: "Success!",
          message: "Your profile has been updated successfully.",
        }));
      } else {
        setModal((prev) => ({
          ...prev,
          step: "error",
          title: "Failed!",
          message:
            data.error || "Unable to save your changes. Please try again.",
        }));
      }
    } catch (error) {
      setModal((prev) => ({
        ...prev,
        step: "error",
        title: "Network Error",
        message:
          "Couldn't connect to the server. Please check your connection and try again.",
      }));
    }
  };

  // --- HELPER FUNCTIONS ---
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-700 border-green-200";
      case "Shipped":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Pending":
        return "bg-orange-50 text-orange-700 border-orange-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getFullAddress = () => {
    if (!userData?.address) return "-";
    return `${userData.address}${userData.city ? `, ${userData.city}` : ""}${userData.postalCode ? ` ${userData.postalCode}` : ""}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="h-10 w-10 rounded-full border-4 border-t-[#80102b] border-gray-200 animate-spin"></div>
      </div>
    );
  }

  const initial = userData?.name?.charAt(0).toUpperCase() || "U";

  return (
    <div
      className={`h-[100dvh] overflow-hidden bg-white ${inter.variable} ${averia.variable} font-inter text-gray-800 relative flex flex-col`}
    >
      {/* --- MODAL POP UP --- */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full sm:max-w-[400px] rounded-t-[32px] sm:rounded-3xl p-6 pb-10 sm:p-8 flex flex-col items-center text-center animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-300 shadow-2xl">
            {/* Icons Berdasarkan Step */}
            {modal.step === "confirm" && (
              <div className="mt-4 mb-6 relative">
                <div className="h-[72px] w-[72px] bg-[#FF9500] text-white rounded-[22px] rotate-3 shadow-[0_8px_16px_rgba(59,130,246,0.3)] flex items-center justify-center">
                  <span className="text-5xl font-black -rotate-3 leading-none mt-1">
                    !
                  </span>
                </div>
              </div>
            )}
            {modal.step === "loading" && (
              <div className="h-20 w-20 border-4 border-t-[#80102b] border-gray-100 rounded-full animate-spin mb-5"></div>
            )}
            {modal.step === "success" && (
              <div className="mt-4 mb-6 relative">
                <div className="h-[72px] w-[72px] bg-[#1ab05b] text-white rounded-[22px] rotate-3 shadow-[0_8px_16px_rgba(26,176,91,0.3)] flex items-center justify-center">
                  <Check size={44} strokeWidth={3.5} className="-rotate-3" />
                </div>
              </div>
            )}
            {modal.step === "error" && (
              <div className="h-[72px] w-[72px] bg-red-100 text-red-500 rounded-[22px] rotate-3 shadow-sm flex items-center justify-center mb-6">
                <X size={44} strokeWidth={3.5} className="-rotate-3" />
              </div>
            )}

            {/* Typography Modals */}
            <h3 className="text-2xl md:text-[22px] font-black font-averia text-gray-900 mb-2">
              {modal.title}
            </h3>
            <p className="text-sm text-gray-500 mb-8 max-w-xs">
              {modal.step === "loading"
                ? "Sedang memproses permintaan Anda..."
                : modal.message}
            </p>

            {/* Action Buttons Modals */}
            <div className="w-full">
              {modal.step === "confirm" && (
                <div className="flex gap-3 w-full">
                  <button
                    onClick={closeAndResetModal}
                    className="flex-1 py-3.5 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={executeModalAction}
                    className={`flex-1 py-3.5 font-bold rounded-2xl transition cursor-pointer ${
                      modal.context === "logout"
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-[#80102b] hover:bg-[#6A0921] text-white"
                    }`}
                  >
                    {modal.context === "logout" ? "Logout" : "Save Changes"}
                  </button>
                </div>
              )}
              {(modal.step === "success" || modal.step === "error") && (
                <button
                  onClick={closeAndResetModal}
                  className="w-full py-4 bg-navbar text-white font-bold text-[15px] rounded-2xl hover:bg-[#6A0921] transition shadow-lg cursor-pointer"
                >
                  {modal.step === "success" ? "Done" : "Tutup"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TOP NAVIGATION BAR */}
      <header className="flex-shrink-0 sticky top-0 z-40 bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-navbar text-navbar hover:bg-navbar hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
          </button>
          <div className="flex-flex-col ml-1 md:ml-3">
            <h2 className="flex text-base md:text-xl font-averia font-black text-gray-900 mb-1">
              Profile
            </h2>
            <p className="text-xs md:text-sm text-[#8D6E63]">
              Manage your personal account details.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#80102b] text-[#E8DAC6] flex items-center justify-center font-bold text-sm overflow-hidden">
              {imagePreview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                initial
              )}
            </div>
            <span className="text-sm font-semibold text-gray-700 hidden sm:block">
              {userData?.name}
            </span>
          </div>
        </div>
      </header>

      {/* --- LAYOUT UTAMA --- */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* SISI KIRI: SIDEBAR MENU */}
        <aside className="w-full md:w-64 border-b md:border-b-0 border-r border-gray-200 flex-shrink-0 bg-white p-4 md:p-6 overflow-x-auto md:overflow-y-auto z-10">
          <div className="flex md:flex-col gap-2 min-w-max md:min-w-0">
            {[
              { id: "profile", label: "Account Overview" },
              { id: "orders", label: "Order History" },
              { id: "settings", label: "Setting" },
            ].map((tab) => (
              <button
                key={tab.id}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setIsEditingAddress(false);
                  setIsEditingPassword(false);
                  setIsEditingProfile(false);
                  setAddressError("");
                  setPasswordError("");
                }}
                className={`flex items-center justify-between px-5 py-3 rounded-lg text-sm font-semibold transition-colors cursor-pointer duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#80102b] text-white shadow-md"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <ChevronRight
                    size={16}
                    className="hidden md:block opacity-80"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="hidden md:block h-px bg-gray-200 my-6 mx-2" />
          <button
            onClick={handleLogoutClick}
            className="hidden md:flex items-center gap-3 px-5 py-3 rounded-lg text-sm font-semibold text-gray-500 hover:text-red-600 hover:bg-red-50 transition-all w-full text-left cursor-pointer"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </aside>

        {/* SISI KANAN: KONTEN UTAMA */}
        <main className="flex-1 bg-[url('../app/asset/emptyspacebg.webp')] bg-cover bg-center bg-no-repeat flex flex-col min-w-0 pb-16 overflow-y-auto">
          <div className="p-6 md:p-10 w-full">
            {/* TAB 1: ACCOUNT OVERVIEW */}
            {activeTab === "profile" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* CARD 1 PROFILE */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="relative group flex-shrink-0">
                      <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-[#80102b] text-[#E8DAC6] flex items-center justify-center text-3xl font-bold font-averia overflow-hidden border-2 border-gray-100 shadow-sm">
                        {imagePreview ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={imagePreview}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          initial
                        )}
                      </div>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute bottom-0 right-0 bg-white text-gray-700 p-1.5 md:p-2 rounded-full shadow border border-gray-0 hover:bg-gray-50 transition-all cursor-pointer"
                        title="Ubah Foto Profil"
                      >
                        <Camera size={14} className="md:w-4 md:h-4" />
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageSelect}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                        {userData?.name}
                      </h2>
                      <p className="text-sm md:text-base text-gray-500 mb-1.5">
                        {userData?.email}
                      </p>
                      <span className="text-[11px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {userData?.role === "ADMIN"
                          ? "Administrator"
                          : "Coffee Member"}
                      </span>
                    </div>
                  </div>
                  {!isEditingProfile && (
                    <button
                      onClick={() => setIsEditingProfile(true)}
                      className="flex justify-center items-center gap-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shrink-0 cursor-pointer"
                    >
                      Edit Profile <Edit2 size={14} />
                    </button>
                  )}
                </div>

                {/* CARD INFORMATION */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      Information
                    </h3>
                  </div>

                  {!isEditingProfile ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                      <div>
                        <p className="text-sm text-gray-500 font-semibold mb-2">
                          Name
                        </p>
                        <p className="text-[15px] font-medium text-gray-900">
                          {userData?.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold mb-2">
                          Phone
                        </p>
                        <p className="text-[15px] font-medium text-gray-900">
                          {userData?.phone || "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold mb-2">
                          Address
                        </p>
                        <p className="text-[15px] font-medium text-gray-900 leading-relaxed max-w-sm">
                          {getFullAddress()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold mb-2">
                          Email
                        </p>
                        <p className="text-[15px] font-medium text-gray-900">
                          {userData?.email}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-600">
                            Name
                          </label>
                          <input
                            type="text"
                            value={profileForm.name}
                            onChange={(e) =>
                              setProfileForm({
                                ...profileForm,
                                name: e.target.value,
                              })
                            }
                            className="mt-2 w-full text-sm p-3 bg-white rounded-xl border border-gray-300 focus:border-[#80102b] outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-600">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={profileForm.phone}
                            onChange={(e) =>
                              setProfileForm({
                                ...profileForm,
                                phone: e.target.value,
                              })
                            }
                            placeholder="e.g. 08123456789"
                            className="mt-2 w-full text-sm p-3 bg-white rounded-xl border border-gray-300 focus:border-[#80102b] outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-600">
                            Address
                          </label>
                          <div className="mt-2 w-full text-sm p-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-500 cursor-not-allowed">
                            {userData?.address
                              ? getFullAddress()
                              : "Belum diatur"}
                          </div>
                          <p className="text-[11px] text-gray-400 mt-1 italic">
                            *Complete address details can be managed in the
                            Setting.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-600">
                            Email
                          </label>
                          <input
                            type="email"
                            value={profileForm.email}
                            onChange={(e) =>
                              setProfileForm({
                                ...profileForm,
                                email: e.target.value,
                              })
                            }
                            className="mt-2 w-full text-sm p-3 bg-white rounded-xl border border-gray-300 focus:border-[#80102b] outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="pt-6 mt-4 flex justify-end">
                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                          <button
                            onClick={() => setIsEditingProfile(false)}
                            className="w-full sm:w-auto px-6 flex justify-center items-center text-sm font-semibold text-gray-600 bg-white border border-gray-300 p-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleProfileSubmit}
                            className="w-full sm:w-auto px-6 flex justify-center items-center text-sm font-semibold text-white bg-[#80102b] px-2.5 py-3 rounded-lg hover:bg-[#6A0921] transition-colors cursor-pointer"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: ORDER HISTORY */}
            {activeTab === "orders" && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 animate-in fade-in duration-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
                  Order History
                </h3>

                {MOCK_ORDERS.length > 0 ? (
                  <div className="space-y-4">
                    {MOCK_ORDERS.map((order) => (
                      <div
                        key={order.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white border-2 border-gray-50 rounded-xl hover:border-gray-200 transition-colors gap-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 bg-[#F7F3EB] rounded-full flex items-center justify-center text-navbar flex-shrink-0">
                            <ShoppingBag size={20} />
                          </div>
                          <div>
                            <p className="text-sm md:text-md font-bold text-gray-900">
                              {order.id}
                            </p>
                            <p className="text-sm text-gray-500">
                              {new Date(order.date).toLocaleDateString(
                                "id-ID",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 pl-16 sm:pl-0">
                          <div className="text-left sm:text-right">
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                              Total
                            </p>
                            <p className="text-sm md:text-md font-bold text-gray-900">
                              Rp {order.total.toLocaleString("id-ID")}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadge(order.status)}`}
                          >
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-4">
                      <Clock size={28} />
                    </div>
                    <h4 className="text-base font-bold text-gray-800 mb-1">
                      Belum ada pesanan
                    </h4>
                    <p className="text-sm text-gray-400 max-w-xs mb-6">
                      Anda belum pernah melakukan pemesanan kopi. Yuk, pesan
                      sekarang!
                    </p>
                    <button
                      onClick={() => router.push("/product")}
                      className="bg-[#80102b] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#6A0921]"
                    >
                      Browse Coffee Products
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: SETTINGS */}
            {activeTab === "settings" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* SETTING: UBAH PASSWORD */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 relative">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-white  gap-4 sm:gap-0">
                    <div className="pr-8 sm:pr-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                        Password
                      </h3>
                      <p className="text-sm text-gray-400">
                        Update your password to keep your account secure.
                      </p>
                    </div>

                    {!isEditingPassword && (
                      <button
                        onClick={() => setIsEditingPassword(true)}
                        className="w-full sm:w-auto flex justify-center items-center gap-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shrink-0 mt-2 sm:mt-0 cursor-pointer"
                      >
                        Edit Password <Edit2 size={14} />
                      </button>
                    )}
                  </div>

                  {isEditingPassword ? (
                    <form onSubmit={handlePasswordSubmit} className="space-y-6">
                      {passwordError && (
                        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                          <AlertCircle size={16} /> {passwordError}
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* INPUT OLD PASSWORD */}
                        <div className="space-y-2 md:col-span-2">
                          <label className="inline-block mb-2 text-sm font-bold text-gray-600">
                            Current password
                          </label>
                          <div className="relative">
                            <input
                              type={showOldPassword ? "text" : "password"}
                              value={passwordForm.oldPassword}
                              onChange={(e) =>
                                setPasswordForm({
                                  ...passwordForm,
                                  oldPassword: e.target.value,
                                })
                              }
                              className="w-full text-sm p-3 pr-10 bg-white rounded-xl border border-gray-300 focus:border-[#80102b] outline-none"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowOldPassword(!showOldPassword)
                              }
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                              {showOldPassword ? (
                                <EyeOff size={18} />
                              ) : (
                                <Eye size={18} />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* INPUT NEW PASSWORD */}
                        <div className="space-y-2">
                          <label className="inline-block mb-2 text-sm font-bold text-gray-600">
                            New password
                          </label>
                          <div className="relative">
                            <input
                              type={showNewPassword ? "text" : "password"}
                              value={passwordForm.newPassword}
                              onChange={(e) =>
                                setPasswordForm({
                                  ...passwordForm,
                                  newPassword: e.target.value,
                                })
                              }
                              className="w-full text-sm p-3 pr-10 bg-white rounded-xl border border-gray-300 focus:border-[#80102b] outline-none"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowNewPassword(!showNewPassword)
                              }
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                              {showNewPassword ? (
                                <EyeOff size={18} />
                              ) : (
                                <Eye size={18} />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* INPUT CONFIRM PASSWORD */}
                        <div className="space-y-2">
                          <label className="inline-block mb-2 text-sm font-bold text-gray-600">
                            Confirm new password
                          </label>
                          <div className="relative">
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              value={passwordForm.confirmPassword}
                              onChange={(e) =>
                                setPasswordForm({
                                  ...passwordForm,
                                  confirmPassword: e.target.value,
                                })
                              }
                              className="w-full text-sm p-3 pr-10 bg-white rounded-xl border border-gray-300 focus:border-[#80102b] outline-none"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                              {showConfirmPassword ? (
                                <EyeOff size={18} />
                              ) : (
                                <Eye size={18} />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                          <button
                            type="button"
                            onClick={() => {
                              setIsEditingPassword(false);
                              setPasswordError("");
                              setShowOldPassword(false);
                              setShowNewPassword(false);
                              setShowConfirmPassword(false);
                            }}
                            className="w-full sm:w-auto px-6 flex justify-center items-center text-sm font-semibold text-gray-600 bg-white border border-gray-300 p-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="bg-[#80102b] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#6A0921] w-full sm:w-auto cursor-pointer"
                          >
                            Update Password
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div>
                      {/* <p className="text-sm text-gray-500 font-semibold mb-2">
                        Current password
                      </p>
                      <p className="text-[15px] font-medium text-gray-900 tracking-widest">
                        ********
                      </p> */}
                    </div>
                  )}
                </div>

                {/* SETTING: ALAMAT PENGIRIMAN */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 relative">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-5 border-b border-gray-100 pb-5 gap-4 sm:gap-0">
                    <div className="pr-8 sm:pr-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                        Shipping Address
                      </h3>
                      <p className="text-sm text-gray-400">
                        Set your default address for coffee delivery.
                      </p>
                    </div>

                    {!isEditingAddress && (
                      <button
                        onClick={() => setIsEditingAddress(true)}
                        className="w-full sm:w-auto flex justify-center items-center gap-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shrink-0 mt-2 sm:mt-0 cursor-pointer"
                      >
                        Edit Address <Edit2 size={14} />
                      </button>
                    )}
                  </div>

                  {isEditingAddress ? (
                    <form onSubmit={handleAddressSubmit} className="space-y-6">
                      {addressError && (
                        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                          <AlertCircle size={16} /> {addressError}
                        </div>
                      )}
                      <div className="space-y-2">
                        <label className="inline-block mb-2 text-sm font-bold text-gray-600">
                          Address Detail
                        </label>
                        <textarea
                          value={addressForm.detail}
                          onChange={(e) =>
                            setAddressForm({
                              ...addressForm,
                              detail: e.target.value,
                            })
                          }
                          rows={3}
                          placeholder="Jalan, RT/RW, No. Rumah"
                          className="w-full text-sm p-3 bg-white rounded-xl border border-gray-300 focus:border-[#80102b] outline-none resize-none"
                        ></textarea>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className=" inline-block mb-2 text-sm font-bold text-gray-600">
                            City / Region
                          </label>
                          <input
                            type="text"
                            value={addressForm.city}
                            onChange={(e) =>
                              setAddressForm({
                                ...addressForm,
                                city: e.target.value,
                              })
                            }
                            className="w-full text-sm p-3 bg-white rounded-xl border border-gray-300 focus:border-[#80102b] outline-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="inline-block mb-2 text-sm font-bold text-gray-600">
                            Postal Code
                          </label>
                          <input
                            type="text"
                            value={addressForm.postalCode}
                            onChange={(e) =>
                              setAddressForm({
                                ...addressForm,
                                postalCode: e.target.value,
                              })
                            }
                            className="w-full text-sm p-3 bg-white rounded-xl border border-gray-300 focus:border-[#80102b] outline-none"
                          />
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                          <button
                            type="button"
                            onClick={() => {
                              setIsEditingAddress(false);
                              setAddressError("");
                            }}
                            className="w-full sm:w-auto px-6 flex justify-center items-center text-sm font-semibold text-gray-600 bg-white border border-gray-300 p-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="bg-[#80102b] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#6A0921] w-full sm:w-auto cursor-pointer"
                          >
                            Update Address
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-2">
                        Current Address
                      </p>
                      {userData?.address ? (
                        <p className="text-[15px] font-medium text-gray-900 leading-relaxed max-w-lg">
                          {getFullAddress()}
                        </p>
                      ) : (
                        <p className="text-[15px] text-gray-400 italic">
                          You haven&apos;t added a shipping address yet.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
