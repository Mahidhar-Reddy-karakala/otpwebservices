import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"
export default function Documentation() {
  const docs = [
    {
      title: "Getting Started",
      description: "Set up EasyAuth in your project within minutes with our quick start guide.",
      link: "#",
    },
    {
      title: "API Reference",
      description: "Complete API documentation with examples and SDKs for popular frameworks.",
      link: "#",
    },
    {
      title: "Best Practices",
      description: "Learn security best practices and authentication patterns from our experts.",
      link: "#",
    },
  ]

  return (
    <section id="docs" className="py-24 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Documentation</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {docs.map((doc, index) => (
            <a
              key={index}
              href={doc.link}
              className="group p-8 border border-gray-800 rounded-lg hover:border-gray-600 transition cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-300 transition">{doc.title} →</h3>
              <p className="text-gray-400">{doc.description}</p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <NavLink to="/documentation">
            <Button className="bg-white text-black hover:bg-gray-100 h-12 px-8 text-base font-semibold rounded-full">
              Browse Full Docs
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  )
}
