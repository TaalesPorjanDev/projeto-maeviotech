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
    <section id="portfolio"className='py-16 md:py-24 bg-surface-container'>
      <div className='container-maevio px-6'>
        <div className='mb-6 md:mb-10'>
          <span className='text-primary text-md font-semibold uppercase tracking-wide mb-3'>Projetos em Destaque</span>
          <p className='text-muted-foreground text-sm md:text-lg mt-2'>
            Conheça alguns projetos que demonstram como transformamos diferentes necessidades em soluções digitais.
          </p>
        </div>
        <div className='grid  grid-cols-1 md:grid-cols-3 gap-8'>
            {projects.map((project) => 
              {
                return (
                   <Link href={project.link} key={project.id} target='_blank' rel='noopener noreferrer' aria-label='Ver Projetos MaevioTech' >
                   <Card className='overflow-hidden py-0 gap-0 transition-transform duration-200 hover:-translate-y-2 
                   hover:shadow-xl'> 
                        <div className='relative aspect-2/1 w-full'>
                            <Image 
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className='object-cover'
                            />
                        </div>
                        <CardHeader className='gap-3 px-6 pt-6 pb-7'>
                          <span className='text-xs font-semibold uppercase tracking-wide text-primary'>
                            {project.category}
                          </span>
                            <CardTitle className='flex items-center justify-between'>
                                {project.title} 
                                <ArrowUpRight className='size-4 text-muted-foreground' aria-hidden="true"/>
                            </CardTitle>

                            <CardDescription className='leading-relaxed'>
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
