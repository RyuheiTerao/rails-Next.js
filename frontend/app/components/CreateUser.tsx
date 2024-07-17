'use client'

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useFlash } from "@/components/ui/FlashProvider";

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!, $password_confirmation: String!) {
    createUser(input: { name: $name, email: $email, password: $password, password_confirmation: $password_confirmation }) {
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

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const { setFlashMessage } = useFlash();

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    update(cache, { data: { createUser } }) {
      const newUser = createUser.user;
      const existingUsers = cache.readQuery<{ users: any[] }>({ query: GET_USERS });

      if (existingUsers) {
        cache.writeQuery({
          query: GET_USERS,
          data: { users: [...existingUsers.users, newUser] },
        });
      }
    },
    onCompleted: (data) => {
      setFlashMessage({ type: 'success', message: 'ユーザーが正常に作成されました！' });
      setName("");
      setEmail("");
    },
    onError: (error) => {
      setFlashMessage({ type: 'error', message: `エラー: ${error.message}` });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createUser({ variables: { name, email, password, password_confirmation } });
  };

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Create User</h2>
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
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  value={password_confirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="Password_confirmation"
                  required
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Create User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}












// 'use client'

// import { gql, useMutation } from "@apollo/client";
// import { useState } from "react";

// const CREATE_USER = gql`
//   mutation CreateUser($name: String!, $email: String!) {
//     createUser(input: { name: $name, email: $email }) {
//       user {
//         id
//         name
//         email
//       }
//     }
//   }
// `;

// export default function CreateUser() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     createUser({ variables: { name, email } });
//   };

//   if (loading) return <p>Submitting...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (data) return <p>User created successfully!</p>;

//   return (
//     <div className="flex justify-center p-4">
//       <div className="w-full max-w-2xl">
//         <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
//         <div className="space-y-4">
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <div className="flex items-center justify-between">
//               <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
//                 <input
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Name"
//                   required
//                   className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//                 <input
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email"
//                   type="email"
//                   required
//                   className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Create User
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





/****************************************************************************/


// 'use client'

// import { gql, useMutation } from "@apollo/client";
// import { useState } from "react";
//   //---------------------------------------------------------
// import { useNotification } from "./ui/NotificationContext";
// import { useRouter } from "next/navigation";
//   //---------------------------------------------------------


// const CREATE_USER = gql`
//   mutation CreateUser($name: String!, $email: String!) {
//     createUser(input: { name: $name, email: $email }) {
//       user {
//         id
//         name
//         email
//       }
//     }
//   }
// `;

// export default function CreateUser() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   // const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
//   //---------------------------------------------------------
//   const { showNotification } = useNotification();
//   const router = useRouter();
//   //---------------------------------------------------------

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     createUser({ variables: { name, email } });
//   };

//   // if (loading) return <p>Submitting...</p>;
//   // if (error) return <p>Error: {error.message}</p>;
//   // if (data) return <p>User created successfully!</p>;
//   const [createUser, { loading }] = useMutation(CREATE_USER, {
//     onCompleted: (data) => {
//       if (data.createUser.user) {
//         showNotification('ユーザーが正常に作成されました！', 'success');
//         router.push('/graphql');
//       } else {
//         showNotification(`エラー: ${data.createUser.errors.join(', ')}`, 'error');
//       }
//     },
//     onError: (error) => {
//       showNotification(`エラー: ${error.message}`, 'error');
//     }
//   });

//   return (
//     <div className="flex justify-center p-4">
//       <div className="w-full max-w-2xl">
//         <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
//         <div className="space-y-4">
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <div className="flex items-center justify-between">
//               <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
//                 <input
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Name"
//                   required
//                   className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//                 <input
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email"
//                   type="email"
//                   required
//                   className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Create User
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
