export async function GET() {
  return Response.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NEXT_PUBLIC_ENV || 'development',
      version: '1.0.0',
    },
    { status: 200 }
  );
}
