import NavBar from "../layout/NavBar"

export default function LoadingScreen(){
    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            <NavBar />
            <div className="flex flex-col justify-center items-center min-h-[80vh]">
                <div className="relative">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
                    <div className="absolute inset-0 rounded-full h-16 w-16 border-4 border-purple-200 animate-ping"></div>
                </div>
                <p className="text-xl text-gray-700 mt-6 font-medium">Carregando detalhes do projeto...</p>
                <div className="flex space-x-2 mt-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
            </div>
        </div>
    )
}