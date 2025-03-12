import React from 'react'
import { useState } from 'react';
import '../css/RegisterExam.css';

const RegisterExam = ()=> {
    const [formData, setFormData] = useState({
        fullname: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        qualification: "",
        institution: "",
        passingYear: "",
        examName: "",
        examDate: "",
        examCenter: "",
        idProof: null,
        photo: null,
        signature: null,
        paymentMethod: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
      };
    
      return (
        <div className="container" id='no1'>
          <h2>Exam Registration</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="fullname" placeholder="Full Name" onChange={handleChange} required />
            <input type="date" name="dob" onChange={handleChange} required />
            <select name="gender" onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
            <input type="text" name="qualification" placeholder="Highest Qualification" onChange={handleChange} required />
            <input type="text" name="institution" placeholder="Institution Name" onChange={handleChange} required />
            <input type="number" name="passingYear" placeholder="Year of Passing" onChange={handleChange} required />
            <input type="text" name="examName" placeholder="Exam Name" onChange={handleChange} required />
            <input type="date" name="examDate" onChange={handleChange} required />
            <input type="text" name="examCenter" placeholder="Preferred Exam Center" onChange={handleChange} />
            <label>Upload ID Proof:</label>
            <input type="file" name="idProof" onChange={handleFileChange} required />
            <label>Upload Photo:</label>
            <input type="file" name="photo" onChange={handleFileChange} required />
            <label>Upload Signature:</label>
            <input type="file" name="signature" onChange={handleFileChange} required />
            <select name="paymentMethod" onChange={handleChange}>
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="UPI">UPI</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default RegisterExam