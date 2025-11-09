import { MainLayout } from "@/components/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Plus,
  User,
  Phone,
  Mail,
  Edit,
  Trash2,
  MessageSquare,
  Upload,
  Download,
  Tag as TagIcon,
} from "lucide-react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Contact {
  id: number;
  name: string;
  number: string;
  email?: string;
  profilePicUrl?: string;
  tags?: Array<{ id: number; name: string; color: string }>;
  isGroup: boolean;
  createdAt: string;
}

export default function Contacts() {
  const [searchParam, setSearchParam] = useState("");
  const [contacts] = useState<Contact[]>([
    {
      id: 1,
      name: "João Silva",
      number: "5511999999999",
      email: "joao@email.com",
      tags: [
        { id: 1, name: "Cliente", color: "#3b82f6" },
        { id: 2, name: "VIP", color: "#f59e0b" },
      ],
      isGroup: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Maria Santos",
      number: "5511988888888",
      email: "maria@email.com",
      tags: [{ id: 3, name: "Prospect", color: "#10b981" }],
      isGroup: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      name: "Pedro Costa",
      number: "5511977777777",
      isGroup: false,
      createdAt: new Date().toISOString(),
    },
  ]);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchParam.toLowerCase()) ||
      contact.number.includes(searchParam) ||
      contact.email?.toLowerCase().includes(searchParam.toLowerCase())
  );

  const formatPhoneNumber = (number: string) => {
    if (number.startsWith("55")) {
      const ddd = number.substring(2, 4);
      const num = number.substring(4);
      if (num.length === 9) {
        return `(${ddd}) ${num.substring(0, 5)}-${num.substring(5)}`;
      }
      return `(${ddd}) ${num.substring(0, 4)}-${num.substring(4)}`;
    }
    return number;
  };

  return (
    <MainLayout
      title="Contatos"
      actions={
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Importar
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Novo Contato
          </Button>
        </div>
      }
    >
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome, telefone ou email..."
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              {filteredContacts.length} contato(s)
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={contact.profilePicUrl} />
                        <AvatarFallback>
                          {contact.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          {formatPhoneNumber(contact.number)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {contact.email ? (
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{contact.email}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1 flex-wrap">
                        {contact.tags?.map((tag) => (
                          <Badge
                            key={tag.id}
                            variant="outline"
                            className="text-xs"
                            style={{
                              borderColor: tag.color,
                              color: tag.color,
                            }}
                          >
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredContacts.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center h-32">
                      <div className="flex flex-col items-center gap-2">
                        <User className="h-12 w-12 text-muted-foreground/40" />
                        <p className="text-sm text-muted-foreground">
                          Nenhum contato encontrado
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </MainLayout>
  );
}
