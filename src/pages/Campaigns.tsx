import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Plus } from "lucide-react";

export default function Campaigns() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Megaphone className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Campanhas</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Campanha
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Listagem de Campanhas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Nenhuma campanha encontrada.</p>
        </CardContent>
      </Card>
    </div>
  );
}
