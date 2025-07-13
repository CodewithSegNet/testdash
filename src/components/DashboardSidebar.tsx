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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "./ui/sidebar";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  CreditCard,
  Truck,
  Star,
  Tag,
  FileText,
  HelpCircle,
  Store
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface SubMenuItem {
  title: string;
  url: string;
}

interface MenuItem {
  title: string;
  icon: LucideIcon;
  url: string;
  isActive?: boolean;
  badge?: string;
  items?: SubMenuItem[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export function DashboardSidebar() {
  const menuItems: MenuSection[] = [
    {
      title: "Overview",
      items: [
        {
          title: "Dashboard",
          icon: LayoutDashboard,
          url: "#",
          isActive: true,
        },
        {
          title: "Analytics",
          icon: BarChart3,
          url: "#",
        },
      ],
    },
    {
      title: "Commerce",
      items: [
        {
          title: "Orders",
          icon: ShoppingCart,
          url: "#",
          badge: "12",
          items: [
            { title: "All Orders", url: "#" },
            { title: "Pending", url: "#" },
            { title: "Shipped", url: "#" },
            { title: "Delivered", url: "#" },
          ],
        },
        {
          title: "Products",
          icon: Package,
          url: "#",
          items: [
            { title: "All Products", url: "#" },
            { title: "Categories", url: "#" },
            { title: "Inventory", url: "#" },
            { title: "Reviews", url: "#" },
          ],
        },
        {
          title: "Customers",
          icon: Users,
          url: "#",
        },
      ],
    },
    {
      title: "Management",
      items: [
        {
          title: "Payments",
          icon: CreditCard,
          url: "#",
        },
        {
          title: "Shipping",
          icon: Truck,
          url: "#",
        },
        {
          title: "Discounts",
          icon: Tag,
          url: "#",
        },
        {
          title: "Reports",
          icon: FileText,
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Store Settings",
          icon: Store,
          url: "#",
        },
        {
          title: "General",
          icon: Settings,
          url: "#",
        },
        {
          title: "Support",
          icon: HelpCircle,
          url: "#",
        },
      ],
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center space-x-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Store className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">My Store</span>
            <span className="text-xs text-muted-foreground no-underline">eCommerce Dashboard</span>
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
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={item.isActive}
                      className="w-full"
                    >
                      <a href={item.url} className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="ml-auto bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    </SidebarMenuButton>
                    {item.items && (
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                {subItem.title}
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
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
            <SidebarMenuButton asChild>
              <div className="flex items-center space-x-2 px-2 py-2">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <div className="flex flex-col flex-1 text-left">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">Store Owner</span>
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