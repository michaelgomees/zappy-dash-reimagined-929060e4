import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Plus } from "lucide-react";

export default function Connections() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PhoneCall className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Conexões</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Conexão
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Conexões</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Gerencie suas conexões WhatsApp e outros canais.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
