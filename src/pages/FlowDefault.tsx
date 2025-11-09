import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow } from "lucide-react";

export default function FlowDefault() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Workflow className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Fluxo de Conversa</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fluxos de Conversa</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Configure fluxos de conversa automatizados.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
