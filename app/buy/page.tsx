import Link from "next/link";
import { Building2, Gavel, Home } from "lucide-react";

const options = [
  {
    title: "Buy",
    description:
      "Discover homes available for immediate purchase through traditional sale processes with full ownership from the start.",
    href: "/listings?type=Sale",
    icon: Home
  },
  {
    title: "Rent-to-own",
    description:
      "Rent now, buy later. Structured payment plans that make owning your home more accessible and affordable.",
    href: "/listings?type=Rent-to-own",
    icon: Building2
  },
  {
    title: "Auction",
    description:
      "Find great deals on properties being sold through bank and legal auctions, often at below-market prices.",
    href: "/listings?type=Auction",
    icon: Gavel
  }
];

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Buy Your Dream Home</h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            Your Guide to Property Purchase in Kenya. Explore our listings to find the right
            property to buy that suits your needs.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className="bg-white rounded-lg shadow-lg p-8 border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all"
            >
              <div className="bg-emerald-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <option.icon className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{option.title}</h2>
              <p className="text-slate-600 leading-relaxed">{option.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
