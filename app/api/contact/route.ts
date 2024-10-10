import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { username, email, organization, service, message } = req.body;

    // Process the form data here (e.g., store it, send an email, etc.)

    return res.status(200).json({ message: "Form submitted successfully!" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
