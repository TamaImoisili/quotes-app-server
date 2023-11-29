// Import required modules
import fetch from 'node-fetch'; // Make sure to install the 'node-fetch' package
import { NextResponse } from 'next/server';

// Define the handler function
export async function GET(req) {
  try {
    const apiUrl = 'https://api.quotable.io/random';
    const response = await fetch(apiUrl);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data from Quotable API:', error);
    return NextResponse.json(
        {
            status: 500, 
            error: 'Internal Server Error' 
        }
    );
  }
}
