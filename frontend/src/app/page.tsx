"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-2xl w-full">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Welcome to ST-MIND 2.0
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          The open, accessible, AI-assisted educational and research platform.
        </p>

        <div className="flex justify-center gap-4">
          {user ? (
            <Link 
              href="/dashboard" 
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link 
                href="/login" 
                className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Log In
              </Link>
              <Link 
                href="/register" 
                className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm hover:shadow"
              >
                Sign Up
              </Link>
            </>
          )}
          <Link 
            href="/contact" 
            className="px-8 py-3 rounded-lg bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 transition-colors shadow-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
