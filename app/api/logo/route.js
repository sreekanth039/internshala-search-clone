import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');

  if (!file || !/^[\w\-.]+$/.test(file)) {
    return new NextResponse('Invalid file', { status: 400 });
  }

  const imageUrl = `https://internshala-uploads.internshala.com/logo/${encodeURIComponent(file)}`;

  try {
    const res = await fetch(imageUrl, {
      headers: {
        Referer: 'https://internshala.com/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      },
    });

    if (!res.ok) {
      return new NextResponse('Not found', { status: 404 });
    }

    const contentType = res.headers.get('content-type') || 'image/png';
    const buffer = await res.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, immutable',
      },
    });
  } catch {
    return new NextResponse('Error fetching image', { status: 500 });
  }
}
