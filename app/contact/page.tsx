import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      details: ['Westlands Business Center', 'Waiyaki Way, Nairobi', 'Kenya']
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+254 700 123 456', '+254 711 987 654']
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@Graceful Properties.co.ke', 'sales@Graceful Properties.co.ke']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto">
            Ready to find your dream property? Get in touch with our expert team 
            and let us help you make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <ContactForm className="h-fit" />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-slate-800 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We'd love to hear from you. Whether you have questions about a specific 
                property, need market insights, or want to schedule a viewing, our team 
                is here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-500 p-3 rounded-lg mr-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-slate-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Find Us Here
              </h3>
              <div className="bg-slate-200 h-64 rounded-xl flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Westlands Business Center</p>
                  <p className="text-sm">Waiyaki Way, Nairobi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                How do I schedule a property viewing?
              </h3>
              <p className="text-slate-600">
                Simply contact us through the form above, call our office, or use the 
                "View Details" button on any property listing. We'll arrange a convenient 
                time for your viewing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Do you assist with property financing?
              </h3>
              <p className="text-slate-600">
                Yes, we work with several financial institutions and can help connect you 
                with mortgage advisors to find the best financing options for your needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                What areas do you cover?
              </h3>
              <p className="text-slate-600">
                We specialize in prime locations across Nairobi including Karen, Westlands, 
                Kilimani, Lavington, Runda, and the Central Business District.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                How long does the buying process take?
              </h3>
              <p className="text-slate-600">
                The timeline varies depending on financing and legal requirements, but 
                typically ranges from 4-8 weeks. We guide you through every step of the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}