import Link from "next/link";

// components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center py-4 w-full">
        <p className="text-gray-400 m-0">&copy; 2024 Sikandar Ali. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <Link href="https://www.linkedin.com/in/sikandar-ali-44454724b/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-600 transition-colors duration-300">LinkedIn</Link>
          </li>
          <li>
            <Link href="https://github.com/786nasirAli" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-600 transition-colors duration-300">GitHub</Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/qureshi.bro.9" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-600 transition-colors duration-300">Facebook</Link>
          </li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;
  