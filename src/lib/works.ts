import { LucideIcon, Search, DraftingCompass,SquareTerminal, Rocket} from "lucide-react";

export interface Works {
    icon: LucideIcon
    title: string;
    description: string
}

export const work: Works[] = [
    {
        icon: Search,
        title:"01 — Descoberta",
        description: "Entendemos seu negócio, seus objetivos e as necessidades do projeto para definir a melhor solução.",
    },
    {
        icon: DraftingCompass,
        title:"02 — Planejamento e Design",
        description: "Estruturamos a solução e criamos uma experiência intuitiva, alinhada aos objetivos do seu negócio.",
    },
    {
        icon: SquareTerminal,
        title:"03 — Desenvolvimento",
        description: "Transformamos o planejamento em uma solução funcional, rápida e preparada para crescer.",
    },
    {
        icon: Rocket,
        title:"04 — Lançamento",
        description: "Realizamos os testes finais, colocamos o projeto no ar e garantimos que tudo esteja funcionando corretamente.",
    },
    
]
