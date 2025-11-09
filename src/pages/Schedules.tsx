import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Plus } from "lucide-react";

export default function Schedules() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Agendamentos</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Agendamento
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Próximos Agendamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Nenhum agendamento encontrado.</p>
        </CardContent>
      </Card>
    </div>
  );
}
