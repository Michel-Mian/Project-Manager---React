import { HiOutlineCollection } from 'react-icons/hi'

export default function Title(){
    return(
        <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <HiOutlineCollection className="w-8 h-8 text-white" />
                </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Meus Projetos
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Gerencie e acompanhe todos os seus projetos em um só lugar
            </p>
        </div>
    )
}