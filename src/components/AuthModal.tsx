"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import confetti from "canvas-confetti";

const rawCountryCodes = [
  {"name":"Afghanistan","code":"AF","dial_code":"+93"},
  {"name":"Albania","code":"AL","dial_code":"+355"},
  {"name":"Algeria","code":"DZ","dial_code":"+213"},
  {"name":"Andorra","code":"AD","dial_code":"+376"},
  {"name":"Angola","code":"AO","dial_code":"+244"},
  {"name":"Argentina","code":"AR","dial_code":"+54"},
  {"name":"Armenia","code":"AM","dial_code":"+374"},
  {"name":"Australia","code":"AU","dial_code":"+61"},
  {"name":"Austria","code":"AT","dial_code":"+43"},
  {"name":"Azerbaijan","code":"AZ","dial_code":"+994"},
  {"name":"Bahamas","code":"BS","dial_code":"+1242"},
  {"name":"Bahrain","code":"BH","dial_code":"+973"},
  {"name":"Bangladesh","code":"BD","dial_code":"+880"},
  {"name":"Barbados","code":"BB","dial_code":"+1246"},
  {"name":"Belarus","code":"BY","dial_code":"+375"},
  {"name":"Belgium","code":"BE","dial_code":"+32"},
  {"name":"Bolivia","code":"BO","dial_code":"+591"},
  {"name":"Bosnia and Herzegovina","code":"BA","dial_code":"+387"},
  {"name":"Botswana","code":"BW","dial_code":"+267"},
  {"name":"Brazil","code":"BR","dial_code":"+55"},
  {"name":"Bulgaria","code":"BG","dial_code":"+359"},
  {"name":"Cambodia","code":"KH","dial_code":"+855"},
  {"name":"Cameroon","code":"CM","dial_code":"+237"},
  {"name":"Canada","code":"CA","dial_code":"+1"},
  {"name":"Chile","code":"CL","dial_code":"+56"},
  {"name":"China","code":"CN","dial_code":"+86"},
  {"name":"Colombia","code":"CO","dial_code":"+57"},
  {"name":"Costa Rica","code":"CR","dial_code":"+506"},
  {"name":"Croatia","code":"HR","dial_code":"+385"},
  {"name":"Cuba","code":"CU","dial_code":"+53"},
  {"name":"Cyprus","code":"CY","dial_code":"+357"},
  {"name":"Czech Republic","code":"CZ","dial_code":"+420"},
  {"name":"Denmark","code":"DK","dial_code":"+45"},
  {"name":"Dominican Republic","code":"DO","dial_code":"+1849"},
  {"name":"Ecuador","code":"EC","dial_code":"+593"},
  {"name":"Egypt","code":"EG","dial_code":"+20"},
  {"name":"El Salvador","code":"SV","dial_code":"+503"},
  {"name":"Estonia","code":"EE","dial_code":"+372"},
  {"name":"Ethiopia","code":"ET","dial_code":"+251"},
  {"name":"Finland","code":"FI","dial_code":"+358"},
  {"name":"France","code":"FR","dial_code":"+33"},
  {"name":"Georgia","code":"GE","dial_code":"+995"},
  {"name":"Germany","code":"DE","dial_code":"+49"},
  {"name":"Ghana","code":"GH","dial_code":"+233"},
  {"name":"Greece","code":"GR","dial_code":"+30"},
  {"name":"Guatemala","code":"GT","dial_code":"+502"},
  {"name":"Honduras","code":"HN","dial_code":"+504"},
  {"name":"Hong Kong","code":"HK","dial_code":"+852"},
  {"name":"Hungary","code":"HU","dial_code":"+36"},
  {"name":"Iceland","code":"IS","dial_code":"+354"},
  {"name":"India","code":"IN","dial_code":"+91"},
  {"name":"Indonesia","code":"ID","dial_code":"+62"},
  {"name":"Iran","code":"IR","dial_code":"+98"},
  {"name":"Iraq","code":"IQ","dial_code":"+964"},
  {"name":"Ireland","code":"IE","dial_code":"+353"},
  {"name":"Israel","code":"IL","dial_code":"+972"},
  {"name":"Italy","code":"IT","dial_code":"+39"},
  {"name":"Jamaica","code":"JM","dial_code":"+1876"},
  {"name":"Japan","code":"JP","dial_code":"+81"},
  {"name":"Jordan","code":"JO","dial_code":"+962"},
  {"name":"Kazakhstan","code":"KZ","dial_code":"+7"},
  {"name":"Kenya","code":"KE","dial_code":"+254"},
  {"name":"Korea, South","code":"KR","dial_code":"+82"},
  {"name":"Kuwait","code":"KW","dial_code":"+965"},
  {"name":"Lebanon","code":"LB","dial_code":"+961"},
  {"name":"Libya","code":"LY","dial_code":"+218"},
  {"name":"Lithuania","code":"LT","dial_code":"+370"},
  {"name":"Luxembourg","code":"LU","dial_code":"+352"},
  {"name":"Malaysia","code":"MY","dial_code":"+60"},
  {"name":"Malta","code":"MT","dial_code":"+356"},
  {"name":"Mexico","code":"MX","dial_code":"+52"},
  {"name":"Monaco","code":"MC","dial_code":"+377"},
  {"name":"Morocco","code":"MA","dial_code":"+212"},
  {"name":"Nepal","code":"NP","dial_code":"+977"},
  {"name":"Netherlands","code":"NL","dial_code":"+31"},
  {"name":"New Zealand","code":"NZ","dial_code":"+64"},
  {"name":"Nigeria","code":"NG","dial_code":"+234"},
  {"name":"Norway","code":"NO","dial_code":"+47"},
  {"name":"Oman","code":"OM","dial_code":"+968"},
  {"name":"Pakistan","code":"PK","dial_code":"+92"},
  {"name":"Palestine","code":"PS","dial_code":"+970"},
  {"name":"Panama","code":"PA","dial_code":"+507"},
  {"name":"Paraguay","code":"PY","dial_code":"+595"},
  {"name":"Peru","code":"PE","dial_code":"+51"},
  {"name":"Philippines","code":"PH","dial_code":"+63"},
  {"name":"Poland","code":"PL","dial_code":"+48"},
  {"name":"Portugal","code":"PT","dial_code":"+351"},
  {"name":"Puerto Rico","code":"PR","dial_code":"+1939"},
  {"name":"Qatar","code":"QA","dial_code":"+974"},
  {"name":"Romania","code":"RO","dial_code":"+40"},
  {"name":"Russia","code":"RU","dial_code":"+7"},
  {"name":"Saudi Arabia","code":"SA","dial_code":"+966"},
  {"name":"Senegal","code":"SN","dial_code":"+221"},
  {"name":"Serbia","code":"RS","dial_code":"+381"},
  {"name":"Singapore","code":"SG","dial_code":"+65"},
  {"name":"Slovakia","code":"SK","dial_code":"+421"},
  {"name":"Slovenia","code":"SI","dial_code":"+386"},
  {"name":"South Africa","code":"ZA","dial_code":"+27"},
  {"name":"Spain","code":"ES","dial_code":"+34"},
  {"name":"Sri Lanka","code":"LK","dial_code":"+94"},
  {"name":"Sweden","code":"SE","dial_code":"+46"},
  {"name":"Switzerland","code":"CH","dial_code":"+41"},
  {"name":"Syria","code":"SY","dial_code":"+963"},
  {"name":"Taiwan","code":"TW","dial_code":"+886"},
  {"name":"Tanzania","code":"TZ","dial_code":"+255"},
  {"name":"Thailand","code":"TH","dial_code":"+66"},
  {"name":"Tunisia","code":"TN","dial_code":"+216"},
  {"name":"Turkey","code":"TR","dial_code":"+90"},
  {"name":"Uganda","code":"UG","dial_code":"+256"},
  {"name":"Ukraine","code":"UA","dial_code":"+380"},
  {"name":"United Arab Emirates","code":"AE","dial_code":"+971"},
  {"name":"United Kingdom","code":"GB","dial_code":"+44"},
  {"name":"United States","code":"US","dial_code":"+1"},
  {"name":"Uruguay","code":"UY","dial_code":"+598"},
  {"name":"Venezuela","code":"VE","dial_code":"+58"},
  {"name":"Vietnam","code":"VN","dial_code":"+84"},
  {"name":"Zimbabwe","code":"ZW","dial_code":"+263"}
];

