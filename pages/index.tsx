
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js Learning Hub</h1>

      <h2>Navigation</h2>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog (SSG)</Link>
          </li>
          <li>
            <Link href="/products">Products (SSR)</Link>
          </li>
          <li>
            <Link href="/users">Users (API Integration)</Link>
          </li>
          <li>
            <Link href="/profile">Profile (Image Optimization)</Link>
          </li>
          <li>
            <Link href="/external-image">
              External Image Optimization
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
