
import { FormEvent, useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersApiResponse {
  success: boolean;
  users?: User[];
  message?: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // GET - Fetch users
  const fetchUsers = async () => {
    try {
      setError("");

      const response = await fetch("/api/users");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data: UsersApiResponse = await response.json();

      setUsers(data.users ?? []);
    } catch (error) {
      console.error("Fetch users error:", error);
      setError("Unable to load users.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch users when component mounts
  useEffect(() => {
    const controller = new AbortController();

    const loadUsers = async () => {
      try {
        const response = await fetch("/api/users", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: UsersApiResponse = await response.json();

        setUsers(data.users ?? []);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Fetch users error:", error);
          setError("Unable to load users.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadUsers();

    return () => {
      controller.abort();
    };
  }, []);

  // POST - Create user
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data: UsersApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create user");
      }

      alert("User created successfully!");

      setName("");
      setEmail("");

      await fetchUsers();
    } catch (error) {
      console.error("Create user error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    }
  };

  return (
    <div>
      <h1>User Management</h1>

      {/* Create User Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">Create User</button>
      </form>

      <hr />

      <h2>Users List</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p>{error}</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}
