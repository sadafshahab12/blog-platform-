import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and Copyright */}
        <div>
          <h4 className="text-xl font-semibold">PostHive</h4>
          <p className="text-sm mt-2">© 2025 PostHive. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
            <li><Link href="/blogs" className="text-gray-400 hover:text-white">Blogs</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
          <ul className="space-y-2">
            <li><Link href="https://www.linkedin.com/in/sadaf-shahab-ssr123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LinkedIn</Link></li>
            <li><Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">GitHub</Link></li>
            <li><Link href="mailto:sadaf@example.com" className="text-gray-400 hover:text-white">Email</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
          <ul className="space-y-2">
            <li><p className="text-gray-400">Phone: (123) 456-7890</p></li>
            <li><p className="text-gray-400">Email: sadaf@example.com</p></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>Built with ❤️ by Sadaf Shahab</p>
      </div>
    </footer>
  );
};

export default Footer;
