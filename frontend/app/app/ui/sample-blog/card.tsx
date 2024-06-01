import Link from 'next/link';
import React from 'react';
import { fetchCardData } from '@/app/lib/data';
import {Post} from '@/app/lib/definitions'

export default async function Card (){
  const posts :Post[]= await fetchCardData();

  // return (
  //   <main className="flex min-h-screen flex-col p-6">
  //     <div className="flex min-h-screens flex-col p-6">
  //       <h2>Rails & Next.js Blog</h2>
  //       <Link href="create-post">
  //         <a className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
  //           Create new Post
  //         </a>
  //       </Link>
  //     </div>

  //     <div>
  //       {posts.map((post) => (
  //         <div key={post.id} className="rounded-xl bg-gray-50 p-2 shadow-sm">
  //           <Link href={`posts/${post.id}`}>
  //             <a className="ml-2 text-sm font-medium">
  //               <h2>{post.title}</h2>
  //             </a>
  //           </Link>
  //           <p>{post.content}</p>
  //           <button className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
  //             Edit
  //           </button>
  //           <button className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
  //             Delete
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //   </main>
  // );
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
