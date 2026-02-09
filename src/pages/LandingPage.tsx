import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Target, Zap, Shield, Sparkles, ChevronDown, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NeuralParticles } from '@/components/landing/NeuralParticles'
import { MouseFollower } from '@/components/landing/MouseFollower'
import { RevealOnScroll } from '@/components/landing/RevealOnScroll'
import { cn } from '@/lib/utils'

export default function LandingPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll()
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

    return (
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 overflow-x-hidden">
            <NeuralParticles />
            <MouseFollower />

            {/* Floating Nav */}
            <motion.header 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6"
            >
                <nav className="flex items-center gap-4 sm:gap-8 px-6 sm:px-8 py-4 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/30">
                            🧠
                        </div>
                        <span className="font-bold text-lg text-slate-900 hidden sm:block">CerebroOnline</span>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
                        <a href="#features" className="hover:text-emerald-600 transition-colors">Recursos</a>
                        <a href="#how" className="hover:text-emerald-600 transition-colors">Como Funciona</a>
                    </div>

                    <Link to="/auth">
                        <Button size="sm" className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-6 shadow-lg shadow-emerald-500/25">
                            Acessar Agora
                        </Button>
                    </Link>
                </nav>
            </motion.header>

            {/* Hero Section */}
            <motion.section 
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32"
            >
                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-400/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-400/20 blur-[120px] rounded-full" />

                <div className="relative z-10 text-center max-w-5xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-10"
                    >
                        <Sparkles className="w-4 h-4" />
                        Powered by Gemini AI
                    </motion.div>

                    {/* Title with text reveal */}
                    <motion.h1 
                        className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05] text-slate-900"
                    >
                        <TextReveal text="Seu Segundo" delay={0.3} />
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
                            <TextReveal text="Cérebro" delay={0.6} />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Pare de perder ideias. Capture pensamentos, cumpra metas e deixe a IA 
                        organizar sua vida. <strong>Sua mente agradece.</strong>
                    </motion.p>

                    {/* CTA Button with shimmer */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link to="/auth?signup=true">
                            <Button 
                                size="lg" 
                                className="group relative h-16 px-10 rounded-full text-lg font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-2xl shadow-emerald-500/30 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <Rocket className="w-5 h-5" />
                                    Começar Grátis Agora
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                            </Button>
                        </Link>
                        <p className="text-sm text-slate-500">✓ Sem cartão de crédito • ✓ Cancele quando quiser</p>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex flex-col items-center gap-2 text-slate-400"
                    >
                        <span className="text-xs uppercase tracking-widest">Descubra</span>
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Features Section */}
            <section id="features" className="relative py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <RevealOnScroll className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
                            Por que o <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">CerebroOnline</span>?
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Tudo que você precisa para dominar suas ideias e alcançar seus objetivos.
                        </p>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <RevealOnScroll delay={0.1}>
                            <FeatureCard
                                icon={Zap}
                                title="Captura em Segundos"
                                description="Digite ou dite. A IA entende e classifica instantaneamente. Zero fricção."
                                gradient="from-amber-400 to-orange-500"
                            />
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.2}>
                            <FeatureCard
                                icon={Target}
                                title="Metas que Funcionam"
                                description="Defina, acompanhe e conquiste. Veja seu progresso em tempo real e nunca mais desista."
                                gradient="from-emerald-400 to-teal-500"
                            />
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.3}>
                            <FeatureCard
                                icon={Brain}
                                title="IA que Entende Você"
                                description="Gemini AI organiza tudo automaticamente. É como ter um assistente pessoal 24/7."
                                gradient="from-cyan-400 to-blue-500"
                            />
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.4}>
                            <FeatureCard
                                icon={Shield}
                                title="100% Seguro"
                                description="Seus pensamentos são privados. Criptografia de ponta a ponta. Sem exceções."
                                gradient="from-rose-400 to-pink-500"
                            />
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how" className="relative py-32 px-6 bg-gradient-to-b from-white via-emerald-50/30 to-white">
                <div className="max-w-5xl mx-auto">
                    <RevealOnScroll className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
                            Simples como <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">1, 2, 3</span>
                        </h2>
                    </RevealOnScroll>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 via-teal-400/50 to-cyan-400/50 hidden md:block" />

                        <div className="space-y-16">
                            <RevealOnScroll direction="left" delay={0.1}>
                                <TimelineStep
                                    number="01"
                                    title="Capture"
                                    description="Pensou em algo? Anote. Sem formatação, sem regras. Só despeje."
                                    align="left"
                                />
                            </RevealOnScroll>
                            <RevealOnScroll direction="right" delay={0.2}>
                                <TimelineStep
                                    number="02"
                                    title="IA Organiza"
                                    description="Em milissegundos, o Gemini classifica: tarefa, ideia, meta ou nota."
                                    align="right"
                                />
                            </RevealOnScroll>
                            <RevealOnScroll direction="left" delay={0.3}>
                                <TimelineStep
                                    number="03"
                                    title="Você Executa"
                                    description="Veja tudo organizado no seu dashboard. Foque no que importa."
                                    align="left"
                                />
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative py-32 px-6 bg-white">
                <RevealOnScroll>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-emerald-500 to-teal-600 overflow-hidden shadow-2xl shadow-emerald-500/30">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                            
                            <div className="relative z-10 text-center">
                                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                                    Chega de caos mental.
                                </h2>
                                <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">
                                    Milhares já organizaram suas vidas. Você vai continuar perdendo ideias?
                                </p>
                                <Link to="/auth?signup=true">
                                    <Button 
                                        size="lg" 
                                        className="h-16 px-12 rounded-full text-xl font-bold bg-white text-emerald-600 hover:bg-slate-100 shadow-2xl hover:shadow-3xl transition-all"
                                    >
                                        🚀 Quero Organizar Minha Mente
                                    </Button>
                                </Link>
                                <p className="text-white/60 text-sm mt-8">Comece em 30 segundos. É grátis.</p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-slate-200 bg-slate-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-sm">
                            🧠
                        </div>
                        <span className="font-bold text-slate-900">CerebroOnline</span>
                        <span className="text-slate-500 text-sm">by PortoSol</span>
                    </div>
                    <p className="text-slate-500 text-sm">© 2026 CerebroOnline. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}

