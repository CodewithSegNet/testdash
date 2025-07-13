import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface WalletSystemProps {
  onBack: () => void;
}

export function WalletSystem({ onBack }: WalletSystemProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Overview
        </Button>
        <div>
          <h1>Wallet System</h1>
          <p className="text-muted-foreground">
            Manage cryptocurrency wallets and transactions
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
            <li>• Monitor platform wallet balances</li>
            <li>• View transaction history</li>
            <li>• Manage escrow funds</li>
            <li>• Configure withdrawal settings</li>
            <li>• Generate financial reports</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}