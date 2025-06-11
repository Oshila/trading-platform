'use client'

import { useEffect, useState } from 'react'
import { firestore } from '@/lib/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Link from 'next/link'

export default function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState<number>(0)
  const [totalPayments, setTotalPayments] = useState<number>(0)
  const [successfulPayments, setSuccessfulPayments] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        // Total users
        const usersSnapshot = await getDocs(collection(firestore, 'users'))
        setTotalUsers(usersSnapshot.size)

        // Total payments
        const paymentsSnapshot = await getDocs(collection(firestore, 'payments'))
        setTotalPayments(paymentsSnapshot.size)

        // Successful payments
        const successQuery = query(
          collection(firestore, 'payments'),
          where('status', '==', 'success')
        )
        const successSnapshot = await getDocs(successQuery)
        setSuccessfulPayments(successSnapshot.size)
      } catch (err) {
        console.error(err)
        setError('Failed to load dashboard stats')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg animate-pulse">Loading dashboard...</p>
      </div>
    )

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600 font-semibold text-lg">{error}</p>
      </div>
    )

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Total Users Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-blue-100 p-4 rounded-full mb-5">
            {/* User Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A9.004 9.004 0 0112 15a9.004 9.004 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Total Users</h2>
          <p className="text-4xl font-bold text-blue-600">{totalUsers}</p>
          <Link
            href="/admin/users"
            className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            Manage Users
          </Link>
        </div>

        {/* Total Payments Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-green-100 p-4 rounded-full mb-5">
            {/* Payment Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a4 4 0 00-8 0v2M5 13h14l-1 7H6l-1-7z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Total Payments</h2>
          <p className="text-4xl font-bold text-green-600">{totalPayments}</p>
          <Link
            href="/admin/payments"
            className="mt-6 inline-block px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700 transition"
          >
            Manage Payments
          </Link>
        </div>

        {/* Successful Payments Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-purple-100 p-4 rounded-full mb-5">
            {/* Check Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Successful Payments</h2>
          <p className="text-4xl font-bold text-purple-600">{successfulPayments}</p>
          <Link
            href="/admin/payments?filter=success"
            className="mt-6 inline-block px-6 py-2 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition"
          >
            View Successes
          </Link>
        </div>
      </div>
    </div>
  )
}


