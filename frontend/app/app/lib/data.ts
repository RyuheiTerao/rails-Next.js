export async function fetchCardData()
{
  const res = await fetch('localhost:3000/api/v1/posts');
  return await res.json();
}
