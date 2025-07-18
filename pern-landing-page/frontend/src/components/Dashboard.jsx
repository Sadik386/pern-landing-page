import React, { useState } from 'react';
import {
  Card, CardHeader, CardTitle, CardContent,
} from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from './ui/pagination';
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem } from './ui/sidebar';
import { Avatar, AvatarFallback } from './ui/avatar';
import { CalendarIcon, Download, Plus, LayoutDashboard, ShoppingBag, Package, Users, BarChart2, Settings } from 'lucide-react';

const kpiData = [
  { label: 'Total Orders', value: 1240, icon: <ShoppingBag className="text-primary" /> },
  { label: 'Pending Orders', value: 87, icon: <Package className="text-yellow-500" /> },
  { label: 'Revenue', value: '$58,400', icon: <BarChart2 className="text-green-500" /> },
  { label: 'Cancelled Orders', value: 12, icon: <Package className="text-destructive" /> },
];

const statusColors = {
  'Pending': 'secondary',
  'Completed': 'default',
  'Cancelled': 'destructive',
  'Processing': 'outline',
};

const ordersMock = Array.from({ length: 42 }, (_, i) => ({
  id: 1000 + i,
  customer: `Customer ${i + 1}`,
  status: ['Pending', 'Completed', 'Cancelled', 'Processing'][i % 4],
  total: `$${(Math.random() * 500 + 50).toFixed(2)}`,
  date: `2024-06-${(i % 28 + 1).toString().padStart(2, '0')}`,
}));

const statusOptions = ['All', 'Pending', 'Completed', 'Cancelled', 'Processing'];

function Dashboard() {
  const [status, setStatus] = useState('All');
  const [search, setSearch] = useState('');
  const [dateRange, setDateRange] = useState(undefined);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // Filter logic
  const filteredOrders = ordersMock.filter(order => {
    const matchesStatus = status === 'All' || order.status === status;
    const matchesSearch =
      order.id.toString().includes(search) ||
      order.customer.toLowerCase().includes(search.toLowerCase());
    // Date range filter (mock, not implemented)
    return matchesStatus && matchesSearch;
  });
  const totalPages = Math.ceil(filteredOrders.length / pageSize);
  const paginatedOrders = filteredOrders.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <SidebarProvider>
        <Sidebar className="hidden md:flex bg-sidebar border-r min-h-screen w-60">
          <SidebarContent>
            <div className="flex flex-col gap-2 py-6">
              <div className="flex items-center gap-2 px-6 mb-8">
                <LayoutDashboard className="text-primary" />
                <span className="font-bold text-lg">OrderDash</span>
              </div>
              <SidebarMenu>
                <SidebarMenuItem icon={<LayoutDashboard />} asChild>
                  <a href="/dashboard">Dashboard</a>
                </SidebarMenuItem>
                <SidebarMenuItem icon={<ShoppingBag />} asChild>
                  <a href="#">Orders</a>
                </SidebarMenuItem>
                <SidebarMenuItem icon={<Package />} asChild>
                  <a href="#">Products</a>
                </SidebarMenuItem>
                <SidebarMenuItem icon={<Users />} asChild>
                  <a href="#">Customers</a>
                </SidebarMenuItem>
                <SidebarMenuItem icon={<BarChart2 />} asChild>
                  <a href="#">Reports</a>
                </SidebarMenuItem>
                <SidebarMenuItem icon={<Settings />} asChild>
                  <a href="#">Settings</a>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen bg-background">
        {/* Top nav bar (reuse Header in App) - add search and avatar for tablet */}
        <div className="md:hidden flex items-center justify-between px-4 py-2 border-b bg-white/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="text-primary" />
            <span className="font-bold text-lg">OrderDash</span>
          </div>
          <div className="flex items-center gap-2">
            <Input
              className="w-32 sm:w-48"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {kpiData.map((kpi) => (
            <Card key={kpi.label} className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{kpi.label}</CardTitle>
                {kpi.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Filters and Actions */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between px-4 py-2">
          <div className="flex gap-2 items-center">
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map(opt => (
                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="relative">
              <CalendarIcon className="absolute left-2 top-2.5 text-muted-foreground size-4" />
              <Input
                className="pl-8 w-36"
                placeholder="Date Range"
                readOnly
                value={dateRange ? `${dateRange.from?.toLocaleDateString()} - ${dateRange.to?.toLocaleDateString()}` : ''}
                onClick={() => setDateRange({ from: new Date(), to: new Date() })} // mock
              />
              {/* In a real app, use a popover with <Calendar mode="range" ... /> */}
            </div>
            <Input
              className="w-40"
              placeholder="Search orders..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex gap-2">
              <Download className="size-4" /> Export CSV
            </Button>
            <Button className="flex gap-2">
              <Plus className="size-4" /> Add Order
            </Button>
          </div>
        </div>
        {/* Orders Table */}
        <div className="flex-1 p-4">
          <div className="bg-card rounded-xl shadow-sm border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total Amount</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedOrders.map(order => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <Badge variant={statusColors[order.status] || 'default'}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>{order.date}</TableCell>
                  </TableRow>
                ))}
                {paginatedOrders.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                      No orders found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            {/* Pagination */}
            <div className="py-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      aria-disabled={page === 1}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        isActive={page === i + 1}
                        onClick={() => setPage(i + 1)}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      aria-disabled={page === totalPages}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;