import { Link } from 'react-router'
import { 
    FiHome, 
    FiFolderPlus
} from 'react-icons/fi';

export default function ActionButtons() {
    return(
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
                to="/new-project"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
                <FiFolderPlus className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:rotate-12" />
                <span>Novo Projeto</span>
            </Link>
            
            <Link
                to="/"
                className="group inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-medium border border-white/30 hover:bg-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
                <FiHome className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                <span>Voltar ao Início</span>
            </Link>
        </div>
    )
}