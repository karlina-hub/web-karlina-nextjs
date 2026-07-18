import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma'; // Sesuaikan jika lokasi prisma.ts Anda berbeda

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 1. Cari pengguna di database PostgreSQL
    const user = await prisma.user.findUnique({
      where: { email: email }
    });

    // Jika email tidak terdaftar
    if (!user) {
      return NextResponse.json({ error: "Email atau password salah" }, { status: 401 });
    }

    // 2. Cocokkan password yang diketik dengan yang ada di database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Email atau password salah" }, { status: 401 });
    }

    // 3. Buat "Tiket" Token JWT
    const secret = process.env.JWT_SECRET || "kunci_rahasia_kopi_karlina_2026_super_aman";
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role // Penting untuk membedakan admin toko dan pelanggan
      }, 
      secret, 
      { expiresIn: '1d' } // Token berlaku selama 1 hari
    );

    // 4. Hilangkan password dari data yang dikirim kembali ke frontend
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ 
      message: "Login berhasil!", 
      user: userWithoutPassword,
      token: token 
    }, { status: 200 });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}