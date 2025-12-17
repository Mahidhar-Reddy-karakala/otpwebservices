export default function Contact(){
  return (
    <section id="contact" className="py-24 px-4 bg-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h2>
        <p className="text-gray-400 mb-8">Have questions? Reach out to our team and we'll get back to you.</p>
        <div className="flex justify-center">
          <a href="mailto:hello@example.com" className="px-6 py-3 bg-white text-black rounded-full">Email us</a>
        </div>
      </div>
    </section>
  )
}