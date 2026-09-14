export interface Project {
    id:string;
    title: string;
    description: string;
    image: string;
    link: string;
}

export const projects: Project[] = [
    {
        id: "card-quitanda",
        title: "Carla Quitanda e Rotisseria",
        description: "Landing page para comércio local, com catálogo de produtos e informações de contato.",
        image: "/images/projeto-kitanda.png",
        link: "https://projeto-kitanda.vercel.app/"
    },
    {
        id:"service-flow",
        title: "Service Flow",
        description: "Sistema de gestão de atendimentos com automação via n8n.",
        image: "/images/projeto-service-flow.jpg",
        link: "https://service-flow-nine.vercel.app/"
    }
    
]