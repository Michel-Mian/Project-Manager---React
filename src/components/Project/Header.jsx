import { 
    FiArrowLeft,
    FiTag,
    FiEdit3,
    FiTrash2,
    FiActivity
} from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi'
import { Link } from 'react-router'


export default function Header({project, handleDeleteProject}){
    const getProjectStatus = () => {
        if (!project.date_start || !project.date_end) return { status: 'Indefinido', color: 'gray' };
        
        const now = new Date();
        const startDate = new Date(project.date_start);
        const endDate = new Date(project.date_end);
        
        if (now < startDate) return { status: 'Aguardando', color: 'blue' };
        if (now > endDate) return { status: 'Finalizado', color: 'green' };
        return { status: 'Em Andamento', color: 'yellow' };
    };

    

    const projectStatus = getProjectStatus();
    return(
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
            <div className="absolute inset-0 bg-black/10"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 py-12">
                <div className="flex items-center mb-6">
                    <Link
                        to="/myprojects"
                        className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium border border-white/30 hover:bg-white/30 transition-all duration-300 mr-4"
                    >
                        <FiArrowLeft className="w-4 h-4 mr-2" />
                        Voltar
                    </Link>
                    
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        projectStatus.color === 'green' ? 'bg-green-500/20 text-green-100 border border-green-400/30' :
                        projectStatus.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-100 border border-yellow-400/30' :
                        projectStatus.color === 'blue' ? 'bg-blue-500/20 text-blue-100 border border-blue-400/30' :
                        'bg-gray-500/20 text-gray-100 border border-gray-400/30'
                    }`}>
                        <FiActivity className="w-4 h-4 inline mr-2" />
                        {projectStatus.status}
                    </div>
                </div>

                <div className="flex items-center mb-4">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm mr-4">
                        <HiOutlineSparkles className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold mb-2">
                            {project.name_project || 'Nome do Projeto Indefinido'}
                        </h1>
                        <div className="flex items-center text-blue-100">
                            <FiTag className="w-4 h-4 mr-2" />
                            <span>ID: {project.id}</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    <button className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium border border-white/30 hover:bg-white/30 transition-all duration-300">
                        <FiEdit3 className="w-4 h-4 mr-2" />
                        Editar
                    </button>
                    <button onClick={handleDeleteProject} className="inline-flex items-center px-4 py-2 bg-white/30 backdrop-blur-sm text-white rounded-xl font-medium border border-white/30 hover:bg-red-400 transition-all duration-300">
                        <FiTrash2 className="w-4 h-4 mr-2" />
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    )
}