
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Brain, Target, Zap, Shield, Globe, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Header / Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-xl shadow-lg shadow-primary/20">
                            🧠
                        </div>
                        <span className="text-xl font-bold tracking-tight">CerebroOnline</span>
                    </div>
                    
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <a href="#features" className="hover:text-primary transition-colors">Funcionalidades</a>
                        <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
                        <Link to="/auth" className="text-foreground hover:text-primary transition-colors">Entrar</Link>
                    </nav>

                    <Link to="/auth?signup=true">
                        <Button className="rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                            Começar Grátis
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Sparkles className="w-3 h-3" />
                        A Nova Era da Produtividade
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
                    >
                        Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">Segundo Cérebro</span> <br />
                        Organizado por IA.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Capture ideias, defina metas e organize toda a sua vida acadêmica e profissional com o poder do Gemini Flash. Simples, rápido e inteligente.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link to="/auth?signup=true">
                            <Button size="lg" className="h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white text-lg shadow-xl shadow-primary/25 group">
                                Começar Agora
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="h-14 px-8 rounded-2xl glass border-border/50 text-lg">
                            Ver Demonstração
                        </Button>
                    </motion.div>

                    {/* Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-20 relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-transparent blur-2xl rounded-3xl opacity-50" />
                        <div className="relative rounded-3xl border border-border/50 bg-card/80 glass p-2 overflow-hidden shadow-2xl">
                            <div className="rounded-2xl border border-border/50 overflow-hidden aspect-[16/10] bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl italic">
                                Dashboard em 4K
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/20">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Tudo o que você precisa</h2>
                        <p className="text-muted-foreground text-lg italic">
                            Projetado para quem busca clareza mental e execução perfeita.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                        <FeatureCard 
                            icon={Zap}
                            title="Captura Inteligente"
                            desc="Basta ditar ou escrever e nossa IA classifica automaticamente se é uma tarefa, nota ou meta."
                        />
                        <FeatureCard 
                            icon={Target}
                            title="Metas Progressivas"
                            desc="Defina objetivos semanais e mensais com acompanhamento visual de progresso em tempo real."
                        />
                        <FeatureCard 
                            icon={Brain}
                            title="IA nativa (Gemini)"
                            desc="Utilizamos o modelo mais moderno do Google para oferecer insights e organização supra-humana."
                        />
                        <FeatureCard 
                            icon={Shield}
                            title="Segurança PortoSol"
                            desc="Seus dados são criptografados e protegidos com autenticação de ponta a ponta via Supabase."
                        />
                        <FeatureCard 
                            icon={Globe}
                            title="Exportação Versátil"
                            desc="Gere relatórios profissionais em PDF, CSV ou JSON em segundos para o que precisar."
                        />
                        <FeatureCard 
                            icon={Github}
                            title="Código Aberto"
                            desc="Transparência total. Nosso ecossistema é construído com as melhores práticas de Clean Code."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 border-primary/20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Pronto para organizar sua mente?</h2>
                        <p className="text-lg text-muted-foreground mb-12">
                            Junte-se à comunidade CerebroOnline e transforme seu caos em clareza hoje mesmo.
                        </p>
                        <Link to="/auth?signup=true">
                            <Button size="lg" className="h-16 px-12 rounded-2xl bg-primary hover:bg-primary/90 text-white text-xl shadow-2xl shadow-primary/30">
                                Começar Gratuitamente
                            </Button>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-8">Sem cartão de crédito. Comece em segundos.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-border/50">
                <div className="container mx-auto flex flex-col md:row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
                            🧠
                        </div>
                        <span className="font-bold">CerebroOnline</span>
                    </div>
                    <p className="text-muted-foreground text-sm">© 2026 CerebroOnline. Desenvolvido por PortoSol.</p>
                    <div className="flex gap-6 text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Termos</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
                        <a href="https://github.com/LucasPorto10/MindSync" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-8 rounded-[2rem] bg-card border border-border/50 glass-card group transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-muted-foreground leading-relaxed italic text-sm">{desc}</p>
        </div>
    )
}
