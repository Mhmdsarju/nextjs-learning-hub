//ssg
import { GetStaticProps } from "next";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <div>
      <h1>Our Blog Posts</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link href={`/blog/${post.id}`}>Read More</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  const posts: Post[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};