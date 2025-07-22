import { Link } from 'react-router'

export default function NavBar() {
    return (
        <nav className="bg-blue-900 p-4 shadow-xl">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                    </svg>
                    <h1 className="text-3xl font-extrabold text-white tracking-wide">
                        Project Manager
                    </h1>
                </Link>

                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to="/myprojects"
                            className="text-white hover:text-blue-200 text-lg font-medium transition-colors duration-300 py-2 px-3 rounded-md border border-transparent hover:border-blue-300"
                        >
                            My Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/creator"
                            className="text-white hover:text-blue-200 text-lg font-medium transition-colors duration-300 py-2 px-3 rounded-md border border-transparent hover:border-blue-300"
                        >
                            Creator
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}