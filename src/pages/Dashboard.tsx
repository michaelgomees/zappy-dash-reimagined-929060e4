import { Card } from "@/components/ui/card";
import { MainLayout } from "@/components/layouts/MainLayout";
import { 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  UserPlus
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Atendimentos Ativos",
      value: "24",
      change: "+12%",
      icon: MessageSquare,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Total de Contatos",
      value: "1,234",
      change: "+8%",
      icon: Users,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Taxa de Resposta",
      value: "94%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-info",
      bgColor: "bg-info/10"
    },
    {
      title: "Tempo Médio",
      value: "2.5min",
      change: "-15%",
      icon: Clock,
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
  ];

  const recentActivities = [
    {
      type: "ticket",
      message: "Novo atendimento iniciado",
      time: "2 minutos atrás",
      icon: MessageCircle,
      color: "text-primary"
    },
    {
      type: "resolved",
      message: "Ticket #1234 resolvido",
      time: "15 minutos atrás",
      icon: CheckCircle,
      color: "text-success"
    },
    {
      type: "alert",
      message: "Fila de atendimento alta",
      time: "30 minutos atrás",
      icon: AlertCircle,
      color: "text-warning"
    },
    {
      type: "contact",
      message: "Novo contato adicionado",
      time: "1 hora atrás",
      icon: UserPlus,
      color: "text-info"
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Bem-vindo ao ZappyBot - Gerencie seus atendimentos</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 card-elevated hover-lift">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </h3>
                    <p className={`text-sm font-medium ${
                      stat.change.startsWith('+') ? 'text-success' : 'text-destructive'
                    }`}>
                      {stat.change} vs mês anterior
                    </p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Recent Activities */}
        <Card className="p-6 card-elevated">
          <h2 className="text-2xl font-bold text-foreground mb-6">Atividades Recentes</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`${activity.color === 'text-primary' ? 'bg-primary/10' :
                    activity.color === 'text-success' ? 'bg-success/10' :
                    activity.color === 'text-warning' ? 'bg-warning/10' :
                    'bg-info/10'} p-2 rounded-lg`}>
                    <Icon className={`w-5 h-5 ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
