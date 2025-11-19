"use client"

import { useState } from "react"
import { Brain, Sparkles, Crown, UserCircle, Mail, Calendar, LogIn, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function Home() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ nome, idade, email })
    // Aqui você pode adicionar a lógica de cadastro
  }

  const handleEntrarConvidado = () => {
    console.log("Entrando como convidado...")
    // Aqui você pode adicionar a lógica para entrar como convidado
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        
        {/* Lado Esquerdo - Branding */}
        <div className="text-center md:text-left space-y-6 order-2 md:order-1">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                EstudaAí
              </h1>
              <p className="text-sm text-muted-foreground">Aprenda colaborando</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Tire suas dúvidas e ajude outros estudantes
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Do 5º ano ao 3º ano do Ensino Médio. Pergunte, responda e aprenda junto com milhares de estudantes.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3 p-4 bg-white/50 dark:bg-slate-900/50 rounded-xl backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-bold text-xl">5.8k+</p>
                <p className="text-xs text-muted-foreground">Perguntas</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/50 dark:bg-slate-900/50 rounded-xl backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-bold text-xl">3.2k+</p>
                <p className="text-xs text-muted-foreground">Estudantes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Formulário */}
        <div className="order-1 md:order-2">
          <Card className="border-2 shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Comece agora</CardTitle>
              <CardDescription>Crie sua conta e faça parte da comunidade</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="flex items-center gap-2">
                    <UserCircle className="w-4 h-4" />
                    Nome completo
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idade" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Idade
                  </Label>
                  <Input
                    id="idade"
                    type="number"
                    placeholder="Digite sua idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    className="h-12"
                    min="10"
                    max="100"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
                >
                  Criar conta gratuita
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">ou</span>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full h-12 text-base"
                onClick={handleEntrarConvidado}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Entrar como convidado
              </Button>

              <div className="pt-4 border-t">
                <Card className="border-2 border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1 text-orange-900 dark:text-orange-100">
                          Assinatura PRO
                        </h3>
                        <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                          Desbloqueie todo o potencial do EstudaAí
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 text-sm">
                      <li className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                        <div className="w-5 h-5 rounded-full bg-orange-200 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs">✓</span>
                        </div>
                        <span><strong>Sem anúncios</strong> - Estude sem interrupções</span>
                      </li>
                      <li className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                        <div className="w-5 h-5 rounded-full bg-orange-200 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs">✓</span>
                        </div>
                        <span><strong>Respostas prioritárias</strong> - Suas dúvidas em destaque</span>
                      </li>
                      <li className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                        <div className="w-5 h-5 rounded-full bg-orange-200 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs">✓</span>
                        </div>
                        <span><strong>Aulas exclusivas</strong> - Conteúdo premium ilimitado</span>
                      </li>
                      <li className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                        <div className="w-5 h-5 rounded-full bg-orange-200 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs">✓</span>
                        </div>
                        <span><strong>Badge especial</strong> - Destaque-se na comunidade</span>
                      </li>
                    </ul>

                    <Button className="w-full h-11 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold shadow-lg">
                      <Crown className="w-4 h-4 mr-2" />
                      Assinar PRO - R$ 19,90/mês
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
