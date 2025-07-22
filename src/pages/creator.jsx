import { FiGithub, FiLinkedin, FiCode, FiHeart, FiStar, FiCoffee } from 'react-icons/fi';
import NavBar from '../components/layout/NavBar';

export default function Creator() {
  const openGitHub = () => {
    window.open('https://github.com/Michel-Mian', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/michel-mian-56ab16324', '_blank');
  };

  return (
    <>
        <NavBar />
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
        
        
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md text-center relative transform transition-all duration-500 hover:scale-105">
            
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <FiCode className="w-8 h-8 text-white" />
            </div>
            </div>

            <div className="mt-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Criador
            </h1>
            <p className="text-gray-300 text-lg mb-2">Desenvolvedor Full Stack</p>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <FiCoffee className="w-4 h-4" />
                <span>Transformando café em código</span>
            </div>
            </div>

            <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-gray-300">
                <FiStar className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Apaixonado por tecnologia</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
                <FiHeart className="w-4 h-4 text-red-400" />
                <span className="text-sm">Criando soluções incríveis</span>
            </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
            <button
                onClick={openGitHub}
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-700 hover:border-gray-600"
            >
                <FiGithub className="w-5 h-5" />
                GitHub
            </button>
            
            <button
                onClick={openLinkedIn}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
                <FiLinkedin className="w-5 h-5" />
                LinkedIn
            </button>
            </div>

            <div className="mt-8 text-gray-400 text-xs">
            <p>Conecte-se comigo nas redes sociais!</p>
            </div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
    </>
  );
}