import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-3xl font-extrabold hover:underline mr-6">Me Tube</Link>

        <ul className="flex space-x-8">
          <li className="flex-1">
            <Link to="/" className="text-white hover:text-gray-300 block text-center bg-indigo-600 py-2 px-3 rounded-full w-24">Home</Link>
          </li>
          <li className="flex-1">
            <Link to="/inbox" className="text-white hover:text-gray-300 block text-center bg-indigo-600 py-2 px-3 rounded-full w-24">Inbox</Link>
          </li>
          <li className="flex-1">
            <Link to="/video" className="text-white hover:text-gray-300 block text-center bg-indigo-600 py-2 px-3 rounded-full w-24">Video</Link>
          </li>
          <li className="flex-1">
            <Link to="/profile" className="text-white hover:text-gray-300 block text-center bg-indigo-600 py-2 px-3 rounded-full w-24">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
