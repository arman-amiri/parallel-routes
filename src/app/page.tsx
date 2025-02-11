import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="">Home page</div>
      <div>
        <Link href="/photo">open photo</Link>
      </div>
    </div>
  );
}
