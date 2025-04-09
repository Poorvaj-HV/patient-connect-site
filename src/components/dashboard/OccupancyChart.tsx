
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

// Dummy data for department occupancy
const occupancyData = [
  { name: 'ICU', occupancy: 78 },
  { name: 'Emergency', occupancy: 82 },
  { name: 'Cardiology', occupancy: 62 },
  { name: 'Pediatrics', occupancy: 45 },
  { name: 'Neurology', occupancy: 70 },
  { name: 'Oncology', occupancy: 58 },
  { name: 'OB/GYN', occupancy: 55 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border p-2 rounded-md shadow-sm">
        <p className="font-medium">{`${payload[0].name} : ${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
};

const OccupancyChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Department Occupancy</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={occupancyData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              dy={10}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
            <Bar 
              dataKey="occupancy" 
              fill="#0ea5e9" 
              radius={[4, 4, 0, 0]} 
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
          <div>Average Occupancy: 64%</div>
          <div className="flex items-center">
            <span className={`inline-block w-2 h-2 rounded-full bg-green-500 mr-1`}></span>
            <span>Available</span>
            <span className={`inline-block w-2 h-2 rounded-full bg-yellow-500 mx-1`}></span>
            <span>80-90%</span>
            <span className={`inline-block w-2 h-2 rounded-full bg-medical mx-1`}></span>
            <span>{'>'} 90%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OccupancyChart;
