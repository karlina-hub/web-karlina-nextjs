import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';

// 1. Import adapter tambahan
import { Pool } from 'pg'; 
import { PrismaPg } from '@prisma/adapter-pg'; 

// 2. Setup adapter database
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: "Akses ditolak. Silakan login." }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET || "kunci_rahasia_kopi_karlina_2026_super_aman";
    const decoded = jwt.verify(token, secret) as { userId: number, email: string, role: string };

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { 
        id: true, 
        name: true, 
        email: true, 
        role: true, 
        createdAt: true,
        phone: true,      
        address: true,    
        city: true,        
        postalCode: true,
        avatar: true      // <-- PERBAIKAN 1: Tambahkan ini agar foto diambil dari DB
      } 
    });

    if (!user) {
      return NextResponse.json({ error: "Pengguna tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });

  } catch (error) {
    console.error("Profile API Error:", error);
    return NextResponse.json({ error: "Sesi telah berakhir atau token tidak valid" }, { status: 401 });
  }
}

export async function PUT(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET || "kunci_rahasia_kopi_karlina_2026_super_aman"; 
    const decoded = jwt.verify(token, secret) as { userId: number };

    const body = await request.json();
    
    // PERBAIKAN 2: Tangkap "avatar" dari request frontend
    const { name, email, phone, address, city, postalCode, avatar } = body;

    const updatedUser = await prisma.user.update({
      where: { id: decoded.userId },
      data: {
        name,
        email,      
        phone,      
        address,
        city,
        postalCode,
        ...(avatar !== undefined && { avatar }), // <-- PERBAIKAN 3: Simpan avatar jika ada
      },
    });

    return NextResponse.json({ 
      message: "Profil berhasil diperbarui", 
      user: updatedUser 
    });

  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ error: "Gagal memperbarui profil" }, { status: 500 });
  }
}