import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface KYCManagementProps {
  onBack: () => void;
}

export function KYCManagement({ onBack }: KYCManagementProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Overview
        </Button>
        <div>
          <h1>KYC Management</h1>
          <p className="text-muted-foreground">
            Manage Know Your Customer verification processes
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section is under development. Here you will be able to:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Review KYC verification submissions</li>
            <li>• Approve or reject verification documents</li>
            <li>• Manage verification tiers (Tier 1, 2, 3)</li>
            <li>• Configure verification requirements</li>
            <li>• Generate compliance reports</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}