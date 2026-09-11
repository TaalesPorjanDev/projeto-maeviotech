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
        description: "Páginas rápidas e otimizadas para conversão, feitas para vender.",
    },
    {
        icon: Building,
        title:"Sites Institucionais",
        description: "Presença digital sólida que passa credibilidade para seu negócio.",
    },
    {
        icon: Code,
        title:"Aplicações Web",
        description: "Sistemas sob medida para resolver problemas específicos da sua operação .",
    },
    {
        icon: Settings,
        title:"Manutenção",
        description: "Suporte contínuo para manter tudo rodando sem dor de cabeça.",
    },
    
]
