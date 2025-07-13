import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Separator } from "./ui/separator";
import { 
  Search, 
  Eye, 
  Ban, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Mail,
  Phone,
  Wallet,
  Shield,
  AlertTriangle,
  Download,
  FileText,
  Image,
  ShieldCheck,
  Users,
  UserCheck,
  UserX,
  UserMinus,
  Filter,
  ArrowUpDown,
  ArrowLeft
} from "lucide-react";

// Mock user data - alphabetically sorted
const allUsers = [
  {
    id: "USR001",
    username: "@alice_trader",
    email: "alice.jones@email.com",
    phone: "+1 234-567-8901",
    joinDate: "2024-01-15",
    kycTier: 1,
    emailVerified: true,
    status: "Active",
    category: "verified",
    totalTrades: 45,
    walletBalance: "12.5 BTC",
    avatar: "/api/placeholder/32/32",
    lastActive: "2 hours ago"
  },
  {
    id: "USR002", 
    username: "@bob_crypto",
    email: "bob.smith@email.com",
    phone: "+1 234-567-8902",
    joinDate: "2024-02-20",
    kycTier: 0,
    emailVerified: false,
    status: "Active",
    category: "pending",
    totalTrades: 23,
    walletBalance: "8.3 BTC",
    avatar: "/api/placeholder/32/32",
    lastActive: "1 day ago"
  },
  {
    id: "USR003",
    username: "@charlie_nft",
    email: "charlie.wilson@email.com", 
    phone: "+1 234-567-8903",
    joinDate: "2024-03-10",
    kycTier: 1,
    emailVerified: true,
    status: "Restricted",
    category: "restricted",
    totalTrades: 12,
    walletBalance: "3.1 BTC",
    avatar: "/api/placeholder/32/32",
    lastActive: "3 days ago"
  },
  {
    id: "USR004",
    username: "@diana_social",
    email: "diana.brown@email.com",
    phone: "+1 234-567-8904",
    joinDate: "2024-04-05",
    kycTier: 1,
    emailVerified: true,
    status: "Active",
    category: "verified",
    totalTrades: 67,
    walletBalance: "18.7 BTC",
    avatar: "/api/placeholder/32/32",
    lastActive: "30 minutes ago"
  },
  {
    id: "USR005",
    username: "@evan_buyer",
    email: "evan.davis@email.com",
    phone: "+1 234-567-8905",
    joinDate: "2024-05-12",
    kycTier: 0,
    emailVerified: true,
    status: "Banned",
    category: "banned",
    totalTrades: 8,
    walletBalance: "0.0 BTC",
    avatar: "/api/placeholder/32/32",
    lastActive: "2 weeks ago"
  },
  {
    id: "USR006",
    username: "@fiona_creator",
    email: "fiona.miller@email.com",
    phone: "+1 234-567-8906",
    joinDate: "2024-06-18",
    kycTier: 0,
    emailVerified: false,
    status: "Active",
    category: "pending",
    totalTrades: 3,
    walletBalance: "2.1 BTC",
    avatar: "/api/placeholder/32/32",
    lastActive: "5 hours ago"
  }
];

// Mock KYC pending users
const kycPendingUsers = [
  {
    id: "KYC001",
    userId: "USR007",
    username: "@george_new",
    email: "george.white@email.com",
    submittedDate: "2024-07-08",
    tier: 2,
    documentType: "Passport",
    documentUrl: "/api/placeholder/document/passport.jpg",
    status: "Under Review",
    notes: "All documents submitted correctly"
  },
  {
    id: "KYC002",
    userId: "USR008",
    username: "@helen_trader",
    email: "helen.taylor@email.com", 
    submittedDate: "2024-07-09",
    tier: 2,
    documentType: "Driver's License",
    documentUrl: "/api/placeholder/document/license.jpg",
    status: "Additional Info Required",
    notes: "Need clearer photo of document"
  },
  {
    id: "KYC003",
    userId: "USR009",
    username: "@ivan_social",
    email: "ivan.johnson@email.com",
    submittedDate: "2024-07-10",
    tier: 3,
    documentType: "Passport + Utility Bill",
    documentUrl: "/api/placeholder/document/passport_bill.jpg",
    status: "Under Review",
    notes: "Premium verification request"
  }
];

interface UserManagementProps {
  onBack?: () => void;
}

