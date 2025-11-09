import { MainLayout } from "@/components/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, MessageSquare, User, Clock } from "lucide-react";

const Tickets = () => {
  const tickets = [
    { id: 1, contact: "João Silva", message: "Olá, preciso de ajuda...", status: "open", time: "2 min", unread: 3 },
    { id: 2, contact: "Maria Santos", message: "Obrigado pelo atendimento", status: "pending", time: "15 min", unread: 0 },
    { id: 3, contact: "Pedro Costa", message: "Qual o horário de funcionamento?", status: "open", time: "1h", unread: 1 },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Atendimentos</h1>
            <p className="text-muted-foreground">Gerencie suas conversas</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Novo Atendimento
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lista de Tickets */}
          <Card className="lg:col-span-1 p-4">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Buscar conversas..." className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-4 rounded-lg border border-border hover:bg-accent/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{ticket.contact}</p>
                        <p className="text-xs text-muted-foreground">{ticket.time}</p>
                      </div>
                    </div>
                    {ticket.unread > 0 && (
                      <Badge variant="default" className="text-xs">
                        {ticket.unread}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{ticket.message}</p>
                  <Badge
                    variant={ticket.status === "open" ? "default" : "secondary"}
                    className="mt-2 text-xs"
                  >
                    {ticket.status === "open" ? "Aberto" : "Pendente"}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Área de Conversa */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <MessageSquare className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Selecione uma conversa</h3>
              <p className="text-muted-foreground">
                Escolha um atendimento para visualizar as mensagens
              </p>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Tickets;
