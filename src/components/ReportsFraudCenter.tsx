import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ReportsFraudCenterProps {
  onBack: () => void;
}

export function ReportsFraudCenter({ onBack }: ReportsFraudCenterProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Overview
        </Button>
        <div>
          <h1>Reports & Fraud Center</h1>
          <p className="text-muted-foreground">
            Monitor and manage reports and fraud detection
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
            <li>• View and manage user reports</li>
            <li>• Monitor fraud detection alerts</li>
            <li>• Generate fraud analysis reports</li>
            <li>• Configure fraud prevention rules</li>
            <li>• Review suspicious activity patterns</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}