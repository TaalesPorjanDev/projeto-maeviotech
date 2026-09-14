import { LucideIcon, Search, DraftingCompass,SquareTerminal, Rocket} from "lucide-react";

export interface Works {
    icon: LucideIcon
    title: string;
    description: string
}

export const work: Works[] = [
    {
        icon: Search,
        title:"Descoberta",
        description: "Análise profunda dos objetivos do negócio e necessidade dos usuários.",
    },
    {
        icon: DraftingCompass,
        title:"Design",
        description: "Criação de interfaces intituitivas com foco em usabilidade e estética.",
    },
    {
        icon: SquareTerminal,
        title:"Desenvolvimento",
        description: "Codificação limpa e escalável utilizando as tecnologias mais modernas.",
    },
    {
        icon: Rocket,
        title:"Lançamento",
        description: "Testes rigorosos e deploy otimizado para garantir perfomance máxima.",
    },
    
]
