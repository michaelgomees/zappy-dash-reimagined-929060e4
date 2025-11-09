import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2 } from "lucide-react";

export default function QueueIntegration() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Share2 className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Integrações</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Integrações Disponíveis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Configure integrações com sistemas externos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
