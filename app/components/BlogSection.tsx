export default function BlogSection() {
  const blogs = [
    {
      title: "Understanding Land Fraud in Kenya",
      excerpt:
        "Learn how to identify and avoid common land scams, protect your investment, and ensure a smooth property acquisition process.",
      date: "August 2025",
      link: "#",
    },
    {
      title: "The Importance of a Genuine Title Deed",
      excerpt:
        "A title deed is more than just a piece of paper. Discover why verifying ownership is crucial before purchasing land or property.",
      date: "August 2025",
      link: "#",
    },
    {
      title: "Avoiding Property Boundary Disputes",
      excerpt:
        "Practical tips to confirm boundaries, work with surveyors, and maintain good relations with neighbors when buying land.",
      date: "July 2025",
      link: "#",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
              style={{ maxWidth: "300px", margin: "0 auto" }}
            >
              <p className="text-xs text-gray-500">{blog.date}</p>
              <h3 className="text-lg font-semibold mt-1">{blog.title}</h3>
              <p className="text-gray-600 italic mt-2 text-sm">{blog.excerpt}</p>
              <a
                href={blog.link}
                className="inline-block mt-3 text-blue-600 hover:underline font-medium text-sm"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
