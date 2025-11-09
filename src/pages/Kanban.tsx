import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Kanban as KanbanIcon } from "lucide-react";

export default function Kanban() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <KanbanIcon className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Kanban</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>A Fazer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">0 itens</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Em Andamento</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">0 itens</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Concluído</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">0 itens</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
