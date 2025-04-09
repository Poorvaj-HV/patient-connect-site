
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Plus, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dummy appointments data
const appointmentsData = {
  today: [
    {
      id: "A-3245",
      time: "09:30 AM",
      patient: "David Johnson",
      doctor: "Dr. Emily Richards",
      department: "Orthopedics",
      status: "Scheduled",
      type: "Consultation"
    },
    {
      id: "A-3246",
      time: "10:15 AM",
      patient: "Sarah Miller",
      doctor: "Dr. Robert Chen",
      department: "Cardiology",
      status: "In Progress",
      type: "Follow-up"
    },
    {
      id: "A-3247",
      time: "11:00 AM",
      patient: "Thomas Wilson",
      doctor: "Dr. Jessica Taylor",
      department: "Neurology",
      status: "Completed",
      type: "Consultation"
    },
    {
      id: "A-3248",
      time: "02:30 PM",
      patient: "Amanda Garcia",
      doctor: "Dr. Michael Patel",
      department: "General Medicine",
      status: "Scheduled",
      type: "Check-up"
    }
  ],
  upcoming: [
    {
      id: "A-3249",
      date: "2025-04-11",
      time: "10:00 AM",
      patient: "William Brown",
      doctor: "Dr. Emily Richards",
      department: "Orthopedics",
      status: "Scheduled",
      type: "Surgery"
    },
    {
      id: "A-3250",
      date: "2025-04-11",
      time: "01:45 PM",
      patient: "Elizabeth Davis",
      doctor: "Dr. Robert Chen",
      department: "Cardiology",
      status: "Scheduled",
      type: "Consultation"
    },
    {
      id: "A-3251",
      date: "2025-04-12",
      time: "09:15 AM",
      patient: "James Wilson",
      doctor: "Dr. Jessica Taylor",
      department: "Neurology",
      status: "Scheduled",
      type: "Follow-up"
    },
    {
      id: "A-3252",
      date: "2025-04-12",
      time: "11:30 AM",
      patient: "Patricia Martinez",
      doctor: "Dr. Michael Patel",
      department: "General Medicine",
      status: "Scheduled",
      type: "Check-up"
    },
    {
      id: "A-3253",
      date: "2025-04-14",
      time: "03:00 PM",
      patient: "Robert Anderson",
      doctor: "Dr. Susan Kim",
      department: "Dermatology",
      status: "Scheduled",
      type: "Consultation"
    }
  ],
  past: [
    {
      id: "A-3240",
      date: "2025-04-03",
      time: "11:15 AM",
      patient: "John Taylor",
      doctor: "Dr. Emily Richards",
      department: "Orthopedics",
      status: "Completed",
      type: "Check-up"
    },
    {
      id: "A-3241",
      date: "2025-04-02",
      time: "09:30 AM",
      patient: "Linda Johnson",
      doctor: "Dr. Robert Chen",
      department: "Cardiology",
      status: "No-show",
      type: "Consultation"
    },
    {
      id: "A-3242",
      date: "2025-04-01",
      time: "02:45 PM",
      patient: "Michael Brown",
      doctor: "Dr. Jessica Taylor",
      department: "Neurology",
      status: "Completed",
      type: "Follow-up"
    },
  ]
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'scheduled':
      return 'bg-blue-100 text-blue-800';
    case 'in progress':
      return 'bg-yellow-100 text-yellow-800';
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'cancelled':
      return 'bg-gray-100 text-gray-800';
    case 'no-show':
      return 'bg-medical bg-opacity-10 text-medical';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const AppointmentCard = ({ appointment, showDate = false }: { appointment: any, showDate?: boolean }) => {
  return (
    <Card className="mb-4 overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row border-l-4 border-hospital-600">
          <div className="md:w-44 p-4 bg-hospital-50 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start">
            <div className="flex items-center text-hospital-700">
              <Clock className="h-4 w-4 mr-2" />
              <span className="font-medium">{appointment.time}</span>
            </div>
            {showDate && (
              <div className="flex items-center text-hospital-700 mt-0 md:mt-1">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(appointment.date).toLocaleDateString()}</span>
              </div>
            )}
            <Badge className={getStatusColor(appointment.status)} variant="outline" className="mt-0 md:mt-2">
              {appointment.status}
            </Badge>
          </div>
          
          <div className="flex-1 p-4 flex flex-col md:flex-row">
            <div className="flex-1">
              <div className="flex items-start mb-2">
                <User className="h-4 w-4 mr-2 mt-1 text-gray-500" />
                <div>
                  <h3 className="font-medium">{appointment.patient}</h3>
                  <p className="text-sm text-muted-foreground">{appointment.type}</p>
                </div>
              </div>
              
              <div className="text-sm">
                <p className="text-muted-foreground">{appointment.doctor}</p>
                <p className="text-muted-foreground">{appointment.department}</p>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4 md:mt-0 md:items-center">
              <Button variant="outline" size="sm">Reschedule</Button>
              <Button size="sm" variant={appointment.status === "Scheduled" ? "default" : "outline"}>
                {appointment.status === "Scheduled" ? "Check In" : "View Details"}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Appointments = () => {
  return (
    <MainLayout title="Appointments">
      <div className="animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Appointment Management</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Appointment
          </Button>
        </div>
        
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          
          <TabsContent value="today" className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-4">Today's Appointments ({appointmentsData.today.length})</h3>
              {appointmentsData.today.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming" className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-4">Upcoming Appointments ({appointmentsData.upcoming.length})</h3>
              {appointmentsData.upcoming.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} showDate={true} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="past" className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-4">Past Appointments ({appointmentsData.past.length})</h3>
              {appointmentsData.past.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} showDate={true} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Appointments;
