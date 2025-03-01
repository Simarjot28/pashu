// pages/api/adopt.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Extract data from the request body
      const { name, type, description } = req.body;

      // You can insert this data into a database or perform other logic here

      // Send a success response
      return res.status(200).json({ message: "Animal adoption information submitted successfully." });
    } catch (error) {
      console.error("Error processing the adoption request:", error);
      return res.status(500).json({ message: "Server error. Failed to submit the form." });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
