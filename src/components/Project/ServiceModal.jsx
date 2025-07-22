import { useState } from 'react';
import { FiX, FiTag, FiFileText, FiDollarSign, FiPlus } from 'react-icons/fi';
import api from '../../services/api'; 

export default function ServiceModal({ isOpen, onClose, onServiceAdded, id_project }) { 
  const [service, setService] = useState({
    name_service: '',
    description: '',
    value: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const serviceDataToSend = {
        name_service: service.name_service,
        description: service.description,
        value: parseFloat(service.value),
        id_project: id_project 
      };

      const response = await api.post('/services', serviceDataToSend);
      console.log('Service added successfully:', response.data);
      if (onServiceAdded) {
        onServiceAdded(response.data);
      }
      setService({
        name_service: '',
        description: '',
        value: '',
      });
      onClose();
    } catch (error) {
      console.error('Error adding service:', error);
      alert('Error adding service. Please check the console for details.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 w-full max-w-lg relative transform transition-all duration-300 ease-out animate-in slide-in-from-bottom-4 zoom-in-95">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100/80"
        >
          <FiX className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FiPlus className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Adicionar Novo Serviço
          </h2>
          <p className="text-gray-500">Preencha as informações do serviço</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name_service" className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FiTag className="text-blue-500" />
              Nome do Serviço
            </label>
            <input
              type="text"
              id="name_service"
              name="name_service"
              value={service.name_service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm hover:bg-white/80"
              placeholder="Ex: Desenvolvimento Web"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FiFileText className="text-purple-500" />
              Descrição
            </label>
            <textarea
              id="description"
              name="description"
              value={service.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm resize-none hover:bg-white/80"
              placeholder="Detalhes sobre o serviço..."
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="value" className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FiDollarSign className="text-green-500" />
              Valor (R$)
            </label>
            <input
              type="number"
              id="value"
              name="value"
              value={service.value}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm hover:bg-white/80"
              placeholder="6000.00"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 backdrop-blur-sm"
          >
            <FiPlus className="w-5 h-5" />
            Adicionar Serviço
          </button>
        </div>
      </div>
    </div>
  );
}