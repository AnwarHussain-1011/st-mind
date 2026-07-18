"use client";

import { useAuth } from '@/context/AuthContext';
import { LogOut, User as UserIcon, ShieldAlert, ShieldCheck, GraduationCap } from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600 tracking-tight">ST-MIND</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-all"
              >
                <LogOut className="h-4 w-4 mr-2 text-gray-500" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <UserIcon className="h-6 w-6 mr-3 text-blue-500" />
              Welcome back, {user.email}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Account Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Role
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-gray-900 capitalize">{user.role}</dd>
                  </div>
                  {user.institution_name && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Institution</dt>
                      <dd className="mt-1 text-lg text-gray-900">{user.institution_name}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Status</h3>
                <div className="flex items-center">
                  {user.is_verified ? (
                    <div className="flex items-center text-green-700 bg-green-100 px-4 py-2 rounded-full font-medium">
                      <ShieldCheck className="h-5 w-5 mr-2" />
                      Verified Account
                    </div>
                  ) : (
                    <div className="flex items-center text-yellow-700 bg-yellow-100 px-4 py-2 rounded-full font-medium">
                      <ShieldAlert className="h-5 w-5 mr-2" />
                      Pending Verification
                    </div>
                  )}
                </div>
                {!user.is_verified && (
                  <p className="mt-4 text-sm text-gray-500">
                    Your account is currently pending verification from an administrator. Some features may be restricted.
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
