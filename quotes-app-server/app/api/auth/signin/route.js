import { NextResponse } from 'next/server';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

export function GET(request) {
    return NextResponse.json(
        {
        body:'Hello'
        }
    )
  }

  export function POST(request) {
    return NextResponse.json(
        {
        body:'Hello'
        }
    )
  }