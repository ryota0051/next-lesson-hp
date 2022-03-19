import Link from "next/link"

export default function HeaderLink({ href, linkName }) {
  return (
    <Link href={href}>
      <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
        {linkName}
      </a>
    </Link>
  )
}
