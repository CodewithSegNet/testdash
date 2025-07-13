import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { 
  ShoppingCart, 
  DollarSign, 
  Users, 
  Package, 
  TrendingUp, 
  TrendingDown,
  Eye,
  Star
} from "lucide-react";

export function Dashboard() {
  // Mock data for the dashboard
  const kpiData = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      changeType: "positive" as const,
      icon: DollarSign,
    },
    {
      title: "Orders",
      value: "2,350",
      change: "+180.1%",
      changeType: "positive" as const,
      icon: ShoppingCart,
    },
    {
      title: "Customers",
      value: "1,254",
      change: "+19%",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Products",
      value: "573",
      change: "-2%",
      changeType: "negative" as const,
      icon: Package,
    },
  ];

  const recentOrders = [
    { id: "#3210", customer: "Olivia Martin", email: "olivia.martin@email.com", amount: "$1,999.00", status: "Shipped" },
    { id: "#3209", customer: "Jackson Lee", email: "jackson.lee@email.com", amount: "$39.00", status: "Processing" },
    { id: "#3208", customer: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "$299.00", status: "Shipped" },
    { id: "#3207", customer: "William Kim", email: "will@email.com", amount: "$99.00", status: "Pending" },
    { id: "#3206", customer: "Sofia Davis", email: "sofia.davis@email.com", amount: "$39.00", status: "Delivered" },
  ];

  const topProducts = [
    { name: "Wireless Headphones", sales: 1234, revenue: "$24,680", growth: 15 },
    { name: "Smart Watch", sales: 987, revenue: "$19,740", growth: 8 },
    { name: "Phone Case", sales: 756, revenue: "$7,560", growth: 23 },
    { name: "Laptop Stand", sales: 543, revenue: "$16,290", growth: -5 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>según</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            View Store
          </Button>
          <Button size="sm">
            <Package className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {kpi.changeType === "positive" ? (
                  <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1 text-red-500" />
                )}
                <span className={kpi.changeType === "positive" ? "text-green-500" : "text-red-500"}>
                  {kpi.change}
                </span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.email}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={
                        order.status === "Delivered" ? "default" :
                        order.status === "Shipped" ? "secondary" :
                        order.status === "Processing" ? "outline" : "destructive"
                      }
                      className="text-xs"
                    >
                      {order.status}
                    </Badge>
                    <div className="text-sm font-medium">{order.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{index + 1}.</span>
                        <span className="text-sm font-medium">{product.name}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>{product.sales} sales</span>
                        <span>{product.revenue}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {product.growth > 0 ? (
                        <TrendingUp className="w-3 h-3 text-green-500" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-500" />
                      )}
                      <span className={`text-xs ${product.growth > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {product.growth > 0 ? '+' : ''}{product.growth}%
                      </span>
                    </div>
                  </div>
                  <Progress value={(product.sales / 1500) * 100} className="h-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats Row */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.24%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              <span className="text-green-500">+0.3%</span>
              <span className="ml-1">vs last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Average Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$127.50</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              <span className="text-green-500">+$12.30</span>
              <span className="ml-1">vs last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">4.8</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3 h-3 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Based on 1,234 reviews</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}