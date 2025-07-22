import { FiTarget } from 'react-icons/fi';
import ServiceModal from './ServiceModal';
import { useState } from 'react';


export default function AddService({id_project, onServiceAdded}){ 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleServiceAddedLocally = (newService) => {
      console.log('New service added (via AddService):', newService);
      if (onServiceAdded) {
        onServiceAdded(newService);
      }
    };

    return(
        <>
            <button
                onClick={handleOpenModal}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
            >            <FiTarget className="w-4 h-4 mr-2" />
            Adicionar Serviço
        </button>
        <ServiceModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onServiceAdded={handleServiceAddedLocally} 
            id_project={id_project}
        />
        </>
    )
}