import { protectedInstance } from './instance';

const appointmentServices = {
   createAppointment: async (appointmentData, loggedInUserId) => {
    try {
      // Create the appointment object with the fetched user ID and selected service name
      const appointment = new Appointment(
        appointmentData.date,
        appointmentData.time,
        loggedInUserId, // Use the logged-in user's ID
        appointmentData.serviceName // Use the selected service category from the dropdown
      );
  
      // Make a POST request to create the appointment
      const response = await instance.post('/appointments', appointment);
      return response.data; // Return the created appointment data
    } catch (error) {
      throw error; // Throw the error for handling in the component
    }
  },

    getAllAppointments: async () => {
        const token = localStorage.getItem('token');
        return protectedInstance.get('/appointments', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
};

export default appointmentServices;
