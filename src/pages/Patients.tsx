
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter } from "lucide-react";
import { 
  Select, SelectContent, SelectItem, 
  SelectTrigger, SelectValue 
} from "@/components/ui/select";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

// Dummy patient data
const patientsData = [
  { 
    id: "P-10045", 
    name: "Emma Wilson", 
    age: 45, 
    gender: "Female",
    phone: "(555) 123-4567",
    email: "emma.wilson@example.com",
    address: "123 Main St, Anytown",
    lastVisit: "2025-04-01",
    insurance: "BlueCross",
    status: "Active" 
  },
  { 
    id: "P-10044", 
    name: "John Smith", 
    age: 62, 
    gender: "Male",
    phone: "(555) 234-5678",
    email: "john.smith@example.com",
    address: "456 Oak Ave, Somewhere",
    lastVisit: "2025-03-28",
    insurance: "Medicare",
    status: "Discharged" 
  },
  { 
    id: "P-10043", 
    name: "Maria Garcia", 
    age: 35, 
    gender: "Female",
    phone: "(555) 345-6789",
    email: "maria.garcia@example.com",
    address: "789 Pine Rd, Elsewhere",
    lastVisit: "2025-04-03",
    insurance: "Aetna",
    status: "Active" 
  },
  { 
    id: "P-10042", 
    name: "Robert Johnson", 
    age: 78, 
    gender: "Male",
    phone: "(555) 456-7890",
    email: "robert.johnson@example.com",
    address: "234 Cedar Ln, Nowhere",
    lastVisit: "2025-03-30",
    insurance: "Medicare",
    status: "Inactive" 
  },
  { 
    id: "P-10041", 
    name: "Sarah Lee", 
    age: 28, 
    gender: "Female",
    phone: "(555) 567-8901",
    email: "sarah.lee@example.com",
    address: "567 Maple Dr, Anyville",
    lastVisit: "2025-04-02",
    insurance: "UnitedHealth",
    status: "Active" 
  },
  { 
    id: "P-10040", 
    name: "David Brown", 
    age: 53, 
    gender: "Male",
    phone: "(555) 678-9012",
    email: "david.brown@example.com",
    address: "890 Elm St, Someplace",
    lastVisit: "2025-03-25",
    insurance: "Cigna",
    status: "Inactive" 
  },
  { 
    id: "P-10039", 
    name: "Jennifer Taylor", 
    age: 41, 
    gender: "Female",
    phone: "(555) 789-0123",
    email: "jennifer.taylor@example.com",
    address: "123 Birch Ave, Othertown",
    lastVisit: "2025-04-05",
    insurance: "Humana",
    status: "Active" 
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'discharged':
      return 'bg-blue-100 text-blue-800';
    case 'inactive':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  const filteredPatients = patientsData.filter((patient) => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         patient.id.toLowerCase().includes(searchTerm.toLowerCase());
                         
    const matchesStatus = statusFilter === "all" || patient.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  return (
    <MainLayout title="Patient Management">
      <div className="animate-fade-in">
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search patients by name or ID..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-2 md:w-auto w-full">
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4 text-gray-400" />
                  <Select
                    value={statusFilter}
                    onValueChange={(value) => setStatusFilter(value)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="discharged">Discharged</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="whitespace-nowrap">
                  <Plus className="mr-2 h-4 w-4" />
                  New Patient
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Insurance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.id}</TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.gender}</TableCell>
                    <TableCell>{patient.phone}</TableCell>
                    <TableCell>{new Date(patient.lastVisit).toLocaleDateString()}</TableCell>
                    <TableCell>{patient.insurance}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(patient.status)} variant="outline">
                        {patient.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="mr-2">View</Button>
                      <Button variant="outline" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Patients;
