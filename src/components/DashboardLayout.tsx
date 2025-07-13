import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { Dashboard } from "./Dashboard";
import { Separator } from "./ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
export function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col overflow-hidden min-w-0"> {/* Add min-w-0 */}
          {/* Header */}
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    eCommerce
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          
          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6">
            <div className="max-w-none"> {/* Ensure content doesn't expand beyond container */}
              <Dashboard />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}