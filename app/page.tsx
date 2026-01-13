"use client";

import { useEffect, useState } from "react";
import CandidateForm from "./components/CandidateForm";
import CandidateList from "./components/CandidateList";

type Candidate = {
  name: string;
  email: string;
  role: string;
};

export default function Page() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("candidates");
    if (stored) {
      setCandidates(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("candidates", JSON.stringify(candidates));
  }, [candidates]);

  const addCandidate = (candidate: Candidate) => {
    setCandidates((prev) => [...prev, candidate]);
  };

  const deleteCandidate = (email: string) => {
    setCandidates((prev) =>
      prev.filter((c) => c.email !== email)
    );
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Candidate Management
      </h1>

      <CandidateForm onAdd={addCandidate} />
      <CandidateList
        candidates={candidates}
        onDelete={deleteCandidate}
      />
    </main>
  );
}
