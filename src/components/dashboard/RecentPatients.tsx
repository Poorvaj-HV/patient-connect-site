
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Dummy data for recent patients
const recentPatients = [
  { 
    id: "P-10023",
    name: "Emma Wilson", 
    age: 45, 
    dateAdmitted: "2025-03-05", 
    department: "Cardiology",
    status: "Active"
  },
  { 
    id: "P-10022",
    name: "Michael Brown", 
    age: 62, 
    dateAdmitted: "2025-03-04", 
    department: "Neurology",
    status: "Critical"
  },
  { 
    id: "P-10021",
    name: "Sophia Lee", 
    age: 28, 
    dateAdmitted: "2025-03-02", 
    department: "Orthopedics",
    status: "Stable"
  },
  { 
    id: "P-10020",
    name: "James Taylor", 
    age: 34, 
    dateAdmitted: "2025-03-01", 
    department: "General Surgery",
    status: "Recovering"
  },
  { 
    id: "P-10019",
    name: "Olivia Garcia", 
    age: 51, 
    dateAdmitted: "2025-02-28", 
    department: "Oncology",
    status: "Active"
  }
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-blue-100 text-blue-800';
    case 'critical':
      return 'bg-medical bg-opacity-10 text-medical';
    case 'stable':
      return 'bg-green-100 text-green-800';
    case 'recovering':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const RecentPatients = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Recent Patients</CardTitle>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Admitted</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell className="font-medium">{patient.id}</TableCell>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.department}</TableCell>
                  <TableCell>{new Date(patient.dateAdmitted).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(patient.status)} variant="outline">
                      {patient.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentPatients;
