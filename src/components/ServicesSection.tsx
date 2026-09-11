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
          <h3 className="text-primary text-md font-semibold uppercase tracking-wide mb-3">
            expertise
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">Do zero ao deploy</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className='h-50 flex flex-col justify-around'>
                <CardHeader className='gap-2 py-3'>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Icon className="text-primary" size={22} />
                  </div>

                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
