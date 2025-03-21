import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [specialization, setSpecialization] = useState("");
  const [doctor, setDoctor] = useState("");
  const [time, setTime] = useState("");
  const [interactionMode, setInteractionMode] = useState("");
  const [formFields, setFormFields] = useState({
    name: "",
    contact: "",
    email: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Mock Data for Specializations and Doctors
  const specializations = ["Dentist", "Physician", "Orthopedic", "Cardiologist"];
  const doctorsBySpecialization = {
    Dentist: ["Dr. Alice Johnson", "Dr. Bob Smith"],
    Physician: ["Dr. Charlie White", "Dr. Dana Green"],
    Orthopedic: ["Dr. Ethan Brown", "Dr. Fiona Black"],
    Cardiologist: ["Dr. Grace King", "Dr. Henry Gold"],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formFields.name) newErrors.name = "Full Name is required.";
    if (!formFields.contact) newErrors.contact = "Contact Number is required.";
    if (!formFields.email) newErrors.email = "Email Address is required.";
    if (!specialization) newErrors.specialization = "Select a specialization.";
    if (!doctor) newErrors.doctor = "Select a doctor.";
    if (!selectedDate) newErrors.date = "Select a preferred date.";
    if (!time) newErrors.time = "Select a preferred time.";
    if (!interactionMode) newErrors.interaction = "Select consultation type.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSchedule = () => {
    if (!validateForm()) return;

    setLoading(true);

    // Simulate a delay for scheduling
    setTimeout(() => {
      setLoading(false);
      setShowSuccessModal(true); // Show success modal
      resetForm(); // Reset the form
    }, 1000);
  };

  const resetForm = () => {
    setFormFields({
      name: "",
      contact: "",
      email: "",
      notes: "",
    });
    setSelectedDate(null);
    setSpecialization("");
    setDoctor("");
    setTime("");
    setInteractionMode("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-blue-100 to-blue-200 p-6 relative">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
          Schedule Your Appointment
        </h1>
        <p className="text-lg text-gray-700">
          Book an appointment with your preferred doctor at your convenience.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form>
          {/* Patient Information */}
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formFields.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-600`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 font-medium mb-2">Contact Number</label>
              <input
                type="text"
                name="contact"
                value={formFields.contact}
                onChange={handleInputChange}
                placeholder="Enter your contact number"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.contact ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-600`}
              />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formFields.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-600`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          {/* Specialization Selector */}
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Specialization</label>
            <select
              value={specialization}
              onChange={(e) => {
                setSpecialization(e.target.value);
                setDoctor(""); // Reset doctor when specialization changes
              }}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.specialization ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-600`}
            >
              <option value="" disabled>
                Select specialization
              </option>
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
            {errors.specialization && (
              <p className="text-red-500 text-sm">{errors.specialization}</p>
            )}
          </div>

          {/* Doctor Selector */}
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Select Doctor</label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.doctor ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-600`}
              disabled={!specialization} // Disable if no specialization is selected
            >
              <option value="" disabled>
                {specialization ? "Select a doctor" : "Select a specialization first"}
              </option>
              {specialization &&
                doctorsBySpecialization[specialization].map((doc) => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
            </select>
            {errors.doctor && <p className="text-red-500 text-sm">{errors.doctor}</p>}
          </div>

          {/* Date and Time */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 font-medium mb-2">Preferred Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.date ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-600`}
                placeholderText="Select a date"
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Preferred Time</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.time ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-600`}
              >
                <option value="" disabled>
                  Select a time
                </option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
              </select>
              {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
            </div>
          </div>

          {/* Interaction Mode */}
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Consultation Type</label>
            <select
              value={interactionMode}
              onChange={(e) => setInteractionMode(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.interaction ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-600`}
            >
              <option value="" disabled>
                Select consultation type
              </option>
              <option value="In-person">In-person</option>
              <option value="Video Call">Video Call</option>
              <option value="Chat">Chat</option>
            </select>
            {errors.interaction && <p className="text-red-500 text-sm">{errors.interaction}</p>}
          </div>

          {/* Additional Notes */}
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Additional Notes</label>
            <textarea
              name="notes"
              value={formFields.notes}
              onChange={handleInputChange}
              placeholder="Add any specific concerns or notes"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleSchedule}
              disabled={loading}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              {loading ? "Scheduling..." : "Schedule Appointment"}
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Thank You for Your Appointment
            </h2>
            <p className="text-gray-700 mb-6">
              We will contact you soon to confirm your appointment details.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentPage;