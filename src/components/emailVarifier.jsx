import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const EmailVarifier = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!token) {
      setError("Invalid verification link");
      setLoading(false);
      return;
    }

    const verifyEmail = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users/verify`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (result.success) {
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          setError(result.message || "Verification failed");
        }
      } catch (err) {
        setError("Server error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-md text-center">

        {loading && (
          <p className="text-gray-600">Verifying your email...</p>
        )}

        {!loading && error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <h1 className="text-2xl font-bold text-green-700 mb-4">
              ✅ Email Verified Successfully
            </h1>
            <p className="text-gray-600">
              Redirecting to login...
            </p>
          </>
        )}

      </div>
    </div>
  );
};

export default EmailVarifier;
