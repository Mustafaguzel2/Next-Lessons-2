
import Link from "next/link";
export default function Home() {
  return <div className="flex min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 items-center justify-center p-2">
    <div className="container mx-auto flex flex-col items-center justify-center p-2">
       <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-white m-5">
        Browse our blog collection
        </h2>
        <Link className="text-2xl border-2 p-2 rounded-md border-neutral-300 bg-neutral-300 font-bold  hover:scale-110 duration-300 hover:border-none"
        href={'/blogs'}>
          Explore blogs
        </Link>
    </div>
  </div>;
}
