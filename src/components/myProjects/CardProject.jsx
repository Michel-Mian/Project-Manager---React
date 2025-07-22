import {
    FiCalendar,
    FiClock,
    FiArrowRight,
    FiTag,
    FiFileText
} from 'react-icons/fi';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { GoProject } from "react-icons/go";
import { Link } from 'react-router'

export default function CardProject({ id, name, description, start, end, budget, create }) {
    const formatDate = (dateString) => {

        if (!dateString) {
            console.log(`    formatDate: dateString é falsy, retornando 'N/A'`);
            return 'N/A';
        }
        try {
            const date = new Date(dateString);

            const formatted = date.toLocaleDateString('pt-BR');
            console.log(`    formatDate: Sucesso, retornando "${formatted}"`);
            return formatted;
        } catch (e) {
            console.error("Erro ao formatar data (catch block):", dateString, e);
            return dateString; // Retorna a string original se houver erro na conversão
        }
    };

    const formatBudget = (value) => {
        if (!value) return 'N/A';
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    const handleViewDetails = () => {
        console.log(`Ver detalhes do projeto: ${name} (ID: ${id})`)
    };

    return (
        <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 m-4 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-indigo-50 to-cyan-50 rounded-full translate-y-10 -translate-x-10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

            <div className="relative z-10">
                <div className="mb-6">
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-purple-600 rounded-xl shadow-lg">
                                <GoProject className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
                                    {name || 'Nome do Projeto Indefinido'}
                                </h2>
                                <div className="flex items-center mt-1 text-sm text-gray-500">
                                    <FiTag className="w-3 h-3 mr-1" />
                                    <span>ID: {id}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="flex items-start space-x-2">
                        <FiFileText className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed text-base">
                            {description || 'Sem descrição disponível.'}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl border border-green-100">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <FiCalendar className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                            <p className="text-xs font-medium text-green-600 uppercase tracking-wide">Início</p>
                            <p className="text-sm font-semibold text-gray-800">{formatDate(start)}</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-xl border border-red-100">
                        <div className="p-2 bg-red-100 rounded-lg">
                            <FiClock className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                            <p className="text-xs font-medium text-red-600 uppercase tracking-wide">Fim</p>
                            <p className="text-sm font-semibold text-gray-800">{formatDate(end)}</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl border border-blue-100 md:col-span-2">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <HiOutlineCurrencyDollar className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">Orçamento</p>
                            <p className="text-lg font-bold text-gray-800">{formatBudget(budget)}</p>
                        </div>
                    </div>

                    {create && (
                        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-xl border border-purple-100 md:col-span-2">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <FiCalendar className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-purple-600 uppercase tracking-wide">Criado em</p>
                                <p className="text-sm font-semibold text-gray-800">{formatDate(create)}</p>
                            </div>
                        </div>
                    )}
                </div>

                <Link
                    to={`/project/${id}`}
                    className="group/button inline-flex items-center justify-center w-full px-6 py-3 bg-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    <span className="mr-2">Ver Detalhes</span>
                    <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
