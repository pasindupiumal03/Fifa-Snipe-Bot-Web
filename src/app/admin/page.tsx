"use client";

import React, { useState, useEffect } from "react";

const API_BASE_URL = "https://fifa-snipe-bot-backend.vercel.app/api";

// Types
interface UserConfig {
  id: string;
  email: string;
  trialDays: number;
  status: "Active" | "Expired";
  joinedDate: string;
}

export default function AdminPage() {
  // Authentication State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // User Management State
  const [users, setUsers] = useState<UserConfig[]>([]);

  // Form State for Adding New User
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newTrialDays, setNewTrialDays] = useState(7);
  const [copied, setCopied] = useState(false);

  // Generate random password
  const generateRandomPassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
    let pass = "";
    for (let i = 0; i < 10; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setNewPassword(pass);
  };

  // Check login state on mount
  useEffect(() => {
    generateRandomPassword();
    
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsLoading(true);
      fetch(`${API_BASE_URL}/admin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Invalid session");
          }
        })
        .then((data) => {
          setUsers(data);
          setIsAuthenticated(true);
        })
        .catch(() => {
          localStorage.removeItem("adminToken");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  // Authentication validation
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);

        // Fetch users to verify permissions
        const usersResponse = await fetch(`${API_BASE_URL}/admin/users`, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });

        if (usersResponse.ok) {
          const usersData = await usersResponse.json();
          setUsers(usersData);
          setIsAuthenticated(true);
          setError("");
        } else {
          setError("Not authorized as an administrator.");
          localStorage.removeItem("adminToken");
        }
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch (err) {
      setError("Network error. Could not connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
    setUsers([]);
  };

  // Add user action
  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim() || !newPassword.trim()) return;

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`${API_BASE_URL}/admin/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: newEmail,
          password: newPassword,
          trialDays: newTrialDays,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setUsers((prev) => [data, ...prev]);
        
        // Automatically copy to clipboard
        navigator.clipboard.writeText(newPassword);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        
        alert(`User registered successfully!\nEmail: ${newEmail}\nPassword: ${newPassword}\n(Password has been copied to your clipboard)`);
        setNewEmail("");
        generateRandomPassword();
      } else {
        alert(data.message || "Failed to register user.");
      }
    } catch (err) {
      alert("Network error. Could not register user.");
    }
  };

  // Delete user action
  const handleDeleteUser = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`${API_BASE_URL}/admin/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setUsers((prev) => prev.filter((u) => u.id !== id));
      } else {
        const data = await response.json();
        alert(data.message || "Failed to delete user.");
      }
    } catch (err) {
      alert("Network error. Could not delete user.");
    }
  };

  // Adjust trial days (+ / -)
  const adjustTrialDays = async (id: string, amount: number) => {
    const user = users.find((u) => u.id === id);
    if (!user) return;

    const newDays = Math.max(0, user.trialDays + amount);

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`${API_BASE_URL}/admin/users/${id}/trial`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ trialDays: newDays }),
      });

      if (response.ok) {
        const data = await response.json();
        setUsers((prev) => prev.map((u) => (u.id === id ? data : u)));
      } else {
        const data = await response.json();
        alert(data.message || "Failed to update trial days.");
      }
    } catch (err) {
      alert("Network error. Could not update trial days.");
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#ccff00] selection:text-black relative overflow-hidden">
      {/* Background Neon Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ccff00] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-[#ccff00] opacity-[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {!isAuthenticated ? (
        /* STATE 1: LOGIN CARD */
        <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
          <div className="flex items-center gap-2 mb-8 select-none animate-pulse">
            <svg
              className="w-10 h-10 text-[#ccff00] filter drop-shadow-[0_0_8px_rgba(204,255,0,0.6)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="22" y1="12" x2="18" y2="12" />
              <line x1="6" y1="12" x2="2" y2="12" />
              <line x1="12" y1="6" x2="12" y2="2" />
              <line x1="12" y1="22" x2="12" y2="18" />
            </svg>
            <span className="text-3xl font-black italic tracking-widest text-white">
              FUTSNIPE<span className="text-[#ccff00]">BOT</span>
            </span>
          </div>

          <div className="w-full max-w-md bg-[#0d0d0d] border border-neutral-800 hover:border-[#ccff00]/30 transition-all duration-500 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] backdrop-blur-md">
            <div className="mb-6 text-center">
              <h1 className="text-xl font-bold tracking-wider uppercase text-neutral-100">
                ADMIN ACCESS PANEL
              </h1>
              <p className="text-xs text-neutral-500 tracking-wider mt-1">
                ENTER SECURE CREDENTIALS TO LAUNCH SYSTEM CONTROLS
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-950/40 border border-red-800 text-red-400 rounded-lg flex items-center gap-3 text-xs tracking-wider font-semibold animate-shake">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2 block">
                  ADMIN EMAIL
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-neutral-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="isharaupulwan@gmail.com"
                    className="w-full bg-[#050505] border border-neutral-800 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00]/30 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2 block">
                  SECURITY KEY / PASSWORD
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-neutral-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-[#050505] border border-neutral-800 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00]/30 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ccff00] hover:bg-[#b5e600] text-black font-extrabold tracking-widest uppercase py-3.5 rounded-lg shadow-[0_4px_20px_rgba(204,255,0,0.15)] hover:shadow-[0_4px_30px_rgba(204,255,0,0.4)] transition-all duration-300 active:scale-[0.98] text-xs mt-2"
              >
                AUTHORIZE ACCESS
              </button>
            </form>

            <div className="mt-6 text-center text-[10px] text-neutral-600 uppercase tracking-widest font-semibold border-t border-neutral-900 pt-5">
              Secure administrative login dashboard
            </div>
          </div>
        </div>
      ) : (
        /* STATE 2: ADMIN USER DIRECTORY VIEW */
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Top Navigation Bar */}
          <header className="bg-[#050505] border-b border-neutral-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-[#ccff00] filter drop-shadow-[0_0_4px_rgba(204,255,0,0.6)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="22" y1="12" x2="18" y2="12" />
                <line x1="6" y1="12" x2="2" y2="12" />
                <line x1="12" y1="6" x2="12" y2="2" />
                <line x1="12" y1="22" x2="12" y2="18" />
              </svg>
              <span className="text-xl font-black italic tracking-wider text-white">
                FUTSNIPE<span className="text-[#ccff00]">BOT</span>
              </span>
              <span className="ml-4 px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800 text-[9px] font-bold tracking-widest uppercase">
                USER CONTROL PANEL
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="border border-neutral-800 hover:border-red-950 hover:bg-red-950/20 hover:text-red-400 text-neutral-400 px-4 py-2 rounded-lg text-[10px] tracking-wider uppercase font-bold transition-all duration-300"
            >
              LOGOUT SYSTEM
            </button>
          </header>

          {/* Quick Metrics Header */}
          <section className="p-6 max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#0d0d0d] border border-neutral-900 rounded-xl p-5 shadow-lg">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                TOTAL REGISTERED
              </span>
              <div className="text-2xl font-black tracking-tight text-white font-mono mt-1">
                {users.length} Users
              </div>
            </div>
            <div className="bg-[#0d0d0d] border border-neutral-900 rounded-xl p-5 shadow-lg">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                ACTIVE TRIALS
              </span>
              <div className="text-2xl font-black tracking-tight text-[#ccff00] font-mono mt-1">
                {users.filter((u) => u.status === "Active").length} Accounts
              </div>
            </div>
            <div className="bg-[#0d0d0d] border border-neutral-900 rounded-xl p-5 shadow-lg">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                EXPIRED TRIALS
              </span>
              <div className="text-2xl font-black tracking-tight text-red-500 font-mono mt-1">
                {users.filter((u) => u.status === "Expired").length} Accounts
              </div>
            </div>
          </section>

          {/* Main Content Panels */}
          <main className="flex-1 p-6 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* ADD USER INTERFACE */}
            <div className="lg:col-span-1 bg-[#0d0d0d] border border-neutral-900 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-5 border-b border-neutral-900 pb-3">
                <svg className="w-4 h-4 text-[#ccff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-xs font-black tracking-widest uppercase text-neutral-100">
                  CREATE USER TRIAL
                </h2>
              </div>

              <form onSubmit={handleAddUser} className="space-y-4">
                <div>
                  <label className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-1.5">
                    EMAIL / USERNAME
                  </label>
                  <input
                    type="email"
                    required
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="user@example.com"
                    className="w-full bg-black border border-neutral-900 focus:border-[#ccff00] focus:ring-0.5 focus:ring-[#ccff00] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-700 outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-1.5">
                    PASSWORD (AUTO-GENERATED)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Password"
                      className="flex-1 bg-black border border-neutral-900 focus:border-[#ccff00] focus:ring-0.5 focus:ring-[#ccff00] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-700 outline-none transition-all duration-300 font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(newPassword);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                      }}
                      className="px-3 bg-neutral-900 border border-neutral-800 hover:border-[#ccff00] hover:text-[#ccff00] rounded-lg text-[10px] font-bold transition-all duration-300 flex items-center justify-center min-w-[70px]"
                    >
                      {copied ? "COPIED" : "COPY"}
                    </button>
                    <button
                      type="button"
                      onClick={generateRandomPassword}
                      className="px-2.5 bg-neutral-900 border border-neutral-800 hover:border-[#ccff00] hover:text-[#ccff00] rounded-lg text-xs transition-all duration-300 flex items-center justify-center"
                      title="Regenerate Password"
                    >
                      🔄
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-1.5">
                    TRIAL DURATION (DAYS)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="365"
                    required
                    value={newTrialDays}
                    onChange={(e) => setNewTrialDays(Number(e.target.value))}
                    className="w-full bg-black border border-neutral-900 focus:border-[#ccff00] focus:ring-0.5 focus:ring-[#ccff00] rounded-lg px-3 py-2.5 text-xs text-white outline-none transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ccff00] hover:bg-[#b5e600] text-black font-extrabold tracking-widest uppercase py-3 rounded-lg shadow-[0_4px_15px_rgba(204,255,0,0.15)] hover:shadow-[0_4px_25px_rgba(204,255,0,0.3)] transition-all duration-300 active:scale-[0.98] text-[10px]"
                >
                  REGISTER ACCOUNT
                </button>
              </form>
            </div>

            {/* DIRECTORY TABLE PANEL */}
            <div className="lg:col-span-2 bg-[#0d0d0d] border border-neutral-900 rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-5 border-b border-neutral-900 pb-3">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#ccff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h2 className="text-xs font-black tracking-widest uppercase text-neutral-100">
                    USER ACCESS DIRECTORY
                  </h2>
                </div>
                <span className="text-[9px] font-bold text-neutral-500 tracking-wider">
                  STABLE CONNECTION
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs tracking-wider border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-900 text-neutral-500 font-bold uppercase text-[9px]">
                      <th className="pb-3 pt-1">EMAIL / USERNAME</th>
                      <th className="pb-3 pt-1 text-center">TRIAL DAYS</th>
                      <th className="pb-3 pt-1">STATUS</th>
                      <th className="pb-3 pt-1">JOINED DATE</th>
                      <th className="pb-3 pt-1 text-right">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-900/60 font-semibold text-neutral-300">
                    {users.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-neutral-600 uppercase tracking-widest text-[10px]">
                          No active users found in directory.
                        </td>
                      </tr>
                    ) : (
                      users.map((u) => (
                        <tr key={u.id} className="hover:bg-neutral-900/20 transition-all duration-150">
                          <td className="py-4 font-bold text-white truncate max-w-[200px]">
                            {u.email}
                          </td>
                          <td className="py-4">
                            <div className="flex items-center justify-center gap-2">
                              {/* Decrease Days Button */}
                              <button
                                onClick={() => adjustTrialDays(u.id, -1)}
                                className="w-6 h-6 rounded bg-neutral-900 border border-neutral-800 hover:border-[#ccff00] hover:text-[#ccff00] flex items-center justify-center text-xs transition-all duration-150"
                              >
                                -
                              </button>
                              
                              <span className="font-mono text-white text-xs w-8 text-center">
                                {u.trialDays}
                              </span>

                              {/* Increase Days Button */}
                              <button
                                onClick={() => adjustTrialDays(u.id, 1)}
                                className="w-6 h-6 rounded bg-neutral-900 border border-neutral-800 hover:border-[#ccff00] hover:text-[#ccff00] flex items-center justify-center text-xs transition-all duration-150"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className={`text-[9px] px-2 py-0.5 rounded border uppercase tracking-wider font-extrabold ${
                              u.status === "Active"
                                ? "text-[#ccff00] border-[#ccff00]/20 bg-[#ccff00]/5"
                                : "text-red-500 border-red-950 bg-red-950/20"
                            }`}>
                              {u.status}
                            </span>
                          </td>
                          <td className="py-4 text-neutral-400 font-mono text-xs">
                            {u.joinedDate}
                          </td>
                          <td className="py-4 text-right">
                            <button
                              onClick={() => handleDeleteUser(u.id)}
                              className="text-neutral-600 hover:text-red-500 p-1.5 rounded transition-all duration-300"
                              title="Delete User"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </main>
        </div>
      )}
    </div>
  );
}
