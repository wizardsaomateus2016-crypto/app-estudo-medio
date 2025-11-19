"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Brain, Plus, Search, TrendingUp, BookOpen, Users, Award, Crown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Dashboard() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const modoConvidado = searchParams.get("modo") === "convidado"
  const [bannerVisible, setBannerVisible] = useState(true)

  // Simula se usuário é PRO (você pode conectar com seu sistema de autenticação)
  const isUserPro = false

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              EstudaAí
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {modoConvidado && (
              <Badge variant="secondary" className="hidden sm:flex">
                Modo Convidado
              </Badge>
            )}
            <Button 
              variant="outline"
              onClick={() => router.push("/assinatura")}
              className="hidden sm:flex"
            >
              <Crown className="w-4 h-4 mr-2" />
              Assinar PRO
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nova Pergunta
            </Button>
          </div>
        </div>
      </header>

      {/* Banner de Anúncio no Topo (apenas para usuários gratuitos) */}
      {!isUserPro && bannerVisible && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="hidden sm:block text-sm font-medium">
                📢 Anúncio
              </div>
              <div className="flex-1 text-center">
                <p className="text-sm sm:text-base font-medium">
                  🎯 Espaço publicitário disponível - Entre em contato para anunciar aqui!
                </p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setBannerVisible(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        {/* Boas-vindas */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {modoConvidado ? "Bem-vindo, Convidado! 👋" : "Bem-vindo de volta! 👋"}
          </h2>
          <p className="text-muted-foreground">
            Explore perguntas, tire dúvidas e ajude outros estudantes
          </p>
        </div>

        {/* Barra de Pesquisa */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Pesquisar perguntas, matérias, tópicos..."
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cards de Estatísticas */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">5.8k</p>
                      <p className="text-xs text-muted-foreground">Perguntas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3.2k</p>
                      <p className="text-xs text-muted-foreground">Estudantes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">12k</p>
                      <p className="text-xs text-muted-foreground">Respostas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Anúncio entre conteúdo (apenas para usuários gratuitos) */}
            {!isUserPro && (
              <Card className="border-2 border-blue-200 dark:border-blue-900 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                <CardContent className="pt-6 pb-6">
                  <div className="text-center space-y-3">
                    <Badge className="bg-blue-500 text-white">Anúncio</Badge>
                    <div className="min-h-[200px] flex items-center justify-center border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg bg-white/50 dark:bg-slate-900/50">
                      <div className="text-center p-6">
                        <p className="text-lg font-semibold mb-2">📢 Espaço Publicitário</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          Anuncie aqui e alcance milhares de estudantes
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Contato: anuncios@estudaai.com
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      💡 Usuários PRO não veem anúncios -{" "}
                      <button 
                        onClick={() => router.push("/assinatura")}
                        className="text-orange-600 hover:underline font-semibold"
                      >
                        Assine agora
                      </button>
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Perguntas Recentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Perguntas em Alta
                </CardTitle>
                <CardDescription>As dúvidas mais populares da comunidade</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    titulo: "Como resolver equação do segundo grau?",
                    materia: "Matemática",
                    respostas: 12,
                    cor: "blue"
                  },
                  {
                    titulo: "Qual a diferença entre mitose e meiose?",
                    materia: "Biologia",
                    respostas: 8,
                    cor: "green"
                  },
                  {
                    titulo: "Como calcular velocidade média?",
                    materia: "Física",
                    respostas: 15,
                    cor: "purple"
                  },
                  {
                    titulo: "Quais são os tipos de sujeito?",
                    materia: "Português",
                    respostas: 6,
                    cor: "orange"
                  }
                ].map((pergunta, index) => (
                  <div key={index}>
                    <div 
                      className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{pergunta.titulo}</h3>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {pergunta.materia}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {pergunta.respostas} respostas
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Anúncio entre perguntas (apenas para usuários gratuitos) */}
                    {!isUserPro && index === 1 && (
                      <div className="mt-4 p-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-slate-900/50">
                        <div className="text-center">
                          <Badge variant="secondary" className="mb-2">Anúncio</Badge>
                          <p className="text-sm text-muted-foreground">
                            📢 Espaço para anúncio (300x250)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Anúncio Lateral (apenas para usuários gratuitos) */}
            {!isUserPro && (
              <Card className="border-2 border-green-200 dark:border-green-900">
                <CardContent className="pt-6">
                  <Badge className="mb-3 bg-green-500 text-white">Anúncio</Badge>
                  <div className="min-h-[300px] flex items-center justify-center border-2 border-dashed border-green-300 dark:border-green-700 rounded-lg bg-white/50 dark:bg-slate-900/50">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">📢 Banner Lateral</p>
                      <p className="text-xs text-muted-foreground">
                        Espaço publicitário (300x600)
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Remova anúncios com{" "}
                    <button 
                      onClick={() => router.push("/assinatura")}
                      className="text-orange-600 hover:underline font-semibold"
                    >
                      PRO
                    </button>
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Card PRO */}
            <Card className="border-2 border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-orange-900 dark:text-orange-100">
                      Seja PRO
                    </h3>
                    <p className="text-xs text-orange-700 dark:text-orange-300">
                      Desbloqueie recursos
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                    <span className="text-xs">✓</span>
                    <span><strong>Sem anúncios</strong></span>
                  </li>
                  <li className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                    <span className="text-xs">✓</span>
                    <span>Respostas prioritárias</span>
                  </li>
                  <li className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                    <span className="text-xs">✓</span>
                    <span>Aulas exclusivas</span>
                  </li>
                </ul>

                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                  onClick={() => router.push("/assinatura")}
                >
                  Assinar por R$ 19,90/mês
                </Button>
              </CardContent>
            </Card>

            {/* Matérias Populares */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Matérias Populares</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { nome: "Matemática", perguntas: 1842 },
                  { nome: "Português", perguntas: 1234 },
                  { nome: "Física", perguntas: 987 },
                  { nome: "Química", perguntas: 856 },
                  { nome: "Biologia", perguntas: 743 }
                ].map((materia, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-accent cursor-pointer"
                  >
                    <span className="font-medium">{materia.nome}</span>
                    <span className="text-sm text-muted-foreground">
                      {materia.perguntas}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
