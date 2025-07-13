import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarRail,
} from "./ui/sidebar";
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  AlertTriangle, 
  Wallet, 
  FileCheck, 
  Settings, 
  TrendingUp
} from "lucide-react";
import { LucideIcon } from "lucide-react";

type Page = 
  | "overview" 
  | "users" 
  | "disputes" 
  | "reports" 
  | "wallet" 
  | "kyc" 
  | "settings";

interface MenuItem {
  title: string;
  icon: LucideIcon;
  page: Page;
  isActive: boolean;
  badge?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface SoctralSidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function SoctralSidebar({ currentPage, onNavigate }: SoctralSidebarProps) {
  const menuItems: MenuSection[] = [
    {
      title: "Main",
      items: [
        {
          title: "Dashboard Overview",
          icon: LayoutDashboard,
          page: "overview",
          isActive: currentPage === "overview",
        },
      ],
    },
    {
      title: "User Operations",
      items: [
        {
          title: "User Management",
          icon: Users,
          page: "users",
          isActive: currentPage === "users",
        },
        {
          title: "KYC Management",
          icon: FileCheck,
          page: "kyc",
          isActive: currentPage === "kyc",
        },
      ],
    },
    {
      title: "Security & Compliance",
      items: [
        {
          title: "Dispute Center",
          icon: MessageSquare,
          page: "disputes",
          isActive: currentPage === "disputes",
          badge: "12",
        },
        {
          title: "Reports and Fraud Center",
          icon: AlertTriangle,
          page: "reports",
          isActive: currentPage === "reports",
          badge: "5",
        },
      ],
    },
    {
      title: "Financial Management",
      items: [
        {
          title: "Wallet System",
          icon: Wallet,
          page: "wallet",
          isActive: currentPage === "wallet",
        },
      ],
    },
    {
      title: "Administration",
      items: [
        {
          title: "Settings and Notifications",
          icon: Settings,
          page: "settings",
          isActive: currentPage === "settings",
        },
      ],
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center space-x-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Soctral</span>
            <span className="text-xs text-muted-foreground">Admin Dashboard</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {menuItems.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.page}>
                    <SidebarMenuButton 
                      isActive={item.isActive}
                      className="w-full cursor-pointer"
                      onClick={() => onNavigate(item.page)}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                          {item.badge}
                        </span>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <div className="flex items-center space-x-2 px-2 py-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">AD</span>
                </div>
                <div className="flex flex-col flex-1 text-left">
                  <span className="text-sm font-medium">Admin User</span>
                  <span className="text-xs text-muted-foreground">Super Administrator</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}