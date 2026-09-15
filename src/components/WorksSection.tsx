import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { work } from '@/lib/works';

export function WorksSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className='container-maevio px-6'>
        <div className='mb-8 md:mb-10'>
          <h3 className="text-primary text-md font-semibold uppercase tracking-wide mb-3">
            Sobre a maevioTech
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold">Processo de trabalho</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {work.map((works) => {
            const Icon = works.icon;
            return (
              <Card key={works.title} className='min-h-40 flex flex-col justify-around transition-transform duration-200 
                hover:-translate-y-2 hover:shadow-xl'>
                <CardHeader className='gap-2 px-5 pt-4 pb-5'>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Icon className="text-primary" size={22} />
                  </div>

                  <CardTitle className='text-lg'>{works.title}</CardTitle>
                  <CardDescription className="text-base">{works.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

