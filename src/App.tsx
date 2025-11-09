import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Contacts from "./pages/Contacts";
import Queues from "./pages/Queues";
import Settings from "./pages/Settings";
import Panel from "./pages/Panel";
import Reports from "./pages/Reports";
import QuickMessages from "./pages/QuickMessages";
import Schedules from "./pages/Schedules";
import Tags from "./pages/Tags";
import Chat from "./pages/Chat";
import Helps from "./pages/Helps";
import Campaigns from "./pages/Campaigns";
import ContactLists from "./pages/ContactLists";
import CampaignsConfig from "./pages/CampaignsConfig";
import FlowBuilders from "./pages/FlowBuilders";
import FlowDefault from "./pages/FlowDefault";
import Announcements from "./pages/Announcements";
import MessagesAPI from "./pages/MessagesAPI";
import Users from "./pages/Users";
import Prompts from "./pages/Prompts";
import QueueIntegration from "./pages/QueueIntegration";
import Connections from "./pages/Connections";
import Files from "./pages/Files";
import Financeiro from "./pages/Financeiro";
import Companies from "./pages/Companies";
import Kanban from "./pages/Kanban";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Index />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/tickets/:ticketId" element={<Tickets />} />
          <Route path="/quick-messages" element={<QuickMessages />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/helps" element={<Helps />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/contact-lists" element={<ContactLists />} />
          <Route path="/campaigns-config" element={<CampaignsConfig />} />
          <Route path="/flowbuilders" element={<FlowBuilders />} />
          <Route path="/flow-default" element={<FlowDefault />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/messages-api" element={<MessagesAPI />} />
          <Route path="/users" element={<Users />} />
          <Route path="/queues" element={<Queues />} />
          <Route path="/prompts" element={<Prompts />} />
          <Route path="/queue-integration" element={<QueueIntegration />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/files" element={<Files />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
