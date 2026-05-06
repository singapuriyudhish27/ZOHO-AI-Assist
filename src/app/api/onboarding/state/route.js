import { NextResponse } from 'next/server';
import redis from '@/lib/redis';

export async function POST(request) {
  try {
    const { id, data } = await request.json();

    if (!id || !data) {
      return NextResponse.json({ error: 'Missing ID or data' }, { status: 400 });
    }

    // Store state in Redis with 1 hour expiration
    await redis.set(`onboarding:${id}`, JSON.stringify(data), 'EX', 3600);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Redis Save Error:', error);
    return NextResponse.json({ error: 'Failed to save state to Redis' }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    const data = await redis.get(`onboarding:${id}`);

    if (!data) {
      return NextResponse.json({ error: 'State not found or expired' }, { status: 404 });
    }

    // Optional: Delete after retrieval to keep Redis clean (One-time use)
    await redis.del(`onboarding:${id}`);

    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error('Redis Load Error:', error);
    return NextResponse.json({ error: 'Failed to load state from Redis' }, { status: 500 });
  }
}
