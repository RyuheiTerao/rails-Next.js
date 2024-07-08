// app/components/UserList.tsx
'use client'

import { gql, useQuery } from "@apollo/client";
import DeleteUser from '@/components/DeleteUser'
import Link from "next/link"

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

export default function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data){
    return (
      <div className="flex justify-center p-4">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
        <div className="space-y-4">
          {data.users.map((user: { id: string; name: string; email: string }) => (
            <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Link
                    href={`/graphql/${user.id}/edit`}
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-medium"
                    prefetch={false}
                  >
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                  </Link>
                  <DeleteUser userId={user.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
  }
}
