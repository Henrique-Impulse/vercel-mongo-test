import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Log from '@/models/Log';

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    const log = await Log.create({
      message: body.message,
      metadata: body.metadata || {},
    });

    return NextResponse.json(log, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao criar log' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const logs = await Log.find().sort({ timestamp: -1 }).limit(100);
    return NextResponse.json(logs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar logs' },
      { status: 500 }
    );
  }
} 