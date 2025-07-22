import { FiArrowLeft } from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi';

export default function ErrorScreen({error}){
    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50 to-pink-50">
            <NavBar />
            <div className="flex flex-col justify-center items-center min-h-[80vh] px-4">
                <div className="text-center max-w-md">
                    <div className="p-6 bg-red-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        <HiOutlineLightBulb className="w-12 h-12 text-red-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Ops! Algo deu errado</h2>
                    <p className="text-red-600 mb-8">{error}</p>
                    <Link
                        to="/myprojects"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-2xl font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300"
                    >
                        <FiArrowLeft className="w-5 h-5 mr-2" />
                        Voltar aos Projetos
                    </Link>
                </div>
            </div>
        </div>
    )
}