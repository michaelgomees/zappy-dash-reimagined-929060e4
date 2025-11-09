import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Workflow, Plus } from "lucide-react";

export default function FlowBuilders() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Workflow className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Fluxo de Campanha</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Fluxo
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Flow Builder</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Crie e gerencie fluxos de automação para suas campanhas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
