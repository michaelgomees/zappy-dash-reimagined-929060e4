import { MainLayout } from "@/components/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, MessageSquare, Clock, User, Filter } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Ticket {
  id: number;
  contact: { name: string; number: string };
  lastMessage: string;
  status: "open" | "pending" | "closed";
  updatedAt: string;
  unreadMessages: number;
  user?: { name: string };
  queue?: { name: string; color: string };
}

export default function Tickets() {
  const [searchParam, setSearchParam] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("open");
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);

  // Mock data - em produção viria da API
  const tickets: Ticket[] = [
    {
      id: 1,
      contact: { name: "João Silva", number: "5511999999999" },
      lastMessage: "Olá, preciso de ajuda com meu pedido",
      status: "open",
      updatedAt: new Date().toISOString(),
      unreadMessages: 3,
      user: { name: "Maria Santos" },
      queue: { name: "Suporte", color: "#3b82f6" },
    },
    {
      id: 2,
      contact: { name: "Ana Costa", number: "5511988888888" },
      lastMessage: "Obrigado pelo atendimento!",
      status: "pending",
      updatedAt: new Date(Date.now() - 3600000).toISOString(),
      unreadMessages: 1,
      queue: { name: "Vendas", color: "#10b981" },
    },
    {
      id: 3,
      contact: { name: "Pedro Oliveira", number: "5511977777777" },
      lastMessage: "Quando vai chegar meu produto?",
      status: "open",
      updatedAt: new Date(Date.now() - 7200000).toISOString(),
      unreadMessages: 0,
      user: { name: "João Mendes" },
      queue: { name: "Logística", color: "#f59e0b" },
    },
  ];

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.status === selectedStatus &&
      (ticket.contact.name.toLowerCase().includes(searchParam.toLowerCase()) ||
        ticket.contact.number.includes(searchParam))
  );

  const statusCounts = {
    open: tickets.filter((t) => t.status === "open").length,
    pending: tickets.filter((t) => t.status === "pending").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  };

  const formatTime = (date: string) => {
    const d = new Date(date);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);

    if (hours > 24) return d.toLocaleDateString("pt-BR");
    if (hours > 0) return `${hours}h atrás`;
    if (minutes > 0) return `${minutes}min atrás`;
    return "Agora";
  };

  return (
    <MainLayout
      title="Atendimentos"
      actions={
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Atendimento
        </Button>
      }
    >
      <div className="grid grid-cols-12 gap-6 h-[calc(100vh-12rem)]">
        {/* Lista de Tickets */}
        <div className="col-span-4 flex flex-col gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome ou número..."
                  value={searchParam}
                  onChange={(e) => setSearchParam(e.target.value)}
                  className="pl-9"
                />
              </div>
            </CardContent>
          </Card>

          <Tabs value={selectedStatus} onValueChange={setSelectedStatus} className="flex-1">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="open">
                Abertos ({statusCounts.open})
              </TabsTrigger>
              <TabsTrigger value="pending">
                Pendentes ({statusCounts.pending})
              </TabsTrigger>
              <TabsTrigger value="closed">
                Fechados ({statusCounts.closed})
              </TabsTrigger>
            </TabsList>

            <div className="mt-4 space-y-2 overflow-y-auto h-[calc(100vh-20rem)]">
              {filteredTickets.map((ticket) => (
                <Card
                  key={ticket.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedTicket === ticket.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedTicket(ticket.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-sm truncate">
                            {ticket.contact.name}
                          </h3>
                          {ticket.unreadMessages > 0 && (
                            <Badge variant="default" className="h-5 px-1.5 text-xs">
                              {ticket.unreadMessages}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {ticket.lastMessage}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {formatTime(ticket.updatedAt)}
                        </span>
                        {ticket.queue && (
                          <Badge
                            variant="outline"
                            className="text-xs"
                            style={{
                              borderColor: ticket.queue.color,
                              color: ticket.queue.color,
                            }}
                          >
                            {ticket.queue.name}
                          </Badge>
                        )}
                      </div>
                    </div>
                    {ticket.user && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{ticket.user.name}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </Tabs>
        </div>

        {/* Área de Mensagens */}
        <div className="col-span-8">
          <Card className="h-full flex flex-col">
            {selectedTicket ? (
              <>
                <CardContent className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {
                            filteredTickets.find((t) => t.id === selectedTicket)
                              ?.contact.name
                          }
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {
                            filteredTickets.find((t) => t.id === selectedTicket)
                              ?.contact.number
                          }
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Finalizar Atendimento
                    </Button>
                  </div>
                </CardContent>
                <div className="flex-1 p-4 overflow-y-auto bg-muted/30">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-start">
                      <div className="bg-background rounded-lg p-3 max-w-[70%] shadow-sm">
                        <p className="text-sm">
                          {
                            filteredTickets.find((t) => t.id === selectedTicket)
                              ?.lastMessage
                          }
                        </p>
                        <span className="text-xs text-muted-foreground">
                          {formatTime(
                            filteredTickets.find((t) => t.id === selectedTicket)
                              ?.updatedAt || ""
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input placeholder="Digite sua mensagem..." className="flex-1" />
                    <Button>Enviar</Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <MessageSquare className="h-16 w-16 mx-auto text-muted-foreground/40" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Nenhum atendimento selecionado
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Selecione um atendimento para visualizar a conversa
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
