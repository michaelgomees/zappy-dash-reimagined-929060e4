import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid3x3 } from "lucide-react";

export default function Panel() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Grid3x3 className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Painel</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Painel de Controle</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Visualize e gerencie suas métricas e indicadores principais.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
