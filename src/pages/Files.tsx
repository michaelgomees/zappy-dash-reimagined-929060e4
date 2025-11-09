import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Plus } from "lucide-react";

export default function Files() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Upload className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Lista de Arquivos</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Arquivos do Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Gerencie arquivos enviados e recebidos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
