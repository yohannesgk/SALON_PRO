import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/ui/stat-card";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar as CalendarIcon,
  DollarSign,
  Star,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  Users,
} from "lucide-react";

// Mock data
const todayAppointments = [
  {
    id: 1,
    client: "Sarah Johnson",
    service: "Haircut & Style",
    time: "09:00 AM",
    duration: "1h",
    price: 850,
    status: "confirmed",
  },
  {
    id: 2,
    client: "Michael Chen",
    service: "Hair Coloring",
    time: "11:00 AM",
    duration: "2h",
    price: 2500,
    status: "confirmed",
  },
  {
    id: 3,
    client: "Emma Wilson",
    service: "Deep Conditioning",
    time: "02:00 PM",
    duration: "45m",
    price: 650,
    status: "pending",
  },
  {
    id: 4,
    client: "David Brown",
    service: "Beard Trim",
    time: "04:00 PM",
    duration: "30m",
    price: 400,
    status: "completed",
  },
];

const performanceMetrics = {
  todayEarnings: 4400,
  weeklyEarnings: 18500,
  monthlyEarnings: 67200,
  todayClients: 4,
  weeklyClients: 23,
  monthlyClients: 89,
  averageRating: 4.8,
  totalReviews: 156,
  commissionRate: 60,
  pendingCommission: 40320,
};

export const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success border-success/20";
      case "confirmed":
        return "bg-primary/10 text-primary border-primary/20";
      case "pending":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Track your appointments, earnings, and performance
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarIcon className="w-4 h-4" />
          <span>{new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
        </div>
      </div>

      {/* Performance Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Today's Earnings"
          value={`ETB ${performanceMetrics.todayEarnings.toLocaleString()}`}
          change={12}
          changeLabel="vs yesterday"
          icon={DollarSign}
        />
        <StatCard
          title="Today's Clients"
          value={performanceMetrics.todayClients}
          icon={Users}
        />
        <StatCard
          title="Average Rating"
          value={performanceMetrics.averageRating}
          icon={Star}
          iconClassName="bg-warning/10"
        />
        <StatCard
          title="Pending Commission"
          value={`ETB ${performanceMetrics.pendingCommission.toLocaleString()}`}
          icon={TrendingUp}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border/50 shadow-md">
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your appointments for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-start justify-between p-4 rounded-lg border border-border/50 hover:bg-accent/50 transition-smooth"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold text-foreground">
                          {appointment.client}
                        </h4>
                        <Badge variant="outline" className={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {appointment.service}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {appointment.time}
                        </span>
                        <span>{appointment.duration}</span>
                        <span className="font-medium text-foreground">
                          ETB {appointment.price}
                        </span>
                      </div>
                    </div>
                    {appointment.status === "pending" && (
                      <div className="flex gap-2 ml-4">
                        <Button size="sm" variant="default">
                          <CheckCircle2 className="w-4 h-4" />
                          Accept
                        </Button>
                        <Button size="sm" variant="outline">
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                    {appointment.status === "confirmed" && (
                      <Button size="sm" variant="outline" className="ml-4">
                        Mark Complete
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Earnings & Commission */}
          <Card className="border-border/50 shadow-md">
            <CardHeader>
              <CardTitle>Earnings & Commission</CardTitle>
              <CardDescription>Your commission breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="week">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="day">Today</TabsTrigger>
                  <TabsTrigger value="week">This Week</TabsTrigger>
                  <TabsTrigger value="month">This Month</TabsTrigger>
                </TabsList>
                <TabsContent value="day" className="space-y-4 mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-lg bg-accent/50 space-y-1">
                      <p className="text-sm text-muted-foreground">Total Revenue</p>
                      <p className="text-2xl font-bold text-foreground">
                        ETB {performanceMetrics.todayEarnings.toLocaleString()}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-success/10 space-y-1">
                      <p className="text-sm text-muted-foreground">Your Commission ({performanceMetrics.commissionRate}%)</p>
                      <p className="text-2xl font-bold text-success">
                        ETB {(performanceMetrics.todayEarnings * performanceMetrics.commissionRate / 100).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="week" className="space-y-4 mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-lg bg-accent/50 space-y-1">
                      <p className="text-sm text-muted-foreground">Total Revenue</p>
                      <p className="text-2xl font-bold text-foreground">
                        ETB {performanceMetrics.weeklyEarnings.toLocaleString()}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-success/10 space-y-1">
                      <p className="text-sm text-muted-foreground">Your Commission ({performanceMetrics.commissionRate}%)</p>
                      <p className="text-2xl font-bold text-success">
                        ETB {(performanceMetrics.weeklyEarnings * performanceMetrics.commissionRate / 100).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="month" className="space-y-4 mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-lg bg-accent/50 space-y-1">
                      <p className="text-sm text-muted-foreground">Total Revenue</p>
                      <p className="text-2xl font-bold text-foreground">
                        ETB {performanceMetrics.monthlyEarnings.toLocaleString()}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-success/10 space-y-1">
                      <p className="text-sm text-muted-foreground">Your Commission ({performanceMetrics.commissionRate}%)</p>
                      <p className="text-2xl font-bold text-success">
                        ETB {(performanceMetrics.monthlyEarnings * performanceMetrics.commissionRate / 100).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Availability Calendar */}
          <Card className="border-border/50 shadow-md">
            <CardHeader>
              <CardTitle>My Availability</CardTitle>
              <CardDescription>Select dates to manage your schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
              <div className="mt-4 space-y-2">
                <Button variant="outline" className="w-full">
                  Set Unavailable Dates
                </Button>
                <Button variant="default" className="w-full">
                  Update Working Hours
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Performance Summary */}
          <Card className="border-border/50 shadow-md">
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Clients Served</span>
                  <span className="font-semibold">{performanceMetrics.monthlyClients}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Reviews</span>
                  <span className="font-semibold">{performanceMetrics.totalReviews}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Avg. Rating</span>
                  <span className="font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-warning text-warning" />
                    {performanceMetrics.averageRating}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Commission Rate</span>
                  <span className="font-semibold text-success">{performanceMetrics.commissionRate}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