// Text Reveal Animation Component
function TextReveal({ text, delay = 0 }: { text: string; delay?: number }) {
    return (
        <span className="inline-block overflow-hidden">
            <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block"
            >
                {text}
            </motion.span>
        </span>
    )
}

// Feature Card Component
function FeatureCard({ 
    icon: Icon, 
    title, 
    description, 
    gradient 
}: { 
    icon: any
    title: string
    description: string
    gradient: string
}) {
    return (
        <div className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-500 overflow-hidden">
            {/* Hover glow */}
            <div className={cn(
                "absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500",
                gradient
            )} />
            
            <div className="relative z-10">
                <div className={cn(
                    "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg",
                    gradient
                )}>
                    <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}

// Timeline Step Component
function TimelineStep({ 
    number, 
    title, 
    description, 
    align 
}: { 
    number: string
    title: string
    description: string
    align: 'left' | 'right'
}) {
    return (
        <div className={cn(
            "flex items-center gap-8",
            align === 'right' && "md:flex-row-reverse"
        )}>
            <div className={cn(
                "flex-1",
                align === 'right' && "md:text-right"
            )}>
                <span className="text-6xl font-black text-emerald-100">{number}</span>
                <h3 className="text-2xl font-bold mb-2 -mt-4 text-slate-900">{title}</h3>
                <p className="text-slate-600">{description}</p>
            </div>
            <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 items-center justify-center shadow-lg shadow-emerald-500/30 flex-shrink-0">
                <span className="text-xl font-bold text-white">{number}</span>
            </div>
            <div className="flex-1 hidden md:block" />
        </div>
    )
}
