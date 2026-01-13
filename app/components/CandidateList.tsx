type Candidate = {
  name: string;
  email: string;
  role: string;
};

export default function CandidateList({
  candidates,
  onDelete,
}: {
  candidates: Candidate[];
  onDelete: (email: string) => void;
}) {
  if (candidates.length === 0) {
    return <p className="text-gray-500">No candidates added yet.</p>;
  }

  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Role</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((c) => (
          <tr key={c.email}>
            <td className="border p-2">{c.name}</td>
            <td className="border p-2">{c.email}</td>
            <td className="border p-2">{c.role}</td>
            <td className="border p-2">
              <button
                className="text-red-600"
                onClick={() => onDelete(c.email)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
