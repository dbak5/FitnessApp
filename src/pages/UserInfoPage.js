import React from "react";

export default function UserInfoPage({ children }) {
  return (
    <div>
      <p>Age, weight, sex, goals</p>
      {children}
    </div>
  );
}
