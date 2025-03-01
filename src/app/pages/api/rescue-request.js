// import mysql from 'mysql2';

// // MySQL connection configuration
// const db = mysql.createConnection({
//   host: 'localhost',       // MySQL server address (XAMPP default)
//   user: 'root',            // Default MySQL username for XAMPP
//   password: '',            // Default password (empty in XAMPP)
//   database: 'animal_rescue',  // Your database name
// });

// // Handler for the POST request
// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { name, animalType, phoneNumber, address, pincode, city, image } = req.body;

//       // Log the incoming data to see what’s being sent
//       console.log('Data received for rescue request:', req.body);

//       // SQL query to insert data into rescue_requests table
//       const query = `
//         INSERT INTO rescue_requests (name, animal_type, phone_number, address, pincode, city, image)
//         VALUES (?, ?, ?, ?, ?, ?, ?)
//       `;
//       const values = [name, animalType, phoneNumber, address, pincode, city, image];

//       // Execute the query
//       db.query(query, values, (err, result) => {
//         if (err) {
//           console.error('Database error:', err); // Log any database errors
//           return res.status(500).json({ error: 'Failed to submit the request', details: err });
//         }
//         return res.status(200).json({ message: 'Request submitted successfully' });
//       });
//     } catch (error) {
//       console.error('Error:', error); // Log any other server errors
//       res.status(500).json({ error: 'Something went wrong', details: error });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }
