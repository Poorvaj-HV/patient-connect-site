
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Dummy data for upcoming appointments
const appointments = [
  {
    id: "A-3245",
    patientName: "David Johnson",
    time: "09:30 AM",
    date: "2025-04-10",
    doctor: "Dr. Emily Richards",
    department: "Orthopedics"
  },
  {
    id: "A-3246",
    patientName: "Sarah Miller",
    time: "10:15 AM",
    date: "2025-04-10",
    doctor: "Dr. Robert Chen",
    department: "Cardiology"
  },
  {
    id: "A-3247",
    patientName: "Thomas Wilson",
    time: "11:00 AM",
    date: "2025-04-10",
    doctor: "Dr. Jessica Taylor",
    department: "Neurology"
  },
  {
    id: "A-3248",
    patientName: "Amanda Garcia",
    time: "02:30 PM",
    date: "2025-04-10",
    doctor: "Dr. Michael Patel",
    department: "General Medicine"
  }
];

const UpcomingAppointments = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Today's Appointments</CardTitle>
        <Button variant="outline" size="sm">View Calendar</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-start p-3 rounded-lg border bg-card">
              <div className="rounded-md bg-hospital-100 text-hospital-700 p-2 mr-4 text-center min-w-[60px]">
                <div className="font-bold">{appointment.time}</div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{appointment.patientName}</h4>
                <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                <p className="text-xs text-muted-foreground mt-1">{appointment.department}</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Reschedule</Button>
                <Button size="sm">Check In</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingAppointments;
