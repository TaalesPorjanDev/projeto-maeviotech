import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { services } from '@/lib/services';

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-container">
      <div className='container-maevio px-6'>
        <div className='mb-8 md:mb-10'>
          <span className="text-primary text-md font-semibold uppercase tracking-wide mb-3">
            expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Do zero ao deploy</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className='min-h-40 flex flex-col justify-around'>
                <CardHeader className='gap-2 px-5 pt-4 pb-5'>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Icon className="text-primary" size={22} />
                  </div>

                  <CardTitle className='text-lg'>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
