'use client'

import { gql, useMutation } from "@apollo/client";
import { useFlash } from "@/components/ui/FlashProvider";

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(input: { id: $id }) {
      id
      errors
    }
  }
`;

// ユーザーリストを更新するためのクエリ
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

interface DeleteUserProps {
  userId: string;
}

export default function DeleteUser({ userId }: DeleteUserProps) {
  const { setFlashMessage } = useFlash();
  const [deleteUser, { loading, error }] = useMutation(DELETE_USER, {
    update(cache, { data: { deleteUser } }) {
      // キャッシュからユーザーリストを取得
      const existingUsers = cache.readQuery<{ users: any[] }>({ query: GET_USERS });
      if (existingUsers && deleteUser.id) {
        // 削除されたユーザーをリストから除外
        const newUsers = existingUsers.users.filter(user => user.id !== deleteUser.id);
        // 更新されたリストをキャッシュに書き込む
        setFlashMessage({ type: 'error', message: 'ユーザーが正常に削除されました！' });
        cache.writeQuery({
          query: GET_USERS,
          data: { users: newUsers }
        });
      }
    }
  });

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        const result = await deleteUser({ variables: { id: userId } });
        if (result.data.deleteUser.id) {
          console.log("User deleted:", result.data.deleteUser.id);
          // ここで成功時の処理（例：成功メッセージの表示など）
        } else {
          console.error("Errors:", result.data.deleteUser.errors);
          // ここでエラー時の処理
        }
      } catch (err) {
        console.error("Mutation error:", err);
      }
    }
  };

  if (loading) return <p>Deleting...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      {loading ? 'Deleting...' : 'Delete'}
    </button>
  );
}
