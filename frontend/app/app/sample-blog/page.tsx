// import '@/app/globals.css';
// import Card from '@/app/ui/sample-blog/card';

// export default function Page() {
//   return (
//     <main>
//       <h1>sample-blog</h1>
//       <div>
//         <Card />
//       </div>
//     </main>
//   );
// }
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Post} from '@/app/lib/definitions';

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users/1');
        setPosts(response.data);
      } catch (error) {
        console.error('投稿の取得に失敗しました:', error);
      }
    };

    fetchPosts();
  }, []);

  if (!posts) return <div>Loading...</div>; // レンダリング前のnullチェック

  return (
    <div>
      <h1>投稿</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.content}

          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
