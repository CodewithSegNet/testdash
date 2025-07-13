import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  Users, 
  DollarSign, 
  ShoppingBag, 
  Wallet, 
  TrendingUp, 
  TrendingDown,
  Eye,
  Activity,
  Bitcoin,
  CheckCircle,
  XCircle,
  BarChart3
} from "lucide-react";

export function SoctralDashboard() {
  // Mock data for the dashboard
  const kpiData = [
    {
      title: "Total Users",
      value: "12,456",
      change: "+23.4%",
      changeType: "positive" as const,
      icon: Users,
      description: "Registered platform users",
    },
    {
      title: "Total Active Listings",
      value: "1,342",
      change: "+12.1%",
      changeType: "positive" as const,
      icon: ShoppingBag,
      description: "Live social media accounts",
    },
    {
      title: "Revenue",
      value: "45.7 BTC",
      change: "+8.3%",
      changeType: "positive" as const,
      icon: DollarSign,
      description: "Total platform earnings",
      subValue: "~$1,234,567"
    },
    {
      title: "Total Funds Held",
      value: "156.2 BTC",
      change: "-2.1%",
      changeType: "negative" as const,
      icon: Wallet,
      description: "Funds in escrow",
      subValue: "~$4,234,890"
    },
    {
      title: "Total Trading Volume",
      value: "892.3 BTC",
      change: "+34.7%",
      changeType: "positive" as const,
      icon: BarChart3,
      description: "All-time trading volume",
      subValue: "~$24,156,890"
    },
    {
      title: "Monthly Successful Trades",
      value: "1,847",
      change: "+18.2%",
      changeType: "positive" as const,
      icon: CheckCircle,
      description: "Completed this month",
    },
    {
      title: "Monthly Unsuccessful Trades",
      value: "127",
      change: "-5.3%",
      changeType: "positive" as const,
      icon: XCircle,
      description: "Failed/cancelled this month",
    },
  ];

  const recentTransactions = [
    { 
      id: "#TXN001", 
      type: "Account Sale", 
      platform: "Instagram", 
      seller: "@crypto_trader", 
      buyer: "@social_buyer", 
      amount: "2.5 BTC", 
      status: "Completed",
      followers: "125K",
      date: "2 hours ago"
    },
    { 
      id: "#TXN002", 
      type: "Account Sale", 
      platform: "Twitter", 
      seller: "@nft_creator", 
      buyer: "@marketing_pro", 
      amount: "1.8 BTC", 
      status: "In Escrow",
      followers: "89K",
      date: "4 hours ago"
    },
    { 
      id: "#TXN003", 
      type: "Account Sale", 
      platform: "TikTok", 
      seller: "@dance_moves", 
      buyer: "@brand_manager", 
      amount: "3.2 BTC", 
      status: "Pending",
      followers: "250K",
      date: "6 hours ago"
    },
    { 
      id: "#TXN004", 
      type: "Account Sale", 
      platform: "YouTube", 
      seller: "@tech_reviewer", 
      buyer: "@startup_ceo", 
      amount: "5.1 BTC", 
      status: "Disputed",
      followers: "500K",
      date: "1 day ago"
    },
  ];

  const monthlyStats = {
    successful: 1847,
    unsuccessful: 127,
    successRate: ((1847 / (1847 + 127)) * 100).toFixed(1),
    totalAttempts: 1847 + 127
  };

  const topPerformingCategories = [
    { platform: "Instagram", sales: 234, revenue: "45.2 BTC", growth: 15, successRate: 96.2 },
    { platform: "Twitter", sales: 187, revenue: "32.1 BTC", growth: 8, successRate: 94.8 },
    { platform: "TikTok", sales: 156, revenue: "28.7 BTC", growth: 23, successRate: 97.1 },
    { platform: "YouTube", sales: 89, revenue: "67.3 BTC", growth: -5, successRate: 92.3 },
  ];

  const platformBadgeColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram": return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "twitter": return "bg-blue-500";
      case "tiktok": return "bg-black";
      case "youtube": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Complete overview of your social media trading platform
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            View Platform
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Activity className="w-4 h-4 mr-2" />
            Live Monitoring
          </Button>
        </div>
      </div>

      {/* KPI Cards - Updated Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {kpiData.slice(0, 4).map((kpi) => (
          <Card key={kpi.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              {kpi.subValue && (
                <div className="text-sm text-muted-foreground">{kpi.subValue}</div>
              )}
              <div className="flex items-center text-xs text-muted-foreground mt-1">
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
              <p className="text-xs text-muted-foreground mt-1">{kpi.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional KPI Cards Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {kpiData.slice(4).map((kpi) => (
          <Card key={kpi.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              {kpi.subValue && (
                <div className="text-sm text-muted-foreground">{kpi.subValue}</div>
              )}
              <div className="flex items-center text-xs text-muted-foreground mt-1">
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
              <p className="text-xs text-muted-foreground mt-1">{kpi.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Monthly Trade Success/Failure Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5" />
            <span>Monthly Trade Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">Successful Trades</span>
              </div>
              <div className="text-2xl font-bold text-green-500">{monthlyStats.successful}</div>
              <Progress value={(monthlyStats.successful / monthlyStats.totalAttempts) * 100} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium">Unsuccessful Trades</span>
              </div>
              <div className="text-2xl font-bold text-red-500">{monthlyStats.unsuccessful}</div>
              <Progress value={(monthlyStats.unsuccessful / monthlyStats.totalAttempts) * 100} className="h-2" />
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Success Rate</span>
              <div className="text-2xl font-bold text-blue-500">{monthlyStats.successRate}%</div>
              <div className="text-xs text-muted-foreground">This month</div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Total Attempts</span>
              <div className="text-2xl font-bold">{monthlyStats.totalAttempts}</div>
              <div className="text-xs text-muted-foreground">This month</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bitcoin className="w-5 h-5" />
              <span>Recent Transactions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs text-white ${platformBadgeColor(transaction.platform)}`}>
                        {transaction.platform}
                      </span>
                      <span className="text-xs text-muted-foreground">{transaction.followers} followers</span>
                    </div>
                    <p className="text-sm font-medium">{transaction.seller} → {transaction.buyer}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>{transaction.id}</span>
                      <span>•</span>
                      <span>{transaction.date}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge 
                      variant={
                        transaction.status === "Completed" ? "default" :
                        transaction.status === "In Escrow" ? "secondary" :
                        transaction.status === "Pending" ? "outline" : "destructive"
                      }
                      className="text-xs"
                    >
                      {transaction.status}
                    </Badge>
                    <div className="text-sm font-medium">{transaction.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Platform Performance with Success Rates */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Platform Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformingCategories.map((platform, index) => (
                <div key={platform.platform} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{index + 1}.</span>
                        <span className={`px-2 py-1 rounded text-xs text-white ${platformBadgeColor(platform.platform)}`}>
                          {platform.platform}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>{platform.sales} sales</span>
                        <span>{platform.revenue}</span>
                        <span>{platform.successRate}% success</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {platform.growth > 0 ? (
                        <TrendingUp className="w-3 h-3 text-green-500" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-500" />
                      )}
                      <span className={`text-xs ${platform.growth > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {platform.growth > 0 ? '+' : ''}{platform.growth}%
                      </span>
                    </div>
                  </div>
                  <Progress value={(platform.sales / 300) * 100} className="h-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}