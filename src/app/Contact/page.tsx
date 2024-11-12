// components/Contact.js
const Contact = () => {
    return (
      <section className="p-8 bg-gray-900 text-white h-[65vh]" id="contact">
        <h2 className="text-teal-400 text-center mb-6 text-2xl">Contact Me</h2>
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 text-white" />
          <textarea placeholder="Your Message" className="p-3 rounded bg-gray-800 text-white h-32"></textarea>
          <button type="submit" className="bg-teal-400 text-white px-6 py-3 rounded cursor-pointer transition-colors duration-300 hover:bg-teal-600">
            Send Message
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  