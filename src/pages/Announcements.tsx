import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Plus } from "lucide-react";

export default function Announcements() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Megaphone className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Informativos</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Informativo
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Anúncios e Informativos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Gerencie comunicados e informativos do sistema.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
