'use client'

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useFlash } from "@/components/ui/FlashProvider";
import { useRouter } from 'next/navigation';


const EDIT_USER = gql`
  mutation EditUser($id: ID!, $name: String!, $email: String!) {
    editUser(input: { id: $id, name: $name, email: $email }) {
      user {
        id
        name
        email
      }
    }
  }
`;

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

interface EditUserProps {
  userId: string;
}

export default function EditUser({ userId }: EditUserProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setFlashMessage } = useFlash();
  const router = useRouter();


  const [editUser, { loading }] = useMutation(EDIT_USER, {
    update(cache, { data: { editUser } }) {
      if (editUser.user) {
        const existingUsers = cache.readQuery<{ users: any[] }>({ query: GET_USERS });
        if (existingUsers) {
          const updatedUsers = existingUsers.users.map(user =>
            user.id === editUser.user.id ? editUser.user : user
          );
          cache.writeQuery({
            query: GET_USERS,
            data: { users: updatedUsers }
          });
        }
      }
    },
    onCompleted: (data) => {
      setFlashMessage({ type: 'success', message: 'ユーザーが正常に編集されました！' });
      setName("");
      setEmail("");
      // ユーザー作成後にリダイレクト
      router.push('/graphql');
      // ページを更新（オプション）
      // router.refresh();
    },
    onError: (error) => {
      setFlashMessage({ type: 'error', message: `エラー: ${error.message}` });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editUser({ variables: { id: userId, name, email } });
  };

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
        <div className="space-y-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center justify-between">
              <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  required
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
