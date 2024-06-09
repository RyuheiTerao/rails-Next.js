// pages/posts/index.tsx
import { GetServerSideProps } from 'next';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PostsProps> = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
