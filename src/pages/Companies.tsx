import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Plus } from "lucide-react";

export default function Companies() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Empresas</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Empresa
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gestão de Empresas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Gerencie as empresas cadastradas no sistema.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
