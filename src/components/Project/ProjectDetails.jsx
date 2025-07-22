import { 
    FiCalendar, 
    FiClock
} from 'react-icons/fi';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';

export default function ProjectDetails({project}){
    
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('pt-BR');
        } catch (e) {
            return dateString;
        }
    };

    const formatBudget = (value) => {
        if (value === null || value === undefined) return 'N/A';
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };
    
    return(
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Detalhes do Projeto</h3>
            <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="p-2 bg-green-100 rounded-lg">
                        <FiCalendar className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-green-600 uppercase tracking-wide">Data de Início</p>
                        <p className="text-sm font-semibold text-gray-800">{formatDate(project.date_start)}</p>
                    </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="p-2 bg-red-100 rounded-lg">
                        <FiClock className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-red-600 uppercase tracking-wide">Data de Término</p>
                        <p className="text-sm font-semibold text-gray-800">{formatDate(project.date_end)}</p>
                    </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="p-2 bg-blue-100 rounded-lg">
                        <HiOutlineCurrencyDollar className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">Orçamento</p>
                        <p className="text-lg font-bold text-gray-800">{formatBudget(project.budget)}</p>
                    </div>
                </div>

                {/* Creation Date */}
                {project.createdAt && (
                    <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
                        <div className="p-2 bg-purple-100 rounded-lg">
                            <FiCalendar className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-xs font-medium text-purple-600 uppercase tracking-wide">Criado em</p>
                            <p className="text-sm font-semibold text-gray-800">{formatDate(project.createdAt)}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}