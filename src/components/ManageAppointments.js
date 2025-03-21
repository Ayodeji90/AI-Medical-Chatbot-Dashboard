import React, { useState, useEffect } from "react";

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    // Fetch appointments from API or mock data
    const fetchAppointments = async () => {
      const response = [
        { id: 1, doctor: "Dr. John Doe", date: "2025-01-16", time: "10:00 AM" },
        { id: 2, doctor: "Dr. Jane Smith", date: "2025-01-18", time: "02:00 PM" },
      ];
      setAppointments(response);  
    };
    fetchAppointments();
  }, []);

  const handleReschedule = (id) => {
    const appointment = appointments.find((app) => app.id === id);
    setSelectedAppointment(appointment);
  };

  const handleCancel = (id) => {
    setAppointments(appointments.filter((app) => app.id !== id));
    alert("Appointment canceled successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-blue-100 to-blue-200 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Manage Your Appointments
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-medium mb-4 text-blue-800">Your Appointments</h2>
        {appointments.length > 0 ? (
          <ul>
            {appointments.map((app) => (
              <li
                key={app.id}
                className="flex justify-between items-center p-4 border-b"
              >
                <div>
                  <p className="text-lg text-gray-800">
                    <strong>Doctor:</strong> {app.doctor}
                  </p>
                  <p className="text-gray-600">
                    <strong>Date:</strong> {app.date} | <strong>Time:</strong> {app.time}
                  </p>
                </div>
                <div>
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-800"
                    onClick={() => handleReschedule(app.id)}
                  >
                    Reschedule
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => handleCancel(app.id)}
                  >
                    Cancel
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">You have no appointments scheduled.</p>
        )}
      </div>

      {selectedAppointment && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Reschedule Appointment</h2>
            <p>
              Reschedule appointment with <strong>{selectedAppointment.doctor}</strong>
            </p>
            {/* Add reschedule form here */}
            <button
              onClick={() => setSelectedAppointment(null)}
              className="mt-4 bg-gray-300 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAppointments;