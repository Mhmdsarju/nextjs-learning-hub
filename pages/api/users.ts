import type { NextApiRequest, NextApiResponse } from "next";

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Sarju",
    email: "sarju@example.com",
  },
  {
    id: 2,
    name: "Arun",
    email: "arun@example.com",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      users,
    });
  }

  if (req.method === "POST") {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
      });
    }

    const newUser: User = {
      id: users.length + 1,
      name,
      email,
    };

    users.push(newUser);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  }

  return res.status(405).json({
    success: false,
    message: "Method not allowed",
  });
}
