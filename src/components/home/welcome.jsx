import Tags from "./tags"

export default function Welcome(){
    return(
        <section className="text-center my-12 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-6 animate-fade-in-down">
            Bem-vindo ao Project Manager
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto animate-fade-in">
            Sua plataforma definitiva para organizar, monitorar e gerenciar todos os seus projetos e seus serviços associados de forma eficiente. Mantenha tudo sob controle, desde o planejamento inicial até a conclusão. Simplifique sua gestão e foque no que realmente importa!
          </p>
          <div className="flex justify-center space-x-4 mb-8 animate-fade-in-up">
            <Tags name="Organização" color="blue-100" />
            <Tags name="Eficiência" color="green-100" />
            <Tags name="Simplicidade" color="purple-100" />
            
          </div>
        </section>
    )
}