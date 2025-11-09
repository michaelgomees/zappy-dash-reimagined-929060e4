import { MainLayout } from "@/components/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings as SettingsIcon, Palette, Users, Bell } from "lucide-react";

const Settings = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Configurações</h1>
          <p className="text-muted-foreground">Personalize sua experiência</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList>
            <TabsTrigger value="general">
              <SettingsIcon className="w-4 h-4 mr-2" />
              Geral
            </TabsTrigger>
            <TabsTrigger value="appearance">
              <Palette className="w-4 h-4 mr-2" />
              Aparência
            </TabsTrigger>
            <TabsTrigger value="users">
              <Users className="w-4 h-4 mr-2" />
              Usuários
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="w-4 h-4 mr-2" />
              Notificações
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Configurações Gerais</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Nome da Empresa</Label>
                  <Input id="company" placeholder="ZappyBot" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email de Contato</Label>
                  <Input id="email" type="email" placeholder="contato@zappybot.com" />
                </div>
                <Button>Salvar Alterações</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="appearance">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Personalização</h3>
              <p className="text-muted-foreground">Configure cores, logo e tema do sistema</p>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Gerenciamento de Usuários</h3>
              <p className="text-muted-foreground">Adicione e gerencie usuários do sistema</p>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Notificações</h3>
              <p className="text-muted-foreground">Configure alertas e notificações</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Settings;
