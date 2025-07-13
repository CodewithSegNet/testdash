import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  Users, 
  DollarSign, 
  ShoppingBag, 
  Wallet, 
  TrendingUp, 
  TrendingDown,
  Eye,
  AlertTriangle,
  Shield,
  Activity,
  Bitcoin,
  Coins,
  CheckCircle,
  XCircle,
  BarChart3,
  Search,
  Bell,
  MessageSquare,
  FileCheck,
  Settings,
  LayoutDashboard,
  Ban,
  Send,
  Image,
  Video,
  Gavel,
  Clock
} from "lucide-react";

// Static version optimized for Figma export
export function SoctralFigmaExport() {
  return (
    <div className="flex h-screen w-full bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-sidebar-border flex flex-col">
        {/* Sidebar Header */}
        <div className="border-b border-sidebar-border p-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Soctral</span>
              <span className="text-xs text-muted-foreground">Admin Dashboard</span>
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 p-4 space-y-6">
          {/* Main Section */}
          <div className="space-y-2">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Main</div>
            <div className="flex items-center space-x-2 px-2 py-2 bg-primary text-primary-foreground rounded-md">
              <LayoutDashboard className="h-4 w-4" />
              <span className="text-sm">Dashboard Overview</span>
            </div>
          </div>

          {/* User Operations */}
          <div className="space-y-2">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">User Operations</div>
            <div className="flex items-center space-x-2 px-2 py-2 hover:bg-muted rounded-md">
              <Users className="h-4 w-4" />
              <span className="text-sm">User Management</span>
            </div>
            <div className="flex items-center space-x-2 px-2 py-2 hover:bg-muted rounded-md">
              <FileCheck className="h-4 w-4" />
              <span className="text-sm">KYC Management</span>
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="space-y-2">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Security & Compliance</div>
            <div className="flex items-center space-x-2 px-2 py-2 hover:bg-muted rounded-md">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm">Dispute Center</span>
              <span className="ml-auto bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">12</span>
            </div>
            <div className="flex items-center space-x-2 px-2 py-2 hover:bg-muted rounded-md">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm">Reports and Fraud Center</span>
              <span className="ml-auto bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">5</span>
            </div>
          </div>

          {/* Financial Management */}
          <div className="space-y-2">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Financial Management</div>
            <div className="flex items-center space-x-2 px-2 py-2 hover:bg-muted rounded-md">
              <Wallet className="h-4 w-4" />
              <span className="text-sm">Wallet System</span>
            </div>
          </div>

          {/* Administration */}
          <div className="space-y-2">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Administration</div>
            <div className="flex items-center space-x-2 px-2 py-2 hover:bg-muted rounded-md">
              <Settings className="h-4 w-4" />
              <span className="text-sm">Settings and Notifications</span>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-sm font-medium text-white">AD</span>
            </div>
            <div className="flex flex-col flex-1 text-left">
              <span className="text-sm font-medium">Admin User</span>
              <span className="text-xs text-muted-foreground">Super Administrator</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-card">
          <Button variant="ghost" size="sm">
            <LayoutDashboard className="h-4 w-4" />
          </Button>
          <Separator orientation="vertical" className="mr-2 h-4" />
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-muted-foreground">Soctral Admin</span>
            <span className="text-muted-foreground">/</span>
            <span>Dashboard Overview</span>
          </div>
          
          {/* Header Actions */}
          <div className="ml-auto flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8 w-64" />
            </div>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                7
              </span>
            </Button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-sm font-medium text-white">AD</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6 bg-muted/10">
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

            {/* KPI Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,456</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                    <span className="text-green-500">+23.4%</span>
                    <span className="ml-1">from last month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Registered platform users</p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Active Listings</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,342</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                    <span className="text-green-500">+12.1%</span>
                    <span className="ml-1">from last month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Live social media accounts</p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45.7 BTC</div>
                  <div className="text-sm text-muted-foreground">~$1,234,567</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                    <span className="text-green-500">+8.3%</span>
                    <span className="ml-1">from last month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Total platform earnings</p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Funds Held</CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156.2 BTC</div>
                  <div className="text-sm text-muted-foreground">~$4,234,890</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <TrendingDown className="w-3 h-3 mr-1 text-red-500" />
                    <span className="text-red-500">-2.1%</span>
                    <span className="ml-1">from last month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Funds in escrow</p>
                </CardContent>
              </Card>
            </div>

            {/* Additional KPI Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Trading Volume</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">892.3 BTC</div>
                  <div className="text-sm text-muted-foreground">~$24,156,890</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                    <span className="text-green-500">+34.7%</span>
                    <span className="ml-1">from last month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">All-time trading volume</p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Successful Trades</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,847</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                    <span className="text-green-500">+18.2%</span>
                    <span className="ml-1">from last month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Completed this month</p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Unsuccessful Trades</CardTitle>
                  <XCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <TrendingDown className="w-3 h-3 mr-1 text-green-500" />
                    <span className="text-green-500">-5.3%</span>
                    <span className="ml-1">from last month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Failed/cancelled this month</p>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Trade Analysis */}
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
                    <div className="text-2xl font-bold text-green-500">1,847</div>
                    <Progress value={93.6} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <XCircle className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-medium">Unsuccessful Trades</span>
                    </div>
                    <div className="text-2xl font-bold text-red-500">127</div>
                    <Progress value={6.4} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium">Success Rate</span>
                    <div className="text-2xl font-bold text-blue-500">93.6%</div>
                    <div className="text-xs text-muted-foreground">This month</div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium">Total Attempts</span>
                    <div className="text-2xl font-bold">1,974</div>
                    <div className="text-xs text-muted-foreground">This month</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bottom Row */}
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
                    <div className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 rounded text-xs text-white bg-gradient-to-r from-purple-500 to-pink-500">
                            Instagram
                          </span>
                          <span className="text-xs text-muted-foreground">125K followers</span>
                        </div>
                        <p className="text-sm font-medium">@crypto_trader → @social_buyer</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>#TXN001</span>
                          <span>•</span>
                          <span>2 hours ago</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge variant="default" className="text-xs">
                          Completed
                        </Badge>
                        <div className="text-sm font-medium">2.5 BTC</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 rounded text-xs text-white bg-blue-500">
                            Twitter
                          </span>
                          <span className="text-xs text-muted-foreground">89K followers</span>
                        </div>
                        <p className="text-sm font-medium">@nft_creator → @marketing_pro</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>#TXN002</span>
                          <span>•</span>
                          <span>4 hours ago</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge variant="secondary" className="text-xs">
                          In Escrow
                        </Badge>
                        <div className="text-sm font-medium">1.8 BTC</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 rounded text-xs text-white bg-black">
                            TikTok
                          </span>
                          <span className="text-xs text-muted-foreground">250K followers</span>
                        </div>
                        <p className="text-sm font-medium">@dance_moves → @brand_manager</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>#TXN003</span>
                          <span>•</span>
                          <span>6 hours ago</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge variant="outline" className="text-xs">
                          Pending
                        </Badge>
                        <div className="text-sm font-medium">3.2 BTC</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Platform Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Platform Performance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">1.</span>
                            <span className="px-2 py-1 rounded text-xs text-white bg-gradient-to-r from-purple-500 to-pink-500">
                              Instagram
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>234 sales</span>
                            <span>45.2 BTC</span>
                            <span>96.2% success</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-green-500">+15%</span>
                        </div>
                      </div>
                      <Progress value={78} className="h-1" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">2.</span>
                            <span className="px-2 py-1 rounded text-xs text-white bg-blue-500">
                              Twitter
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>187 sales</span>
                            <span>32.1 BTC</span>
                            <span>94.8% success</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-green-500">+8%</span>
                        </div>
                      </div>
                      <Progress value={62} className="h-1" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">3.</span>
                            <span className="px-2 py-1 rounded text-xs text-white bg-black">
                              TikTok
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>156 sales</span>
                            <span>28.7 BTC</span>
                            <span>97.1% success</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-green-500">+23%</span>
                        </div>
                      </div>
                      <Progress value={52} className="h-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}