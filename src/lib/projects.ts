export interface Project {
    id:string;
    category: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

export const projects: Project[] = [
    {
        id: "card-quitanda",
        category: "LANDING PAGE",
        title: "Carla Quitanda e Rotisseria",
        description: "Landing page desenvolvida para apresentar o negócio, seus produtos e principais informações de contato de forma simples e acessível.",
        image: "/images/projeto-kitanda.png",
        link: "https://projeto-kitanda.vercel.app/"
    },
    {
        id:"service-flow",
        category: "SISTEMA WEB • AUTOMAÇÃO",
        title: "Service Flow",
        description: "Sistema web para gerenciamento de atendimentos, desenvolvido para organizar processos e automatizar tarefas por meio de integrações.",
        image: "/images/projeto-service-flow.jpg",
        link: "https://service-flow-nine.vercel.app/"
    }
    
]