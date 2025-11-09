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
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/tickets/:ticketId" element={<Tickets />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/queues" element={<Queues />} />
          <Route path="/settings" element={<Settings />} />
          {/* Rotas adicionais do ZappyBot */}
          <Route path="/chat" element={<Dashboard />} />
          <Route path="/chat/:id" element={<Dashboard />} />
          <Route path="/tags" element={<Dashboard />} />
          <Route path="/schedules" element={<Dashboard />} />
          <Route path="/todolist" element={<Dashboard />} />
          <Route path="/flowbuilders" element={<Dashboard />} />
          <Route path="/flowbuilder/:id" element={<Dashboard />} />
          <Route path="/quick-messages" element={<Dashboard />} />
          <Route path="/prompts" element={<Dashboard />} />
          <Route path="/queue-integration" element={<Dashboard />} />
          <Route path="/campaigns" element={<Dashboard />} />
          <Route path="/campaign/:campaignId/report" element={<Dashboard />} />
          <Route path="/campaigns-config" element={<Dashboard />} />
          <Route path="/contact-lists" element={<Dashboard />} />
          <Route path="/contact-lists/:contactListId/contacts" element={<Dashboard />} />
          <Route path="/phrase-lists" element={<Dashboard />} />
          <Route path="/reports" element={<Dashboard />} />
          <Route path="/moments" element={<Dashboard />} />
          <Route path="/kanban" element={<Dashboard />} />
          <Route path="/connections" element={<Dashboard />} />
          <Route path="/allConnections" element={<Dashboard />} />
          <Route path="/users" element={<Dashboard />} />
          <Route path="/companies" element={<Dashboard />} />
          <Route path="/financeiro" element={<Dashboard />} />
          <Route path="/messages-api" element={<Dashboard />} />
          <Route path="/files" element={<Dashboard />} />
          <Route path="/helps" element={<Dashboard />} />
          <Route path="/announcements" element={<Dashboard />} />
          <Route path="/signup" element={<Index />} />
          <Route path="/forgot-password" element={<Index />} />
          <Route path="/reset-password" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
