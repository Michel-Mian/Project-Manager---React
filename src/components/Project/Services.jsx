import { useState, useEffect } from 'react';
import AddService from "./AddService";
import { FiUsers } from 'react-icons/fi';
import api from "../../services/api";
import { HiOutlineClipboardList } from 'react-icons/hi';
import ServiceCard from './ServiceCard'; 

export default function Services({ id_project }) {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchServices() {
            setLoading(true);
            setError(null);
            try {
                const response = await api.get(`/services?id_project=${id_project}`);
                setServices(response.data);
            } catch (err) {
                console.error("Erro ao carregar serviços:", err);
                setError("Não foi possível carregar os serviços. Tente novamente.");
            } finally {
                setLoading(false);
            }
        }

        if (id_project) { 
            fetchServices();
        }
    }, [id_project]); 

    const handleServiceAdded = (newService) => {
        setServices(prevServices => [...prevServices, newService]);
    };

    const handleServiceDeleted = (deletedServiceId) => {
        setServices(prevServices => prevServices.filter(service => service.id !== deletedServiceId));
    };

    if (loading) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center text-gray-500">
                Carregando serviços...
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 rounded-2xl shadow-lg p-8 border border-red-200 text-center text-red-700">
                {error}
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
                <div className="p-2 bg-purple-100 rounded-xl mr-4">
                    <HiOutlineClipboardList className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Serviços Associados</h2>
            </div>

            {services.length > 0 ? (
                <div className="space-y-4">
                    {services.map(service => (
                        <ServiceCard 
                            key={service.id} 
                            service={service} 
                            onServiceDeleted={handleServiceDeleted} 
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-8">
                    <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <FiUsers className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-600 italic mb-4">
                        Não há nenhum serviço aqui
                    </p>
                </div>
            )}

            <div className="mt-6 flex justify-end">
                <AddService 
                    id_project={id_project} 
                    onServiceAdded={handleServiceAdded} 
                />
            </div>
        </div>
    );
}