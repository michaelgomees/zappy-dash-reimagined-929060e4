import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Settings,
  PhoneCall,
  Tag,
  Clock,
  FileText,
  List,
  Megaphone,
  BarChart3,
  Zap,
  MessagesSquare,
  Sparkles,
  DollarSign,
  Building2,
  Upload,
  Calendar,
  ListTodo,
  Kanban as KanbanIcon,
  HelpCircle,
  Workflow,
  Link,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Principal",
    items: [
      { title: "Dashboard", url: "/", icon: LayoutDashboard },
      { title: "Atendimentos", url: "/tickets", icon: MessageSquare },
      { title: "Chat Interno", url: "/chat", icon: MessagesSquare },
    ],
  },
  {
    title: "Gestão",
    items: [
      { title: "Contatos", url: "/contacts", icon: Users },
      { title: "Filas", url: "/queues", icon: List },
      { title: "Tags", url: "/tags", icon: Tag },
      { title: "Agendamentos", url: "/schedules", icon: Calendar },
      { title: "Tarefas", url: "/todolist", icon: ListTodo },
    ],
  },
  {
    title: "Automação",
    items: [
      { title: "Flow Builder", url: "/flowbuilders", icon: Workflow },
      { title: "Respostas Rápidas", url: "/quick-messages", icon: Zap },
      { title: "Prompts IA", url: "/prompts", icon: Sparkles },
      { title: "Integrações", url: "/queue-integration", icon: Link },
    ],
  },
  {
    title: "Campanhas",
    items: [
      { title: "Campanhas", url: "/campaigns", icon: Megaphone },
      { title: "Listas de Contatos", url: "/contact-lists", icon: FileText },
      { title: "Frases", url: "/phrase-lists", icon: MessagesSquare },
    ],
  },
  {
    title: "Relatórios",
    items: [
      { title: "Relatórios", url: "/reports", icon: BarChart3 },
      { title: "Momentos", url: "/moments", icon: Clock },
      { title: "Kanban", url: "/kanban", icon: KanbanIcon },
    ],
  },
  {
    title: "Administração",
    items: [
      { title: "Conexões", url: "/connections", icon: PhoneCall },
      { title: "Usuários", url: "/users", icon: Users },
      { title: "Empresas", url: "/companies", icon: Building2 },
      { title: "Financeiro", url: "/financeiro", icon: DollarSign },
      { title: "Configurações", url: "/settings", icon: Settings },
    ],
  },
  {
    title: "Outros",
    items: [
      { title: "API de Mensagens", url: "/messages-api", icon: FileText },
      { title: "Arquivos", url: "/files", icon: Upload },
      { title: "Ajuda", url: "/helps", icon: HelpCircle },
      { title: "Anúncios", url: "/announcements", icon: Megaphone },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <MessageSquare className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold group-data-[collapsible=icon]:hidden">
            ZappyBot
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {menuItems.map((section, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end
                        activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
