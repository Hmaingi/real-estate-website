import { CheckCircle, HeartHandshake, Home, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';
import BrandWordmark from '@/components/BrandWordmark';

export default function AboutPage() {
  const stats = [
    { icon: Home, value: '250+', label: 'Properties Listed' },
    { icon: Users, value: '300+', label: 'People Guided' },
    { icon: ShieldCheck, value: 'Care', label: 'Built Into Every Step' },
    { icon: HeartHandshake, value: 'Calm', label: 'Guided Decisions' }
  ];

  const values = [
    {
      icon: HeartHandshake,
      title: 'Care',
      description: 'We listen first, understand what matters, and treat every client decision with respect.'
    },
    {
      icon: Users,
      title: 'Clarity',
      description: 'We explain the process clearly so clients understand what they are getting into before they commit.'
    },
    {
      icon: ShieldCheck,
      title: 'Calmness',
      description: 'We do not pressure people. We slow things down and help them make confident choices.'
    }
  ];

  const services = [
    'Buyers looking for residential properties',
    'Tenants searching for homes to rent',
    'Sellers listing residential properties',
    'Landlords who need tenant placement',
    'Auctioneers handling residential property opportunities'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
              About <BrandWordmark className="text-5xl lg:text-7xl align-middle" />
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto">
              A real estate companion brand built to give people peace of mind when buying,
              renting, or placing residential property.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
                Why We Exist
              </h2>
              <div className="space-y-6 text-lg text-slate-700">
                <p>
                  We believe renting or buying a property should not stress people out. Most
                  people come into real estate already worried. They are afraid of being cheated,
                  afraid of rushing into the wrong decision, and afraid of trusting the wrong person.
                </p>
                <p>
                  When someone comes to <BrandWordmark className="text-3xl align-middle" />, they are looking for more than a
                  house or a unit. They are looking for reassurance. Our role is to slow things
                  down, explain things clearly, and help people understand what they are getting
                  into before they commit.
                </p>
                <p>
                  We do not pressure people. We walk with them. If a client leaves us feeling
                  calm, clear, and confident, then we have done our work well. That feeling is
                  called peace of mind, and that is why we exist.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Graceful Properties team guiding a client"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              <BrandWordmark className="text-4xl align-middle" /> is a real estate companion brand. This means we do more
              than sell or rent properties. We guide, teach, and protect people as they make
              real estate decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Graceful Properties residential real estate support"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
                What We Handle
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                We deal with buyers, tenants, landlords, sellers, and auctioneers. Our focus
                is the sale and rental of residential properties, with landlord support for
                tenant placement only. Our work is built on care, clarity, and calmness.
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Make Your Next Property Decision With Peace of Mind
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you want to buy, rent, sell, or place a tenant, we are here to walk
            with you clearly and calmly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/listings"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Browse Properties
            </a>
            <a
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
