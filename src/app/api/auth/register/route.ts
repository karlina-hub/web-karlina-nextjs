import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma'; // Sesuaikan jika lokasi file prisma.ts Anda berbeda

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    // 1. Validasi input sederhana
    if (!email || !password) {
      return NextResponse.json({ error: "Email dan password wajib diisi" }, { status: 400 });
    }

    // 2. Cek apakah email sudah pernah terdaftar di database
    const existingUser = await prisma.user.findUnique({
      where: { email: email }
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email sudah digunakan" }, { status: 400 });
    }

    // 3. Acak/enkripsi password menggunakan bcrypt demi keamanan
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Simpan data pengguna baru ke database PostgreSQL
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        // Role secara otomatis menjadi "CUSTOMER" sesuai setelan di schema.prisma
      }
    });

    // 5. Hilangkan password dari respon yang dikirim kembali demi keamanan
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json({ 
      message: "Registrasi berhasil!", 
      user: userWithoutPassword 
    }, { status: 201 });

  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}