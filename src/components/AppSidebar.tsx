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
  Grid3x3,
  Bot,
  Code,
  Share2,
  ChevronDown,
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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const menuItems = [
  {
    title: "Gerência",
    items: [
      { title: "Dashboard", url: "/", icon: LayoutDashboard },
      { title: "Relatórios", url: "/reports", icon: BarChart3 },
      { title: "Painel", url: "/panel", icon: Grid3x3 },
    ],
  },
];

const mainItems = [
  { title: "Atendimentos", url: "/tickets", icon: MessageSquare },
  { title: "Respostas rápidas", url: "/quick-messages", icon: Zap },
  { title: "Kanban", url: "/kanban", icon: KanbanIcon },
  { title: "Contatos", url: "/contacts", icon: Users },
  { title: "Agendamentos", url: "/schedules", icon: Calendar },
  { title: "Tags", url: "/tags", icon: Tag },
  { title: "Chat Interno", url: "/chat", icon: MessagesSquare },
  { title: "Ajuda", url: "/helps", icon: HelpCircle },
];

const adminItems = [
  {
    title: "Campanhas",
    icon: Megaphone,
    subItems: [
      { title: "Listagem", url: "/campaigns" },
      { title: "Lista de contatos", url: "/contact-lists" },
      { title: "Configurações", url: "/campaigns-config" },
    ],
  },
  {
    title: "Flowbuilder",
    icon: Workflow,
    subItems: [
      { title: "Fluxo de Campanha", url: "/flowbuilders" },
      { title: "Fluxo de conversa", url: "/flow-default" },
    ],
  },
  { title: "Informativos", url: "/announcements", icon: Megaphone },
  { title: "API", url: "/messages-api", icon: Code },
  { title: "Usuários", url: "/users", icon: Users },
  { title: "Filas & Chatbot", url: "/queues", icon: List },
  { title: "Talk AI", url: "/prompts", icon: Bot },
  { title: "Integrações", url: "/queue-integration", icon: Share2 },
  { title: "Conexões", url: "/connections", icon: PhoneCall },
  { title: "Lista de arquivos", url: "/files", icon: Upload },
  { title: "Financeiro", url: "/financeiro", icon: DollarSign },
  { title: "Configurações", url: "/settings", icon: Settings },
  { title: "Empresas", url: "/companies", icon: Building2 },
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
        {/* Gerência Section */}
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

        {/* Main Items (no group) */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
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

        {/* Administração Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Administração</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible className="group/collapsible">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                          <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <NavLink
                                  to={subItem.url}
                                  activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                                >
                                  <span>{subItem.title}</span>
                                </NavLink>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
