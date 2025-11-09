import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

export default function MessagesAPI() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Code className="h-6 w-6" />
        <h1 className="text-3xl font-bold">API de Mensagens</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Documentação da API</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Endpoint</h3>
              <code className="bg-muted p-2 rounded block">
                POST /api/messages/send
              </code>
            </div>
            <div>
              <h3 className="font-medium mb-2">Headers</h3>
              <code className="bg-muted p-2 rounded block">
                Authorization: Bearer YOUR_TOKEN
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
