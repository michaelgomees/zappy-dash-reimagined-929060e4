import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Plus } from "lucide-react";

export default function Prompts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Talk AI</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Prompt
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Prompts de IA</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Configure prompts para respostas automáticas com IA.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
