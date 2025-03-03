'use client';
import { useState } from "react";
import Link from "next/link";  // Use Link for routing

const AdoptPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("/api/adopt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Use Link instead of router.push
      window.location.href = "/";  // redirecting to the homepage
    } else {
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="container">
      <h1>Give Up Animal for Adoption</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Type of Animal:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdoptPage;
