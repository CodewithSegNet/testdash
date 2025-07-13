import { useState, useEffect } from "react";
import { SoctralDashboard } from "./components/SoctralDashboard";
import { SoctralSidebar } from "./components/SoctralSidebar";
import { UserManagement } from "./components/UserManagement";
import { DisputeCenter } from "./components/DisputeCenter";
import { ReportsFraudCenter } from "./components/ReportsFraudCenter";
import { WalletSystem } from "./components/WalletSystem";
import { KYCManagement } from "./components/KYCManagement";
import { SettingsNotifications } from "./components/SettingsNotifications";
import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";

type Page = 
  | "overview" 
  | "users" 
  | "disputes" 
  | "reports" 
  | "wallet" 
  | "kyc" 
  | "settings";

const ROUTE_MAP: Record<string, Page> = {
  "/": "overview",
  "/overview": "overview",
  "/users": "users",
  "/disputes": "disputes",
  "/reports": "reports",
  "/wallet": "wallet",
  "/kyc": "kyc",
  "/settings": "settings",
};

const HASH_ROUTE_MAP: Record<string, Page> = {
  "": "overview",
  "overview": "overview",
  "users": "users",
  "disputes": "disputes",
  "reports": "reports",
  "wallet": "wallet",
  "kyc": "kyc",
  "settings": "settings",
};

const PAGE_ROUTES: Record<Page, string> = {
  "overview": "/overview",
  "users": "/users",
  "disputes": "/disputes",
  "reports": "/reports",
  "wallet": "/wallet",
  "kyc": "/kyc",
  "settings": "/settings",
};

export default function App() {
  // Detect if we should use hash routing (fallback for published sites)
  const useHashRouting = () => {
    // Try to detect if we're on a published site that doesn't support history API
    return window.location.hostname.includes('figma') || 
           window.location.hostname.includes('vercel.app') ||
           window.location.hostname.includes('netlify.app');
  };

  const isHashMode = useHashRouting();

  // Get initial page from URL or hash
  const getPageFromPath = (): Page => {
    if (isHashMode) {
      const hash = window.location.hash.slice(2); // Remove "#/" prefix
      return HASH_ROUTE_MAP[hash] || "overview";
    } else {
      return ROUTE_MAP[window.location.pathname] || "overview";
    }
  };

  const [currentPage, setCurrentPage] = useState<Page>(() => {
    return getPageFromPath();
  });

  // Handle navigation events
  useEffect(() => {
    if (isHashMode) {
      // Hash-based routing
      const handleHashChange = () => {
        const newPage = getPageFromPath();
        setCurrentPage(newPage);
      };

      // Set initial hash if none exists
      if (!window.location.hash) {
        window.location.hash = "#/overview";
      }

      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    } else {
      // History API routing
      const handlePopState = () => {
        const newPage = getPageFromPath();
        setCurrentPage(newPage);
      };

      // Redirect root to overview
      if (window.location.pathname === "/") {
        window.history.replaceState(null, "", "/overview");
      }

      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [isHashMode]);

  // Navigate to a new page
  const handleNavigation = (page: Page) => {
    if (isHashMode) {
      // Hash routing
      const route = `#/${page}`;
      if (window.location.hash !== route) {
        window.location.hash = route;
      }
    } else {
      // History API routing
      const route = PAGE_ROUTES[page];
      if (window.location.pathname !== route) {
        window.history.pushState(null, "", route);
        setCurrentPage(page);
      }
    }
  };

  const handleBackToOverview = () => {
    handleNavigation("overview");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "overview":
        return <SoctralDashboard />;
      case "users":
        return <UserManagement onBack={handleBackToOverview} />;
      case "disputes":
        return <DisputeCenter onBack={handleBackToOverview} />;
      case "reports":
        return <ReportsFraudCenter onBack={handleBackToOverview} />;
      case "wallet":
        return <WalletSystem onBack={handleBackToOverview} />;
      case "kyc":
        return <KYCManagement onBack={handleBackToOverview} />;
      case "settings":
        return <SettingsNotifications onBack={handleBackToOverview} />;
      default:
        return <SoctralDashboard />;
    }
  };

  // Update page title
  useEffect(() => {
    const pageTitles: Record<Page, string> = {
      "overview": "Dashboard Overview - Soctral Admin",
      "users": "User Management - Soctral Admin",
      "disputes": "Dispute Center - Soctral Admin", 
      "reports": "Reports & Fraud Center - Soctral Admin",
      "wallet": "Wallet System - Soctral Admin",
      "kyc": "KYC Management - Soctral Admin",
      "settings": "Settings & Notifications - Soctral Admin",
    };
    
    document.title = pageTitles[currentPage];
  }, [currentPage]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <SoctralSidebar 
          currentPage={currentPage} 
          onNavigate={handleNavigation} 
        />
        <SidebarInset>
          <main className="flex-1 p-6">
            {renderPage()}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}