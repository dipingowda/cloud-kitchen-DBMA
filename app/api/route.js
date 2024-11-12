import db from '../../../lib/db';

export async function GET(req) {
  try {
    const [rows] = await db.query('SELECT * FROM your_table_name');
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Database connection error' }), { status: 500 });
  }
}