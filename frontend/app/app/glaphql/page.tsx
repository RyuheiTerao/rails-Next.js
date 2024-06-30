// pages/posts/index.tsx
import { request } from 'graphql-request';
import { GET_POSTS } from '@/app/lib/glaphql/queries';
import { UsersData } from '@/app/lib/glaphql/types';



export default async function UsersPage() {
  const endpoint = 'http://localhost:3000/graphql';
  const data: UsersData = await request(endpoint, GET_POSTS);
  const users = data.users;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