export function UserManagement({ onBack }: UserManagementProps) {
  console.log("UserManagement component rendered successfully!"); // Debug log
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<typeof allUsers[0] | null>(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // Filter users based on active tab
  const getFilteredUsers = () => {
    let filtered = allUsers;
    
    switch (activeTab) {
      case "verified":
        filtered = allUsers.filter(user => user.category === "verified");
        break;
      case "pending":
        filtered = allUsers.filter(user => user.category === "pending");
        break;
      case "restricted":
        filtered = allUsers.filter(user => user.category === "restricted");
        break;
      case "banned":
        filtered = allUsers.filter(user => user.category === "banned");
        break;
      default:
        filtered = allUsers;
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(user => 
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort alphabetically
    return filtered.sort((a, b) => {
      const comparison = a.username.localeCompare(b.username);
      return sortOrder === "asc" ? comparison : -comparison;
    });
  };

  const handleUserAction = (userId: string, action: string) => {
    console.log(`${action} user ${userId}`);
    // In real implementation, this would make API calls
  };

  const getTierBadge = (tier: number, emailVerified: boolean) => {
    if (tier === 1 && emailVerified) {
      return (
        <Badge variant="default" className="bg-green-500">
          <ShieldCheck className="w-3 h-3 mr-1" />
          Tier 1 - Verified
        </Badge>
      );
    } else if (tier === 0 && emailVerified) {
      return (
        <Badge variant="secondary">
          <Mail className="w-3 h-3 mr-1" />
          Email Verified
        </Badge>
      );
    } else {
      return (
        <Badge variant="outline">
          <Clock className="w-3 h-3 mr-1" />
          Pending
        </Badge>
      );
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge variant="default" className="bg-green-500">Active</Badge>;
      case "Restricted":
        return <Badge variant="destructive" className="bg-orange-500">Restricted</Badge>;
      case "Banned":
        return <Badge variant="destructive">Banned</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case "all": return <Users className="w-4 h-4" />;
      case "verified": return <UserCheck className="w-4 h-4" />;
      case "pending": return <Clock className="w-4 h-4" />;
      case "restricted": return <UserMinus className="w-4 h-4" />;
      case "banned": return <UserX className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const getTabCount = (tab: string) => {
    switch (tab) {
      case "all": return allUsers.length;
      case "verified": return allUsers.filter(u => u.category === "verified").length;
      case "pending": return allUsers.filter(u => u.category === "pending").length;
      case "restricted": return allUsers.filter(u => u.category === "restricted").length;
      case "banned": return allUsers.filter(u => u.category === "banned").length;
      default: return 0;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {onBack && (
            <Button variant="outline" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Overview
            </Button>
          )}
          <div>
            <h1>User Management</h1>
            <p className="text-muted-foreground">
              Manage user accounts, verification status, and perform administrative actions
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Users
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        {/* Tab Navigation */}
        <div className="flex items-center justify-between">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto">
            <TabsTrigger value="all" className="flex items-center space-x-2">
              {getTabIcon("all")}
              <span className="hidden sm:inline">All Users</span>
              <Badge variant="secondary" className="ml-1">{getTabCount("all")}</Badge>
            </TabsTrigger>
            <TabsTrigger value="verified" className="flex items-center space-x-2">
              {getTabIcon("verified")}
              <span className="hidden sm:inline">Verified</span>
              <Badge variant="secondary" className="ml-1">{getTabCount("verified")}</Badge>
            </TabsTrigger>
            <TabsTrigger value="pending" className="flex items-center space-x-2">
              {getTabIcon("pending")}
              <span className="hidden sm:inline">Pending</span>
              <Badge variant="secondary" className="ml-1">{getTabCount("pending")}</Badge>
            </TabsTrigger>
            <TabsTrigger value="restricted" className="flex items-center space-x-2">
              {getTabIcon("restricted")}
              <span className="hidden sm:inline">Restricted</span>
              <Badge variant="secondary" className="ml-1">{getTabCount("restricted")}</Badge>
            </TabsTrigger>
            <TabsTrigger value="banned" className="flex items-center space-x-2">
              {getTabIcon("banned")}
              <span className="hidden sm:inline">Banned</span>
              <Badge variant="secondary" className="ml-1">{getTabCount("banned")}</Badge>
            </TabsTrigger>
            <TabsTrigger value="kyc" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">KYC Queue</span>
              <Badge variant="secondary" className="ml-1">{kycPendingUsers.length}</Badge>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* User Management Tabs */}
        {["all", "verified", "pending", "restricted", "banned"].map((tab) => (
          <TabsContent key={tab} value={tab} className="space-y-6">
            {/* Search and Controls */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder={`Search ${tab === "all" ? "all" : tab} users...`}
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                  >
                    <ArrowUpDown className="w-4 h-4 mr-2" />
                    Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Users Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {getTabIcon(tab)}
                  <span>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)} Users 
                    ({getFilteredUsers().length})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Contact & Status</TableHead>
                      <TableHead>Verification</TableHead>
                      <TableHead>Account Status</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead>Wallet</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getFilteredUsers().map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>{user.username.slice(1, 3).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.username}</div>
                              <div className="text-sm text-muted-foreground">{user.id}</div>
                              <div className="text-xs text-muted-foreground">
                                Joined {new Date(user.joinDate).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-1 text-sm">
                              <Mail className="w-3 h-3" />
                              <span>{user.email}</span>
                              {user.emailVerified && <CheckCircle className="w-3 h-3 text-green-500" />}
                            </div>
                            <div className="flex items-center space-x-1 text-sm">
                              <Phone className="w-3 h-3" />
                              <span>{user.phone}</span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Last active: {user.lastActive}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getTierBadge(user.kycTier, user.emailVerified)}
                          {user.kycTier === 0 && (
                            <div className="text-xs text-muted-foreground mt-1">
                              Tier 2 & 3: Coming Soon
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(user.status)}
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div className="font-medium">{user.totalTrades} trades</div>
                            <div className="text-muted-foreground">Total completed</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Wallet className="w-3 h-3" />
                            <span className="font-medium">{user.walletBalance}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="sm" onClick={() => setSelectedUser(user)}>
                                  <Eye className="w-3 h-3" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>User Details - {user.username}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="font-medium mb-2">Account Information</h4>
                                      <div className="space-y-2 text-sm">
                                        <p><strong>User ID:</strong> {user.id}</p>
                                        <p><strong>Username:</strong> {user.username}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <p><strong>Phone:</strong> {user.phone}</p>
                                        <p><strong>Join Date:</strong> {user.joinDate}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-medium mb-2">Trading Activity</h4>
                                      <div className="space-y-2 text-sm">
                                        <p><strong>Total Trades:</strong> {user.totalTrades}</p>
                                        <p><strong>Wallet Balance:</strong> {user.walletBalance}</p>
                                        <p><strong>Last Active:</strong> {user.lastActive}</p>
                                        <p><strong>Status:</strong> {user.status}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            
                            {user.status !== "Restricted" && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => handleUserAction(user.id, "restrict")}
                              >
                                <UserMinus className="w-3 h-3" />
                              </Button>
                            )}
                            
                            {user.status !== "Banned" && (
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleUserAction(user.id, "ban")}
                              >
                                <Ban className="w-3 h-3" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        ))}

        {/* KYC Verification Tab */}
        <TabsContent value="kyc" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>KYC Verification Queue</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Review and approve user verification documents. Tier 1 (Email) is automated. 
                Tier 2 & 3 coming soon.
              </p>
            </CardHeader>
            <CardContent>
              {/* Tier Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Tier 1
                      </Badge>
                      <span className="text-sm font-medium">Email Verification</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Automated email verification. Users receive instant verification upon email confirmation.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">
                        <Clock className="w-3 h-3 mr-1" />
                        Tier 2
                      </Badge>
                      <span className="text-sm font-medium">Identity Verification</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      ID document verification. Coming soon - manual review required.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">
                        <Clock className="w-3 h-3 mr-1" />
                        Tier 3
                      </Badge>
                      <span className="text-sm font-medium">Enhanced Verification</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Full compliance verification. Coming soon - premium traders.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Separator className="my-6" />

              {/* KYC Queue Table */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Tier</TableHead>
                    <TableHead>Document Type</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {kycPendingUsers.map((kyc) => (
                    <TableRow key={kyc.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{kyc.username}</div>
                          <div className="text-sm text-muted-foreground">{kyc.email}</div>
                          <div className="text-xs text-muted-foreground">{kyc.userId}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={kyc.tier === 2 ? "secondary" : "outline"}>
                          Tier {kyc.tier}
                          {kyc.tier > 1 && <span className="ml-1 text-xs">(Coming Soon)</span>}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span>{kyc.documentType}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {new Date(kyc.submittedDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={kyc.status === "Under Review" ? "secondary" : "outline"}>
                          {kyc.status === "Under Review" && <Clock className="w-3 h-3 mr-1" />}
                          {kyc.status === "Additional Info Required" && <AlertTriangle className="w-3 h-3 mr-1" />}
                          {kyc.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline">
                                <Eye className="w-3 h-3 mr-1" />
                                Review
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogHeader>
                                <DialogTitle>KYC Document Review - {kyc.username}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="font-medium mb-2">Document Preview</h4>
                                    <div className="border rounded-lg p-4 bg-muted/10">
                                      <div className="flex items-center justify-center h-64 bg-muted rounded">
                                        <div className="text-center">
                                          <Image className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                                          <p className="text-sm text-muted-foreground">
                                            {kyc.documentType} Preview
                                          </p>
                                          <p className="text-xs text-muted-foreground mt-1">
                                            High-resolution document image would appear here
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-2">Verification Details</h4>
                                    <div className="space-y-3">
                                      <div>
                                        <label className="text-sm font-medium">Tier Level</label>
                                        <p className="text-sm text-muted-foreground">Tier {kyc.tier} Verification</p>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium">Document Type</label>
                                        <p className="text-sm text-muted-foreground">{kyc.documentType}</p>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium">Submission Date</label>
                                        <p className="text-sm text-muted-foreground">{kyc.submittedDate}</p>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium">Current Status</label>
                                        <p className="text-sm text-muted-foreground">{kyc.status}</p>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium">Notes</label>
                                        <p className="text-sm text-muted-foreground">{kyc.notes}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Separator />
                                <div className="flex justify-end space-x-2">
                                  <Button variant="outline">
                                    Request More Info
                                  </Button>
                                  <Button variant="destructive">
                                    <XCircle className="w-4 h-4 mr-2" />
                                    Reject
                                  </Button>
                                  <Button className="bg-green-600 hover:bg-green-700">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Approve
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          
                          {kyc.tier <= 1 ? (
                            <>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Approve
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="w-3 h-3 mr-1" />
                                Reject
                              </Button>
                            </>
                          ) : (
                            <Badge variant="secondary" className="text-xs">
                              Coming Soon
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}