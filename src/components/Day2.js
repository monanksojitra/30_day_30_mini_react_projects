import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Day2 = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the form submission if all required fields are filled
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.city ||
      !formData.zipCode
    ) {
      toast.error("Please fill all required fields and agree to terms.");
      return;
    }
    // Regex patterns for validation

    // Perform the form submission if all validations pass
    console.log(formData);
    toast.success("Form submitted successfully!");
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  const zipCodeRegex = /^\d{6}$/;
  const yearOfAdmissionRegex = /^[1-9][0-9]{3}$/; // Year must be a 4-digit number starting from 1000.

  const handleBlur = (e) => {
    const { id, value } = e.target;

    // Set the validity class for the input field based on its value
    let isValid = true;
    let outlineClass = "form-control is-valid";

    if (id === "email") {
      isValid = emailRegex.test(value);
    } else if (id === "phoneNumber") {
      isValid = phoneRegex.test(value);
    } else if (id === "zipCode") {
      isValid = zipCodeRegex.test(value);
    } else {
      // For other fields, no regex validation
      isValid = value.trim() !== "";
    }

    if (!isValid) {
      outlineClass = "form-control is-invalid";
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
      [`${id}OutlineClass`]: outlineClass,
    }));
  };
  return (
    <>
      <div className="container mt-5">
        <form className="row g-4" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <div className={`form-outline ${formData.firstNameOutlineClass}`}>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please enter a valid first name.
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`form-outline ${formData.lastNameOutlineClass}`}>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please enter a valid last name.
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`form-outline ${formData.dobOutlineClass}`}>
              <input
                type="date"
                className="form-control"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please enter a valid date of birth.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`form-outline ${formData.genderOutlineClass}`}>
              <select
                className="form-control"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              >
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`form-outline ${formData.emailOutlineClass}`}>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`form-outline ${formData.phoneNumberOutlineClass}`}>
              <input
                type="number"
                className="form-control"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please enter a valid phone number.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`form-outline ${formData.addressOutlineClass}`}>
              <input
                type="text"
                className="form-control"
                id="address"
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please enter a valid address.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`form-outline ${formData.cityOutlineClass}`}>
              <input
                type="text"
                className="form-control"
                id="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="city" className="form-label">
                City
              </label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter a valid city.</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`form-outline ${formData.stateOutlineClass}`}>
              <input
                type="text"
                className="form-control"
                id="state"
                value={formData.state}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="state" className="form-label">
                State
              </label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please enter a valid state.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`form-outline ${formData.zipCodeOutlineClass}`}>
              <input
                type="text"
                className="form-control"
                id="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="zipCode" className="form-label">
                Zip Code
              </label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please enter a valid zip code.
              </div>
            </div>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
};

export default Day2;
