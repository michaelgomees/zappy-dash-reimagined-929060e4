import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessagesSquare } from "lucide-react";

export default function Chat() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <MessagesSquare className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Chat Interno</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Conversas Internas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Sistema de chat interno entre colaboradores.</p>
        </CardContent>
      </Card>
    </div>
  );
}
