import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-4 relative">
      <div className="flex flex-col items-end">
        <a
          href="https://www.linkedin.com/in/nicolasmahecha11/"
          className="text-blue-500 hover:text-white mb-2 transition-all duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
        <div className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-500">
          © {new Date().getFullYear()} Nicolás Mahecha
        </div>
      </div>
    </footer>
  );
}
