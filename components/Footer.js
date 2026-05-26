import { FaFacebook } from "react-icons/fa";

export function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="ml-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ul>
        <li>Manu app</li>
        <li>&copy; {date} MANU APP. All rights reserved.</li>
      </ul>
      <ul>
        <li>privacy policy</li>
        <li>terms of service</li>
        <li>contact us</li>
      </ul>
      <ul className="flex gap-4">
        <FaFacebook className="h-10 w-10 text-blue-800" />
        <FaFacebook className="h-10 w-10 text-blue-800" />
        <FaFacebook className="h-10 w-10 text-blue-800" />
        <FaFacebook className="h-10 w-10 text-blue-800" />
      </ul>
    </footer>
  );
}
