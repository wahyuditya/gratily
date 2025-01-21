import { NextApiRequest, NextApiResponse } from "next";

interface RegisterRequestBody {
  email: string;
  password: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { password }: RegisterRequestBody = req.body;

    // Password validation regex
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error:
          "Password must be at least 8 characters long, contain at least one uppercase letter and one number.",
      });
    }

    // Proceed with registration logic (e.g., saving user to the database)
    // ...

    return res.status(200).json({ message: "Registration successful" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
