import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { SoctralSidebar } from "./SoctralSidebar";
import { Separator } from "./ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { Bell, Search } from "lucide-react";
import { Input } from "./ui/input";

type Page = 
  | "overview" 
  | "users" 
  | "disputes" 
  | "reports" 
  | "wallet" 
  | "kyc" 
  | "settings";

export function SoctralLayout() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<Page>("overview");

  const getSectionTitle = (pathname: string) => {
    // Handle root path
    if (pathname === "/") return "Dashboard Overview";
    
    // Remove leading slash and split path
    const path = pathname.slice(1);
    const segments = path.split("/");
    
    // Map routes to titles
    const routeMap: { [key: string]: string } = {
      "dashboard": "Dashboard Overview",
      "users": "User Management",
      "users/search": "User Search",
      "users/details": "User Details", 
      "users/kyc": "User KYC",
      "disputes": "Dispute Center",
      "disputes/active": "Active Disputes",
      "disputes/resolved": "Resolved Disputes",
      "disputes/escalated": "Escalated Disputes",
      "disputes/evidence": "Evidence Viewer",
      "reports": "Reports and Fraud Center",
      "reports/users": "Reported Users Log",
      "reports/analysis": "Report Analysis",
      "reports/action": "Take Action",
      "wallet": "Wallet System",
      "wallet/admin": "Admin Wallet Control",
      "wallet/history": "Transaction History",
      "wallet/revenue": "Revenue Wallet",
      "wallet/fees": "Fee Wallet",
      "kyc": "KYC Management",
      "kyc/documents": "Document Viewer",
      "kyc/verification": "ID Match & Face Recognition",
      "kyc/approval": "Approve / Reject",
      "settings": "Settings and Notifications",
      "settings/notices": "Site-wide Notices",
      "settings/push": "Push Notifications",
      "settings/roles": "Admin Roles",
      "settings/platform": "Platform Settings",
    };

    return routeMap[path] || "Dashboard Overview";
  };

  const getBreadcrumbs = (pathname: string) => {
    if (pathname === "/") {
      return [{ title: "Dashboard Overview", path: "/" }];
    }

    const path = pathname.slice(1);
    const segments = path.split("/");
    
    const breadcrumbs = [
      { title: "Soctral Admin", path: "/" }
    ];

    // Build breadcrumbs based on path segments
    let currentPath = "";
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const title = getSectionTitle(currentPath);
      breadcrumbs.push({ title, path: currentPath });
    });

    return breadcrumbs;
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    // Here you would typically use your routing library to navigate
    // For example, if using React Router:
    // navigate(`/${page}`);
  };

  const breadcrumbs = getBreadcrumbs(location.pathname);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background">
        <SoctralSidebar currentPage={currentPage} onNavigate={handleNavigate} />
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-card">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.path}>
                    {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
                    <BreadcrumbItem className="hidden md:block">
                      {index === breadcrumbs.length - 1 ? (
                        <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <a href={crumb.path} className="text-muted-foreground hover:text-foreground">
                            {crumb.title}
                          </a>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
            
            {/* Header Actions */}
            <div className="ml-auto flex items-center space-x-4">
              <div className="relative hidden md:block">
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
          
          {/* Main Content - This is where the Outlet will render the routed components */}
          <main className="flex-1 overflow-auto p-6 bg-muted/10">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}