import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/ui/stat-card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  DollarSign,
  Users,
  Calendar,
  Award,
  Clock,
} from "lucide-react";

// Mock data for charts
const revenueData = [
  { month: "Jan", revenue: 45000, appointments: 120, target: 50000 },
  { month: "Feb", revenue: 52000, appointments: 145, target: 50000 },
  { month: "Mar", revenue: 48000, appointments: 135, target: 50000 },
  { month: "Apr", revenue: 61000, appointments: 168, target: 60000 },
  { month: "May", revenue: 55000, appointments: 152, target: 60000 },
  { month: "Jun", revenue: 67000, appointments: 189, target: 60000 },
];

const servicePerformanceData = [
  { name: "Hair Styling", revenue: 125000, bookings: 450, avgRating: 4.8 },
  { name: "Nail Care", revenue: 89000, bookings: 380, avgRating: 4.7 },
  { name: "Spa Treatment", revenue: 156000, bookings: 280, avgRating: 4.9 },
  { name: "Makeup", revenue: 78000, bookings: 210, avgRating: 4.6 },
  { name: "Skincare", revenue: 95000, bookings: 320, avgRating: 4.8 },
];

const staffPerformanceData = [
  { name: "Sarah M.", appointments: 189, revenue: 67000, rating: 4.9, efficiency: 95 },
  { name: "Mike J.", appointments: 156, revenue: 55000, rating: 4.7, efficiency: 88 },
  { name: "Emma L.", appointments: 178, revenue: 62000, rating: 4.8, efficiency: 92 },
  { name: "David K.", appointments: 145, revenue: 51000, rating: 4.6, efficiency: 85 },
];

const timeDistributionData = [
  { time: "9AM-11AM", bookings: 45 },
  { time: "11AM-1PM", bookings: 78 },
  { time: "1PM-3PM", bookings: 92 },
  { time: "3PM-5PM", bookings: 110 },
  { time: "5PM-7PM", bookings: 125 },
  { time: "7PM-9PM", bookings: 68 },
];

const clientRetentionData = [
  { name: "New Clients", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Returning", value: 45, color: "hsl(var(--chart-2))" },
  { name: "Loyal", value: 20, color: "hsl(var(--chart-3))" },
];

const Analytics = () => {
  return (
    <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Track your salon's performance and insights
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="ETB 328K"
            change={12.5}
            changeLabel="vs last month"
            icon={DollarSign}
          />
          <StatCard
            title="Total Bookings"
            value="1,284"
            change={8.2}
            changeLabel="vs last month"
            icon={Calendar}
          />
          <StatCard
            title="Avg. Rating"
            value="4.8"
            change={3.1}
            changeLabel="vs last month"
            icon={Award}
          />
          <StatCard
            title="Utilization"
            value="87%"
            change={-2.3}
            changeLabel="vs last month"
            icon={Clock}
          />
        </div>

        <Tabs defaultValue="revenue" className="space-y-4">
          <TabsList>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
          </TabsList>

          {/* Revenue Analytics */}
          <TabsContent value="revenue" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>Monthly revenue vs target</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        name="Revenue"
                      />
                      <Line
                        type="monotone"
                        dataKey="target"
                        stroke="hsl(var(--muted-foreground))"
                        strokeDasharray="5 5"
                        name="Target"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Appointment Volume</CardTitle>
                  <CardDescription>Monthly bookings trend</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="appointments" fill="hsl(var(--chart-2))" name="Bookings" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Peak Hours</CardTitle>
                <CardDescription>Booking distribution by time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={timeDistributionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="bookings" fill="hsl(var(--chart-3))" name="Bookings" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Service Analytics */}
          <TabsContent value="services" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Service Performance</CardTitle>
                <CardDescription>Revenue and bookings by service category</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={servicePerformanceData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                    <YAxis dataKey="name" type="category" width={120} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Revenue (ETB)" />
                    <Bar dataKey="bookings" fill="hsl(var(--chart-2))" name="Bookings" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-5">
              {servicePerformanceData.map((service) => (
                <Card key={service.name}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Revenue</p>
                        <p className="text-lg font-bold">ETB {(service.revenue / 1000).toFixed(0)}K</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Bookings</p>
                        <p className="text-sm font-semibold">{service.bookings}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Rating</p>
                        <p className="text-sm font-semibold">{service.avgRating} ⭐</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Staff Analytics */}
          <TabsContent value="staff" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Staff Performance</CardTitle>
                <CardDescription>Individual staff metrics and efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {staffPerformanceData.map((staff, index) => (
                    <div
                      key={staff.name}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-smooth"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                          #{index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{staff.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {staff.appointments} appointments • ETB {(staff.revenue / 1000).toFixed(0)}K
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Rating</p>
                          <p className="text-sm font-semibold">{staff.rating} ⭐</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Efficiency</p>
                          <p className="text-sm font-semibold">{staff.efficiency}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Client Analytics */}
          <TabsContent value="clients" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Client Retention</CardTitle>
                  <CardDescription>Client distribution by loyalty</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={clientRetentionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {clientRetentionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Client Insights</CardTitle>
                  <CardDescription>Key client metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground">Total Clients</p>
                        <p className="text-2xl font-bold">2,847</p>
                      </div>
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground">New This Month</p>
                        <p className="text-2xl font-bold">234</p>
                        <p className="text-xs text-success">+12% from last month</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-success" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground">Avg. Visit Frequency</p>
                        <p className="text-2xl font-bold">2.3x</p>
                        <p className="text-xs text-muted-foreground">per month</p>
                      </div>
                      <Calendar className="w-8 h-8 text-chart-2" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground">Avg. Lifetime Value</p>
                        <p className="text-2xl font-bold">ETB 4.2K</p>
                      </div>
                      <DollarSign className="w-8 h-8 text-chart-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
