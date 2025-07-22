import CardProject from "./CardProject"
import { FiFolderPlus } from 'react-icons/fi'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { Link } from 'react-router'

export default function ProjectsGrid({ projects, isLoading }) {
    return(
        <>
        {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4"></div>
                <p className="text-gray-600">Carregando projetos...</p>
            </div>
        ) : projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <CardProject 
                        key={project.id}
                        id={project.id}
                        name={project.name_project}
                        description={project.description}
                        start={project.date_start}
                        end={project.date_end}
                        budget={project.budget} 
                        create={project.createdAt}
                    />
                ))}
            </div>
        ) : (
            <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                    <div className="p-6 bg-gray-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        <HiOutlineLightBulb className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Nenhum projeto encontrado
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Que tal começar criando seu primeiro projeto? 
                    </p>
                    <Link
                        to="/new-project"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                        <FiFolderPlus className="w-5 h-5 mr-2" />
                        Criar Primeiro Projeto
                    </Link>
                </div>
            </div>
        )}
    </>
    )
}