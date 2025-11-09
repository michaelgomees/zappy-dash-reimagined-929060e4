import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus } from "lucide-react";

export default function ContactLists() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Lista de Contatos</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Lista
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Listas de Contatos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Gerencie suas listas de contatos para campanhas.</p>
        </CardContent>
      </Card>
    </div>
  );
}
