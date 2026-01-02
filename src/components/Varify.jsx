import React, { useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const VarifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleCheckStatus = async () => {
    if (!email) {
      setError("Email record not found. Please try signing up again.");
      return;
    }
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch(`${BASE_URL}/users/check-verification`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (result.success && result.isVerified) {
        alert("Email verified successfully! You can now log in.");
        navigate("/login");
      } else {
        setError("Your email is not yet verified. Please check your inbox.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendEmail = async () => {
    if (!email) {
      setError("Email record not found. Please try signing up again.");
      return;
    }
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch(`${BASE_URL}/users/resend-verification`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (result.success) {
        setMessage("Verification email has been resent successfully!");
      } else {
        setError(result.message || "Failed to resend email.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 p-4 font-sans text-left">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center transform transition-all hover:scale-[1.01]">
        <div className="mb-8 flex justify-center">
          <div className="p-6 bg-blue-100 rounded-full text-blue-600 animate-bounce">
            <FaEnvelopeOpenText size={60} />
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Verify Your Email
        </h1>

        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          We've sent a verification link to {email ? <strong className="text-blue-600">{email}</strong> : "your inbox"}.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          Please click the link to activate your account and start your journey.
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium border border-red-100">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-medium border border-emerald-100">
            {message}
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={handleCheckStatus}
            disabled={loading}
            className={`w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-200 focus:ring-4 focus:ring-blue-300 active:scale-95 cursor-pointer flex items-center justify-center ${loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full block"></span>
            ) : null}
            I've Verified My Email
          </button>

          <p className="text-sm text-gray-500">
            Didn't receive the email?{" "}
            <button
              onClick={handleResendEmail}
              disabled={loading}
              className="text-blue-600 font-semibold hover:underline cursor-pointer disabled:opacity-50 disabled:no-underline"
            >
              Resend Link
            </button>
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          {!email && (
            <button
              onClick={() => navigate("/signup")}
              className="text-sm text-gray-500 hover:text-blue-600 transition-colors cursor-pointer block w-full mb-4 underline"
            >
              Back to Sign Up
            </button>
          )}
          <p className="text-xs text-gray-400">
            Check your spam folder if you don't see the email in your inbox.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VarifyEmail;
