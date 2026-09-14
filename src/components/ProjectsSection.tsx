import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

import { projects } from "@/lib/projects"
import { ArrowUpRight } from 'lucide-react';
import  Image from "next/image"
import Link from 'next/link';

export function ProjectsSection() {
  return (
    <section className='py-16 md:py-24 bg-surface-container'>
      <div className='container-maevio px-6'>
        <div className='mb-6 md:mb-10'>
          <h3 className='text-primary text-sm font-semibold uppercase tracking-wide mb-3'>Projetos em Destaque</h3>
          <p className='text-muted-foreground text-base md:text-lg'>
            Uma seleção de trabalhos recentes focados em interfaces limpas e
            arquitetura escalável
          </p>
        </div>
        <div className='grid  grid-cols-1 md:grid-cols-3 gap-8'>
            {projects.map((project) => 
              {
                return (
                   <Link href={project.link} key={project.id} target='_blank' rel='noopener noreferrer' aria-label='Ver Projetos MaevioTech' >
                   <Card className='overflow-hidden py-0 gap-0 transition-shadow
                          hover:shadow-md'> 
                        <div className='relative aspect-2/1 w-full'>
                            <Image 
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className='object-cover'
                            />
                        </div>
                        <CardHeader className='gap-2 px-5 pt-4 pb-5'>
                            <CardTitle className='flex items-center justify-between'>
                                {project.title} 
                                <ArrowUpRight className='size-4 text-muted-foreground' aria-hidden="true"/>
                            </CardTitle>

                            <CardDescription>
                                {project.description}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                   </Link>
                )
              }
            )}
        </div>
      </div>
    </section>
  );
}
