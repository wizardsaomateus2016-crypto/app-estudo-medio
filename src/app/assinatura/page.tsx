"use client"

import { useRouter } from "next/navigation"
import { Brain, Crown, Check, ArrowLeft, Sparkles, Zap, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Assinatura() {
  const router = useRouter()

  const handleAssinar = () => {
    // Aqui você pode adicionar a lógica de pagamento
    alert("Redirecionando para pagamento... (Em breve!)")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => router.back()}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              EstudaAí
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0">
            <Crown className="w-3 h-3 mr-1" />
            Assinatura Premium
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Desbloqueie todo o potencial do{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              EstudaAí PRO
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprenda mais rápido com recursos exclusivos e suporte prioritário
          </p>
        </div>

        {/* Planos */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Plano Gratuito */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Gratuito</CardTitle>
              <CardDescription>Para começar a estudar</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold">R$ 0</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Fazer perguntas ilimitadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Responder perguntas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Acesso à comunidade</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5" />
                  <span>Com anúncios</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => router.push("/dashboard")}
              >
                Continuar Gratuito
              </Button>
            </CardContent>
          </Card>

          {/* Plano PRO */}
          <Card className="border-4 border-orange-400 dark:border-orange-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-1 text-sm font-semibold">
              RECOMENDADO
            </div>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Crown className="w-6 h-6 text-orange-500" />
                PRO
              </CardTitle>
              <CardDescription>Para estudantes dedicados</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold">R$ 19,90</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-semibold">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span>Tudo do plano Gratuito</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-600" />
                  <span><strong>Sem anúncios</strong> - Estude sem interrupções</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-600" />
                  <span><strong>Respostas prioritárias</strong> - Suas dúvidas em destaque</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  <span><strong>Aulas exclusivas</strong> - Conteúdo premium ilimitado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-orange-600" />
                  <span><strong>Badge especial</strong> - Destaque-se na comunidade</span>
                </li>
                <li className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-orange-600" />
                  <span><strong>Suporte prioritário</strong> - Atendimento VIP</span>
                </li>
              </ul>
              <Button 
                className="w-full h-12 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold text-lg shadow-lg"
                onClick={handleAssinar}
              >
                <Crown className="w-5 h-5 mr-2" />
                Assinar PRO Agora
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Benefícios Detalhados */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Por que escolher o EstudaAí PRO?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">Experiência Premium</h3>
                <p className="text-muted-foreground">
                  Estude sem distrações com uma interface limpa e sem anúncios
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">Respostas Mais Rápidas</h3>
                <p className="text-muted-foreground">
                  Suas perguntas aparecem em destaque e recebem respostas prioritárias
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">Conteúdo Exclusivo</h3>
                <p className="text-muted-foreground">
                  Acesso a videoaulas, resumos e materiais de estudo premium
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">Destaque na Comunidade</h3>
                <p className="text-muted-foreground">
                  Badge especial PRO que mostra seu compromisso com os estudos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-2 border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30">
            <CardContent className="pt-8 pb-8">
              <Crown className="w-16 h-16 mx-auto mb-4 text-orange-500" />
              <h3 className="text-2xl font-bold mb-2">
                Pronto para turbinar seus estudos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Junte-se a centenas de estudantes PRO que já estão aprendendo mais rápido
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold text-lg h-14 px-8"
                onClick={handleAssinar}
              >
                <Crown className="w-5 h-5 mr-2" />
                Começar Agora por R$ 19,90/mês
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
