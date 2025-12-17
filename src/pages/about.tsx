export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-black border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          About EasyAuth
        </h2>

        <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
          <p>
            EasyAuth was founded with a simple mission: to make authentication
            effortless for developers. We believe that security should never
            come at the cost of simplicity.
          </p>

          <p>
            Our platform combines enterprise-grade security with an intuitive
            developer experience. We handle the complex parts of authentication
            so you can focus on building amazing products.
          </p>

          <p>
            Today, thousands of developers trust EasyAuth to secure their
            applications. Whether you're building a startup or scaling an
            enterprise, we have the tools and support to help you succeed.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-800">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">10K+</h4>
              <p className="text-gray-500">Active Developers</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">99.99%</h4>
              <p className="text-gray-500">Service Uptime</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">5M+</h4>
              <p className="text-gray-500">Auth Events/Day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
