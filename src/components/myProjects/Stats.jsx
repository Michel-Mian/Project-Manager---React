import { 
    FiGrid,
    FiTrendingUp,
    FiCalendar
} from 'react-icons/fi'

export default function Stats({projects}) {

    const totalBudget = projects.reduce((sum, project) => sum + (project.budget || 0), 0);
    const activeProjects = projects.filter(project => project.date_end && new Date(project.date_end) > new Date()).length;
    
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="flex items-center justify-center mb-3">
                    <div className="p-2 bg-white/20 rounded-xl">
                        <FiGrid className="w-6 h-6 text-white" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{projects.length}</h3>
                <p className="text-blue-100">Total de Projetos</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="flex items-center justify-center mb-3">
                    <div className="p-2 bg-white/20 rounded-xl">
                        <FiTrendingUp className="w-6 h-6 text-white" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{activeProjects}</h3>
                <p className="text-blue-100">Projetos Ativos</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="flex items-center justify-center mb-3">
                    <div className="p-2 bg-white/20 rounded-xl">
                        <FiCalendar className="w-6 h-6 text-white" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-white">
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalBudget)}
                </h3>
                <p className="text-blue-100">Orçamento Total</p>
            </div>
        </div>
    )
}