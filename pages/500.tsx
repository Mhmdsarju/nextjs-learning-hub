import Link from "next/link";

export default function Custom500() {
  return (
    <div>
      <h1>500 - Server Error</h1>
      <p>Something went wrong on our server.</p>

      <Link href="/">Go back to Home</Link>
    </div>
  );
}