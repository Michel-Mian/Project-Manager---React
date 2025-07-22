import { FiFileText } from 'react-icons/fi';

export default function DescProject({project}){
    return(
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
                <div className="p-2 bg-blue-100 rounded-xl mr-4">
                    <FiFileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Descrição do Projeto</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
                {project.description || 'Nenhuma descrição foi fornecida para este projeto.'}
            </p>
        </div>
    )
}