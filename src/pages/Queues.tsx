import { MainLayout } from "@/components/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, Clock } from "lucide-react";

const Queues = () => {
  const queues = [
    { id: 1, name: "Suporte", color: "#3b82f6", active: 12, waiting: 5, avgTime: "3m" },
    { id: 2, name: "Vendas", color: "#10b981", active: 8, waiting: 2, avgTime: "5m" },
    { id: 3, name: "Financeiro", color: "#f59e0b", active: 4, waiting: 1, avgTime: "7m" },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Filas de Atendimento</h1>
            <p className="text-muted-foreground">Configure departamentos e distribua atendimentos</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nova Fila
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {queues.map((queue) => (
            <Card key={queue.id} className="p-6 card-elevated hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: queue.color }}
                  />
                  <h3 className="text-xl font-semibold">{queue.name}</h3>
                </div>
                <Badge variant="secondary">{queue.active + queue.waiting}</Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Atendendo</span>
                  </div>
                  <span className="text-sm font-semibold">{queue.active}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Aguardando</span>
                  </div>
                  <span className="text-sm font-semibold">{queue.waiting}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <span className="text-sm text-muted-foreground">Tempo Médio</span>
                  <span className="text-sm font-semibold">{queue.avgTime}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="w-full">
                  Configurar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Queues;
