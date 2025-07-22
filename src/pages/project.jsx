import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import NavBar from '../components/layout/NavBar';
import api from '../services/api';
import ProjectDetails from '../components/Project/ProjectDetails';
import Header from '../components/Project/Header';
import Services from '../components/Project/Services';
import DescProject from '../components/Project/DescProject';
import ErrorScreen from '../components/Project/ErrorScreen';
import LoadingScreen from '../components/Project/LoadingScreen';
import { 
    FiArrowLeft,
    FiFileText,
    FiUsers,
    FiTarget
} from 'react-icons/fi';
import { 
    HiOutlineCollection,
    HiOutlineLightBulb,
    HiOutlineClipboardList
} from 'react-icons/hi';

export default function Project() {
    const navigate = useNavigate();
    
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    

    useEffect(() => {
        async function loadProject() {
            setLoading(true);
            setError(null);
            try {
                const response = await api.get(`/projects/${id}`);
                setProject(response.data);
            } catch (err) {
                setError("Não foi possível carregar os detalhes do projeto. Tente novamente.");
                setProject(null);
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            loadProject();
        } else {
            setLoading(false);
            setError("ID do projeto não fornecido na URL.");
        }
    }, [id]);

    const handleDeleteProject = async () => {
        try {
            await api.delete(`/projects/${id}`);
            navigate('/myprojects'); 
        } catch (err) {
            console.error("Erro ao excluir projeto:", err);
        }
    };

    if (loading) {
        return (
            <LoadingScreen />
        )
    }

    if (error) {
        return (
            <ErrorScreen error={error} />
        )
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
                <NavBar />
                <div className="flex flex-col justify-center items-center min-h-[80vh] px-4">
                    <div className="text-center max-w-md">
                        <div className="p-6 bg-gray-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                            <HiOutlineCollection className="w-12 h-12 text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Projeto não encontrado</h2>
                        <p className="text-gray-600 mb-8">O projeto que você está procurando não existe ou foi removido.</p>
                        <Link
                            to="/myprojects"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                        >
                            <FiArrowLeft className="w-5 h-5 mr-2" />
                            Voltar aos Projetos
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            <NavBar />
            
            <Header 
                handleDeleteProject={handleDeleteProject}
                project={project} 
            />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <div className="lg:col-span-2 space-y-6">
                        <DescProject project={project} />
                        <Services id_project={project.id} />
                    </div>

                    <div className="space-y-6">
                        <ProjectDetails project={project} />
                    </div>
                </div>
            </div>
        </div>
    );
}