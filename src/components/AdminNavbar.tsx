import Link from 'next/link'

export default function AdminNavbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex space-x-6">
      <Link href="/admin" className="hover:underline">
        dashboard
      </Link>
       <Link href="/admin/assignPlan" className="hover:underline">
        Assign Plans
      </Link>
      <Link href="/admin/signals" className="hover:underline">
        Signal Room
      </Link>
      <Link href="/admin/payments" className="hover:underline">
        Payments & Subscriptions
      </Link>
      <Link href="/admin/users" className="hover:underline">
        All Users
      </Link>
      <Link href="/admin/profile" className="hover:underline ml-auto">
        Profile
      </Link>
      <Link href="/login" className="hover:underline">
        Logout
      </Link>

    </nav>
  )
}

