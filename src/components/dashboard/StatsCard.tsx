
import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatsCard = ({ title, value, icon, trend, className }: StatsCardProps) => {
  return (
    <Card className={cn("p-6 stats-card card-gradient", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          
          {trend && (
            <div className="flex items-center mt-2">
              <span className={cn(
                "text-xs font-medium",
                trend.isPositive ? "text-green-600" : "text-medical"
              )}>
                {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
              </span>
              <span className="text-xs text-gray-500 ml-1">vs last month</span>
            </div>
          )}
        </div>
        
        <div className="rounded-full p-2 bg-hospital-100 text-hospital-700">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
