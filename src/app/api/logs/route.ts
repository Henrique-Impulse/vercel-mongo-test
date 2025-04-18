/* eslint-disable */
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('vercel_logs');
    const collection = db.collection('functions');

    const body = await request.json();
    const log = {
      message: body.message,
      metadata: body.metadata || {},
      timestamp: new Date(),
    };

    const result = await collection.insertOne(log);
    return NextResponse.json({ ...log, _id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao criar log' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('vercel_logs');
    const collection = db.collection('functions');

    const logs = await collection
      .find({})
      .sort({ timestamp: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json(logs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar logs' },
      { status: 500 }
    );
  }
} 