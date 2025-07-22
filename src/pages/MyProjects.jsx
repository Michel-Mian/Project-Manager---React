import NavBar from '../components/layout/NavBar'
import { useState, useEffect } from 'react'
import ProjectsGrid from '../components/myProjects/ProjectsGrid'
import ActionButtons from '../components/myProjects/ActionButtons'
import Stats from '../components/myProjects/Stats'
import api from '../services/api'
import Title from '../components/myProjects/Title'
import { FiSearch } from 'react-icons/fi'

export default function MyProjects() {
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function loadProjects(){
            try { 
                const response = await api.get('/projects')
                setProjects(response.data)
            } catch (error) {
                console.error("Erro ao carregar projetos:", error)
            } finally {
                setIsLoading(false)
            }
        }
        loadProjects()
    }, []);

    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            <NavBar />
            
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
                <div className="relative max-w-7xl mx-auto px-4 py-16">
                    <Title />

                    <Stats 
                        projects={projects}
                    />


                    <ActionButtons />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Pesquisar projetos..."
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                    </div>
                </div>

                <ProjectsGrid 
                    projects={projects}
                    isLoading={isLoading}
                />
            </div>
        </div>
        
    )
}