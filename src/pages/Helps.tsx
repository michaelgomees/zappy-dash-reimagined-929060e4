import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export default function Helps() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <HelpCircle className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Ajuda</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Documentação</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Acesse a documentação completa do sistema.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Suporte</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Entre em contato com nossa equipe de suporte.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
