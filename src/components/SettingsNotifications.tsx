import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface SettingsNotificationsProps {
  onBack: () => void;
}

export function SettingsNotifications({ onBack }: SettingsNotificationsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Overview
        </Button>
        <div>
          <h1>Settings & Notifications</h1>
          <p className="text-muted-foreground">
            Configure platform settings and notification preferences
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
            <li>• Configure platform settings</li>
            <li>• Manage notification preferences</li>
            <li>• Set up email alerts</li>
            <li>• Configure security settings</li>
            <li>• Manage admin user permissions</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}