export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">3D Gaming Website</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Games</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
