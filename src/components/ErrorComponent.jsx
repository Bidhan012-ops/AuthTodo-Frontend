import React from 'react'

const ErrorComponent = ({ error }) => {
  // Ensure errorList is always an array
  let errorList = [];
  if (Array.isArray(error)) {
    errorList = error;
  } else if (typeof error === 'string' && error.trim() !== '') {
    errorList = [error];
  }

  return (
    <div>
      {errorList.length > 0 && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          <ul>
            {errorList.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ErrorComponent;
