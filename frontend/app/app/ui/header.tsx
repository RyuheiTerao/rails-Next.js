/**
 * v0 by Vercel.
 * @see https://v0.dev/t/93jQAaBONuz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white border-b dark:bg-gray-950 dark:border-gray-800 px-4 lg:px-6 h-14 flex items-center">
      <div className="flex items-center">
        <Link href="/" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
          <span className="ml-2 text-gray-900 font-medium dark:text-gray-50">Acme Inc</span>
        </Link>
      </div>
      <nav className="ml-6 flex-1 hidden lg:flex items-center space-x-6">
        <Link
          href="/"
          className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-medium"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-medium"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-medium"
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-medium"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            placeholder="Search..."
            className="pr-10 pl-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <SearchIcon className="h-5 w-5" />
          </Button>
        </div>
        <Link
          href="/login"
          className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-medium"
          prefetch={false}
        >
          <Button
            variant="outline"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-medium"
          >
            Log in
          </Button>
        </Link>
        <Link
          href="/sign-up"
          className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-medium"
          prefetch={false}
        >
          <Button className="bg-gray-900 text-gray-50 hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-300 font-medium">
            Sign up
          </Button>
        </Link>
      </div>
    </header>
  )
}


interface MountainIconProps extends React.SVGProps<SVGSVGElement> {}

function MountainIcon(props: MountainIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

interface SearchIconProps extends React.SVGProps<SVGSVGElement> {}

function SearchIcon(props: SearchIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
