
import { Users, Calendar, ClipboardList, Bed } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentPatients from "@/components/dashboard/RecentPatients";
import UpcomingAppointments from "@/components/dashboard/UpcomingAppointments";
import OccupancyChart from "@/components/dashboard/OccupancyChart";

const Index = () => {
  return (
    <MainLayout title="Dashboard">
      <div className="animate-fade-in">
        <div className="dashboard-grid mb-6">
          <StatsCard 
            title="Total Patients" 
            value="1,284" 
            icon={<Users className="h-5 w-5" />} 
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard 
            title="Appointments Today" 
            value="42" 
            icon={<Calendar className="h-5 w-5" />} 
            trend={{ value: 4, isPositive: true }}
          />
          <StatsCard 
            title="Available Beds" 
            value="87 / 203" 
            icon={<Bed className="h-5 w-5" />} 
            trend={{ value: 6, isPositive: false }}
          />
          <StatsCard 
            title="Medical Records Updated" 
            value="857" 
            icon={<ClipboardList className="h-5 w-5" />} 
            trend={{ value: 8, isPositive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <OccupancyChart />
          <UpcomingAppointments />
        </div>

        <div className="mb-6">
          <RecentPatients />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