// Pre-sort so that longer dial codes hit first, e.g. +1242 matches before +1
const countryCodes = [...rawCountryCodes].sort((a, b) => b.dial_code.length - a.dial_code.length);


interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (name: string) => void;
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isLoginView, setIsLoginView] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  // Errors State
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      phone: "",
    };

    if (!isLoginView && !formData.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid Email Address is required";
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!isLoginView) {
      const phoneRegex = /^[\d\s\-\+]{7,15}$/;
      if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
        newErrors.phone = "Valid Phone Number is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        const endpoint = isLoginView 
          ? "http://localhost:5000/api/auth/login" 
          : "http://localhost:5000/api/auth/register";

        const bodyData = isLoginView
          ? {
              email: formData.email,
              password: formData.password,
            }
          : {
              name: formData.name,
              email: formData.email,
              password: formData.password,
              phoneNumber: formData.phone,
            };

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        });

        const data = await response.json();

        if (response.ok) {
          // Save to local storage
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify({ 
            name: data.name, 
            email: data.email,
            purchases: data.purchases,
            profits: data.profits 
          }));

          // Notify parent component
          if (onSuccess) {
            onSuccess(data.name);
          }

          // Fire confetti animation instead of alert
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#CCFF00', '#FFFFFF', '#0A0A0A'] // Matching brand colors
          });

          // Close modal smoothly after a short delay so user sees success state
          setTimeout(() => {
            setFormData({ name: "", email: "", password: "", phone: "" }); // Reset form
            onClose();
          }, 1000);
        } else {
          setServerError(data.message || (isLoginView ? "Login failed. Please try again." : "Registration failed. Please try again."));
        }
      } catch (err) {
        setServerError("Network error. Could not connect to the server.");
        console.error("Auth error:", err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const normalizedPhone = formData.phone.startsWith('+') || !formData.phone.trim()
    ? formData.phone 
    : '+' + formData.phone;

  const matchedCountry = countryCodes.find((c) => normalizedPhone.startsWith(c.dial_code));

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="glass-panel w-full max-w-[550px] rounded-xl p-8 shadow-2xl relative overflow-hidden bg-[#141414]/90 border border-neonGreen/20 max-h-[90vh] overflow-y-auto">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neonGreen to-transparent opacity-50"></div>
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-black text-white leading-tight tracking-tight mb-2 uppercase">
              {isLoginView ? "Welcome Back" : "Register Now"}
            </h1>
            <p className="text-gray-400 text-sm">
              {isLoginView ? "Sign in to access your FUT Sniper Pro dashboard." : "Join the elite circle of FUT traders and start sniping today."}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          {!isLoginView && (
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-300 ml-1">Full Name</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neonGreen/60 text-xl">person</span>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#0A0A0A]/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neonGreen/50 focus:border-neonGreen transition-all`}
                  placeholder="Enter your name" 
                  type="text"
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name}</p>}
            </div>
          )}
          
          {/* Email Address */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-300 ml-1">Email Address</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neonGreen/60 text-xl">mail</span>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-[#0A0A0A]/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neonGreen/50 focus:border-neonGreen transition-all`}
                placeholder="example@futsnipebot.com" 
                type="email"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-300 ml-1">Password</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neonGreen/60 text-xl">lock</span>
              <input 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full bg-[#0A0A0A]/50 border ${errors.password ? 'border-red-500' : 'border-white/10'} rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neonGreen/50 focus:border-neonGreen transition-all`}
                placeholder="••••••••" 
                type="password"
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs ml-1">{errors.password}</p>}
          </div>
          
          {/* Phone Number with Auto-Flag */}
          {!isLoginView && (
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-300 ml-1">Phone Number</label>
              <div className="relative">
                {matchedCountry ? (
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center w-6 h-4 overflow-hidden rounded-[2px] shadow-sm border border-white/10">
                    <img 
                      src={`https://flagcdn.com/w40/${matchedCountry.code.toLowerCase()}.png`} 
                      alt={matchedCountry.name} 
                      className="w-full h-full object-cover"
                    />
                  </span>
                ) : (
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neonGreen/60 text-xl pointer-events-none">
                    public
                  </span>
                )}
                <input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-[#0A0A0A]/50 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl py-3.5 pl-[3.25rem] pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neonGreen/50 focus:border-neonGreen transition-all`}
                  placeholder="+44 1234 567890" 
                  type="tel"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs ml-1">{errors.phone}</p>}
            </div>
          )}
          
          <div className="pt-4 space-y-3">
            {serverError && (
              <p className="text-red-500 text-sm text-center bg-red-500/10 py-2 border border-red-500/20 rounded-lg">
                {serverError}
              </p>
            )}
            <button 
              className="w-full bg-neonGreen hover:brightness-110 active:scale-[0.98] transition-all py-4 rounded-xl text-black font-black uppercase tracking-wider text-sm shadow-neon disabled:opacity-50 disabled:cursor-not-allowed" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "PROCESSING..." : (isLoginView ? "SIGN IN" : "CREATE ACCOUNT")}
            </button>
          </div>
          
          <p className="text-center text-xs text-gray-500 mt-4">
            By registering, you agree to our <a className="text-neonGreen hover:underline" href="/terms" onClick={onClose}>Terms of Service</a> and <a className="text-neonGreen hover:underline" href="/privacy" onClick={onClose}>Privacy Policy</a>.
          </p>
        </form>
        
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-2">
          {isLoginView ? (
            <>
              <span className="text-gray-400 text-sm">Don't have an account?</span>
              <button type="button" onClick={() => { setIsLoginView(false); setServerError(""); setErrors({name:"", email:"", password:"", phone:""}); }} className="text-neonGreen font-bold text-sm hover:underline">Register</button>
            </>
          ) : (
            <>
              <span className="text-gray-400 text-sm">Already have an account?</span>
              <button type="button" onClick={() => { setIsLoginView(true); setServerError(""); setErrors({name:"", email:"", password:"", phone:""}); }} className="text-neonGreen font-bold text-sm hover:underline">Log In</button>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
