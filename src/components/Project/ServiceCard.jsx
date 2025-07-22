import { FiTag, FiFileText, FiDollarSign } from 'react-icons/fi';
import { useState } from 'react'; 
import api from '../../services/api'; 

export default function ServiceCard({ service, onServiceDeleted }) { 
    const [isDeleting, setIsDeleting] = useState(false); 

    if (!service) {
        return null; 
    }

    const handleDelete = async () => {
        setIsDeleting(true); 
        try {
            await api.delete(`/services/${service.id}`);
            
            if (onServiceDeleted) {
                onServiceDeleted(service.id); 
            }
        } catch (error) {
            console.error('Erro ao excluir serviço:', error);
            alert('Erro ao excluir serviço. Verifique o console para mais detalhes.');
        } finally {
            setIsDeleting(false); 
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <FiTag className="text-blue-500 mr-2" />
                {service.name_service}
            </h3>
            <p className="text-gray-600 mb-4 flex items-start">
                <FiFileText className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                {service.description}
            </p>
            <div className="flex items-center text-lg font-bold text-green-600">
                <FiDollarSign className="mr-2" />
                R$ {parseFloat(service.value).toFixed(2).replace('.', ',')}
            </div>
            <div className="mt-4 flex justify-end space-x-2">
                <button className="text-blue-500 hover:text-blue-700">Editar</button> 
                <button
                    onClick={handleDelete} 
                    disabled={isDeleting} 
                    className="text-red-500 hover:text-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                    {isDeleting ? 'Excluindo...' : 'Excluir'} 
                </button>
            </div>
        </div>
    );
}