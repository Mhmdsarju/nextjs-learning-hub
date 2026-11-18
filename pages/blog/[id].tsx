import { GetStaticPaths, GetStaticProps } from "next";

interface Post {
  id: string;
  title: string;
  body: string;
}

interface BlogPostProps {
  post: Post;
}

export default function BlogDetails({ post }: BlogPostProps) {
  return (
    <div>
      <h1>{post.title}</h1>

      <p>Blog ID: {post.id}</p>

      <p>{post.body}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?limit=5",
  );
  const posts: Post[] = await response.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

// Step 2: Fetch data for each individual path
export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const id = params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const post: Post = await response.json();

  return {
    props: {
      post,
    },
  };
};
