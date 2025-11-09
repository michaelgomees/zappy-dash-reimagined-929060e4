import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export default function Financeiro() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <DollarSign className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Financeiro</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Receitas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 0,00</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Despesas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 0,00</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Saldo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 0,00</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
