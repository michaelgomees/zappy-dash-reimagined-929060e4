import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function CampaignsConfig() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Settings className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Configurações de Campanhas</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configurações</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Configure os parâmetros das suas campanhas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
