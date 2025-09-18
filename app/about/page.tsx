import { Award, Users, Home, Target, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    { icon: Home, value: '500+', label: 'Properties Listed' },
    { icon: Users, value: '1,000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Target, value: '98%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from property selection to client service.'
    },
    {
      icon: Users,
      title: 'Trust',
      description: 'Building lasting relationships through transparency, honesty, and reliable service.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Embracing new technologies and methods to provide better solutions for our clients.'
    }
  ];

  const achievements = [
    'Top Real Estate Agency in Nairobi 2023',
    'Excellence in Customer Service Award',
    'Best Luxury Property Specialist',
    'Outstanding Sales Performance Recognition',
    'Community Development Partner Award'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
              About Graceful Properties
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto">
              Your trusted partner in finding exceptional properties across Nairobi. 
              We combine local expertise with global standards to deliver unmatched service.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-slate-700">
                <p>
                  Founded in 2009, Graceful Properties began with a simple vision: to revolutionize 
                  the real estate experience in Kenya by combining exceptional service with 
                  deep market knowledge.
                </p>
                <p>
                  Over the years, we've grown from a small team of passionate real estate 
                  professionals to become one of Nairobi's most trusted property consultants. 
                  Our success is built on understanding that every client has unique needs 
                  and dreams.
                </p>
                <p>
                  Today, we continue to set industry standards through innovative marketing, 
                  cutting-edge technology, and most importantly, genuine care for our clients' 
                  success. Whether you're buying your first home, investing in commercial property, 
                  or searching for the perfect rental, we're here to guide you every step of the way.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team at work"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These core principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Award ceremony"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
                Our Achievements
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                We're proud of the recognition we've received for our commitment to 
                excellence and client satisfaction.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our experienced team help you navigate the real estate market and 
            find the perfect property for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/listings"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
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