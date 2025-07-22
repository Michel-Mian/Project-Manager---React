import { Link } from 'react-router'

export default function CallToAction() {
    return(
        <section className="my-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Comece a Gerenciar Seus Projetos Agora!
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Acesse a seção "Meus Projetos" para visualizar, criar, editar e excluir seus projetos, além de gerenciar os serviços de cada um. Sua jornada para uma gestão de projetos descomplicada começa aqui.
          </p>
          <Link
            to="/myprojects"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Ir para Meus Projetos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </section>
    )
}