import { LucideIcon, LayoutTemplate,Building, Code, Settings } from "lucide-react";

export interface Service {
    icon: LucideIcon
    title: string;
    description: string
}

export const services: Service[] = [
    {
        icon: LayoutTemplate,
        title:"Landing Pages",
        description: "Páginas rápidas e estratégicas, desenvolvidas para apresentar sua oferta e transformar visitantes em clientes.",
    },
    {
        icon: Building,
        title:"Sites Institucionais",
        description: "Sites profissionais que fortalecem sua presença digital e transmitem mais credibilidade para sua empresa.",
    },
    {
        icon: Code,
        title:"Sistemas Web",
        description: "Soluções sob medida para organizar processos, automatizar tarefas e atender às necessidades da sua operação.",
    },
    {
        icon: Settings,
        title:"Manutenção e Suporte",
        description: "Acompanhamento contínuo para manter suas soluções atualizadas, seguras e funcionando corretamente.",
    },
    
]
