import{ useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const HomeAppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);

  // Add a new appointment
  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  // Delete an appointment by index
  const deleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="mt-4">
      <h3>I tuoi impegni</h3>

      {appointments.length === 0 ? (
        <p>Non ci sono impegni.</p>
      ) : (
        <div>
          {appointments.map((appointment, index) => (
            <Card key={index} className="mb-3">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title>{appointment.eventName}</Card.Title>
                  <Card.Text>
                    Inizio: {appointment.startDate} alle {appointment.startTime} <br />
                    Fine: {appointment.endDate} alle {appointment.endTime} <br />
                    Descrizione: {appointment.description}
                  </Card.Text>
                </div>
                <Button
                  variant="outline-danger"
                  onClick={() => deleteAppointment(index)}
                >
                  Elimina
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

      {/* For testing purposes, let's add a button to simulate adding an appointment */}
   
    </div>
  );
};

export default HomeAppointmentsList;
