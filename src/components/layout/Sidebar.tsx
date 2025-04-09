
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  Home, Users, Calendar, ClipboardList, 
  Hospital, User, Settings, Menu, X,
  ChevronRight, Bell, Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  isCollapsed: boolean;
}

const NavItem = ({ icon: Icon, label, to, isCollapsed }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all
      ${isActive 
        ? "bg-sidebar-accent text-sidebar-accent-foreground" 
        : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
      }
      ${isCollapsed ? "justify-center" : ""}
    `}
  >
    <Icon className="h-5 w-5" />
    {!isCollapsed && <span className="ml-3">{label}</span>}
  </NavLink>
);

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { icon: Home, label: "Dashboard", to: "/" },
    { icon: Users, label: "Patients", to: "/patients" },
    { icon: Calendar, label: "Appointments", to: "/appointments" },
    { icon: ClipboardList, label: "Medical Records", to: "/records" },
    { icon: Hospital, label: "Departments", to: "/departments" },
    { icon: User, label: "Staff", to: "/staff" },
  ];

  return (
    <div className={`bg-sidebar h-screen flex flex-col text-sidebar-foreground transition-all ${
      isCollapsed ? "w-16" : "w-64"
    }`}>
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <Hospital className="h-6 w-6 text-accent1" />
            <span className="font-bold text-xl">MediCare</span>
          </div>
        )}
        {isCollapsed && <Hospital className="h-6 w-6 text-accent1 mx-auto" />}
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent/50"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {!isCollapsed && (
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-sidebar-foreground/50" />
            <Input 
              placeholder="Search..." 
              className="pl-8 bg-sidebar-accent/30 border-sidebar-border placeholder:text-sidebar-foreground/50"
            />
          </div>
        </div>
      )}

      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            to={item.to}
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>

      <div className="p-2 border-t border-sidebar-border">
        <NavItem
          icon={Settings}
          label="Settings"
          to="/settings"
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
};

export default Sidebar;
