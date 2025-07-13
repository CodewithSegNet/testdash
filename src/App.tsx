import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { SoctralDashboard } from "./components/SoctralDashboard";
import { SoctralSidebar } from "./components/SoctralSidebar";
import { UserManagement } from "./components/UserManagement";
import { DisputeCenter } from "./components/DisputeCenter";
import { ReportsFraudCenter } from "./components/ReportsFraudCenter";
import { WalletSystem } from "./components/WalletSystem";
import { KYCManagement } from "./components/KYCManagement";
import { SettingsNotifications } from "./components/SettingsNotifications";
import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import './index.css'
import './App.css'

type Page = 
  | "overview" 
  | "users" 
  | "disputes" 
  | "reports" 
  | "wallet" 
  | "kyc" 
  | "settings";

const PAGE_ROUTES: Record<Page, string> = {
  "overview": "/overview",
  "users": "/users",
  "disputes": "/disputes",
  "reports": "/reports",
  "wallet": "/wallet",
  "kyc": "/kyc",
  "settings": "/settings",
};

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get current page from pathname
  const getCurrentPage = (): Page => {
    const path = location.pathname.slice(1); // Remove leading "/"
    return (path as Page) || "overview";
  };

  const currentPage = getCurrentPage();

  const handleNavigation = (page: Page) => {
    navigate(PAGE_ROUTES[page]);
  };

  const handleBackToOverview = () => {
    navigate("/overview");
  };

  // Update page title based on current page
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
            <Routes>
              <Route path="/" element={<SoctralDashboard />} />
              <Route path="/overview" element={<SoctralDashboard />} />
              <Route path="/users" element={<UserManagement onBack={handleBackToOverview} />} />
              <Route path="/disputes" element={<DisputeCenter onBack={handleBackToOverview} />} />
              <Route path="/reports" element={<ReportsFraudCenter onBack={handleBackToOverview} />} />
              <Route path="/wallet" element={<WalletSystem onBack={handleBackToOverview} />} />
              <Route path="/kyc" element={<KYCManagement onBack={handleBackToOverview} />} />
              <Route path="/settings" element={<SettingsNotifications onBack={handleBackToOverview} />} />
            </Routes>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}