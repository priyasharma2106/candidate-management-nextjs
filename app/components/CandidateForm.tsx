"use client";

import { useState } from "react";

type Candidate = {
  name: string;
  email: string;
  role: string;
};

export default function CandidateForm({
  onAdd,
}: {
  onAdd: (candidate: Candidate) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !role) {
      setError("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    onAdd({ name, email, role });

    setName("");
    setEmail("");
    setRole("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded">
      <h2 className="text-lg font-semibold mb-2">Add Candidate</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        className="w-full p-2 border mb-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full p-2 border mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full p-2 border mb-2"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Candidate
      </button>
    </form>
  );
}
