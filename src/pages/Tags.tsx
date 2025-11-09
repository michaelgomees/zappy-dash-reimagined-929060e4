import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Tags() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tag className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Tags</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Tag
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tags Disponíveis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Urgente</Badge>
            <Badge variant="secondary">Suporte</Badge>
            <Badge variant="outline">Vendas</Badge>
            <Badge>Financeiro</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
