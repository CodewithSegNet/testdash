import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { 
  MessageSquare, 
  Eye, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Image,
  Video,
  Send,
  FileText,
  Gavel,
  Ban,
  DollarSign,
  RotateCcw,
  ArrowLeft
} from "lucide-react";

interface DisputeCenterProps {
  onBack?: () => void;
}

export function DisputeCenter({ onBack }: DisputeCenterProps) {
  const disputes = [
    {
      id: "DSP001",
      transactionId: "TXN001",
      platform: "Instagram",
      accountHandle: "@crypto_trader",
      buyerUsername: "@social_buyer",
      sellerUsername: "@account_seller",
      amount: "2.5 BTC",
      reason: "Account credentials invalid",
      status: "Active",
      priority: "High",
      createdDate: "2024-07-03",
      lastUpdate: "2 hours ago",
      evidenceCount: 3,
      messagesCount: 12
    },
    {
      id: "DSP002",
      transactionId: "TXN005",
      platform: "Twitter",
      accountHandle: "@nft_creator",
      buyerUsername: "@marketing_pro",
      sellerUsername: "@twitter_seller",
      amount: "1.8 BTC",
      reason: "Follower count misrepresented",
      status: "Escalated",
      priority: "Medium",
      createdDate: "2024-07-01",
      lastUpdate: "1 day ago",
      evidenceCount: 5,
      messagesCount: 24
    },
    {
      id: "DSP003",
      transactionId: "TXN008",
      platform: "TikTok",
      accountHandle: "@dance_moves",
      buyerUsername: "@brand_manager",
      sellerUsername: "@tiktok_seller",
      amount: "3.2 BTC",
      reason: "Account suspended after transfer",
      status: "Resolved",
      priority: "Low",
      createdDate: "2024-06-28",
      lastUpdate: "3 days ago",
      evidenceCount: 2,
      messagesCount: 8
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge variant="destructive"><Clock className="w-3 h-3 mr-1" />Active</Badge>;
      case "Escalated":
        return <Badge variant="secondary"><AlertTriangle className="w-3 h-3 mr-1" />Escalated</Badge>;
      case "Resolved":
        return <Badge variant="default"><CheckCircle className="w-3 h-3 mr-1" />Resolved</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return <Badge variant="destructive">High</Badge>;
      case "Medium":
        return <Badge variant="secondary">Medium</Badge>;
      case "Low":
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

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
        <div className="flex items-center space-x-4">
          {onBack && (
            <Button variant="outline" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Overview
            </Button>
          )}
          <div>
            <h1>Dispute Center</h1>
            <p className="text-muted-foreground">
              Manage active disputes, view evidence, and communicate with parties
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <FileText className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Filter Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5" />
            <span>Filter Disputes</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Input placeholder="Search by dispute ID, transaction ID, or username..." className="w-full" />
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Disputes</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="escalated">Escalated</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="low">Low Priority</SelectItem>
              </SelectContent>
            </Select>
            <Button>Filter</Button>
          </div>
        </CardContent>
      </Card>

      {/* Disputes Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Disputes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dispute Details</TableHead>
                <TableHead>Transaction</TableHead>
                <TableHead>Parties</TableHead>
                <TableHead>Status & Priority</TableHead>
                <TableHead>Evidence</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disputes.map((dispute) => (
                <TableRow key={dispute.id}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium">{dispute.id}</div>
                      <div className="text-sm text-muted-foreground">{dispute.reason}</div>
                      <div className="text-xs text-muted-foreground">
                        Created: {dispute.createdDate}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Updated: {dispute.lastUpdate}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium">{dispute.transactionId}</div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs text-white ${platformBadgeColor(dispute.platform)}`}>
                          {dispute.platform}
                        </span>
                      </div>
                      <div className="text-sm">{dispute.accountHandle}</div>
                      <div className="text-sm font-medium">{dispute.amount}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div>
                        <div className="text-xs text-muted-foreground">Buyer</div>
                        <div className="text-sm font-medium">{dispute.buyerUsername}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Seller</div>
                        <div className="text-sm font-medium">{dispute.sellerUsername}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      {getStatusBadge(dispute.status)}
                      {getPriorityBadge(dispute.priority)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1 text-sm">
                        <Image className="w-3 h-3" />
                        <span>{dispute.evidenceCount} files</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm">
                        <MessageSquare className="w-3 h-3" />
                        <span>{dispute.messagesCount} messages</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col space-y-1">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="w-3 h-3 mr-1" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>Dispute Details - {dispute.id}</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-6 py-4">
                            {/* Evidence Section */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-sm">Evidence & Screenshots</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="grid grid-cols-3 gap-4">
                                  <div className="border rounded-lg p-4 text-center">
                                    <Image className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                                    <div className="text-xs">Screenshot 1</div>
                                    <div className="text-xs text-muted-foreground">Account Stats</div>
                                  </div>
                                  <div className="border rounded-lg p-4 text-center">
                                    <Video className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                                    <div className="text-xs">Screen Recording</div>
                                    <div className="text-xs text-muted-foreground">Login Process</div>
                                  </div>
                                  <div className="border rounded-lg p-4 text-center">
                                    <Image className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                                    <div className="text-xs">Screenshot 2</div>
                                    <div className="text-xs text-muted-foreground">Analytics Page</div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Communication Section */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-sm">Communication</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div className="border rounded-lg p-3">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Avatar className="w-6 h-6">
                                      <AvatarFallback>B</AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm font-medium">Buyer</span>
                                    <span className="text-xs text-muted-foreground">2 hours ago</span>
                                  </div>
                                  <p className="text-sm">The account credentials don't work and the follower count dropped by 50% after purchase.</p>
                                </div>
                                <div className="border rounded-lg p-3">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Avatar className="w-6 h-6">
                                      <AvatarFallback>S</AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm font-medium">Seller</span>
                                    <span className="text-xs text-muted-foreground">1 hour ago</span>
                                  </div>
                                  <p className="text-sm">I provided correct credentials. The follower drop might be due to Instagram algorithm changes.</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Textarea placeholder="Send message to parties..." className="flex-1" />
                                  <Button size="sm">
                                    <Send className="w-3 h-3" />
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Verdict Section */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-sm">Mark Verdict</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                  <Button variant="outline" className="flex items-center justify-center space-x-2">
                                    <DollarSign className="w-4 h-4" />
                                    <span>Refund Buyer</span>
                                  </Button>
                                  <Button variant="outline" className="flex items-center justify-center space-x-2">
                                    <RotateCcw className="w-4 h-4" />
                                    <span>Reversal</span>
                                  </Button>
                                  <Button variant="destructive" className="flex items-center justify-center space-x-2">
                                    <Ban className="w-4 h-4" />
                                    <span>Ban Seller</span>
                                  </Button>
                                  <Button variant="default" className="flex items-center justify-center space-x-2">
                                    <Gavel className="w-4 h-4" />
                                    <span>Close Dispute</span>
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="default" size="sm">
                        <Gavel className="w-3 h-3 mr-1" />
                        Resolve
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}