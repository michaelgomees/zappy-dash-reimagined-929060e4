import { MainLayout } from "@/components/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, User, Phone, Mail } from "lucide-react";

const Contacts = () => {
  const contacts = [
    { id: 1, name: "João Silva", phone: "+55 11 99999-9999", email: "joao@email.com", tags: ["VIP", "Cliente"] },
    { id: 2, name: "Maria Santos", phone: "+55 11 88888-8888", email: "maria@email.com", tags: ["Lead"] },
    { id: 3, name: "Pedro Costa", phone: "+55 11 77777-7777", email: "pedro@email.com", tags: ["Cliente"] },
    { id: 4, name: "Ana Lima", phone: "+55 11 66666-6666", email: "ana@email.com", tags: ["VIP"] },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Contatos</h1>
            <p className="text-muted-foreground">Gerencie sua base de contatos</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Novo Contato
          </Button>
        </div>

        <Card className="p-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Buscar contatos..." className="pl-10" />
            </div>
          </div>

          <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{contact.name}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Phone className="w-3 h-3" />
                        {contact.phone}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Mail className="w-3 h-3" />
                        {contact.email}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {contact.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Editar
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Contacts;
