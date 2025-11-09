import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, Plus, Search } from "lucide-react";

export default function QuickMessages() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Respostas Rápidas</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Resposta
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar respostas rápidas..." className="pl-9" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium">/ola</h3>
                  <p className="text-sm text-muted-foreground">
                    Olá! Como posso ajudá-lo hoje?
                  </p>
                </div>
                <Button variant="ghost" size="sm">Editar</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
