import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users as UsersIcon, Plus } from "lucide-react";

export default function Users() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UsersIcon className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Usuários</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Usuário
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gestão de Usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Gerencie os usuários e permissões do sistema.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
