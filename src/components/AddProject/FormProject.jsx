import { FiFolder, FiFileText, FiCalendar, FiDollarSign, FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import api from '../../services/api';
import { Navigate, useNavigate } from 'react-router';

export default function FormProject(){
    const navigate = useNavigate();
    const [project, setProject] = useState({
        name_project: '',
        description: '',
        date_start: '',
        date_end: '',
        budget: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await api.post('/projects', project)
        console.log('Project added successfully:', response.data)
        alert('Project added successfully!')
        setProject({
            name_project: '',
            description: '',
            date_start: '',
            date_end: '',
            budget: ''
        })
        navigate('/myprojects')
        } catch (error) {
        console.error('Error adding project:', error)
        alert('Error adding project. Please check the console for details.')
        }
    };
    return(
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
                    <FiFolder className="text-blue-600" />
                    Add New Project
                </h1>
                
                <div className="space-y-6">
                    <div className="space-y-2">
                    <label htmlFor="name_project" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                        <FiFolder className="text-gray-500" />
                        Project Name
                    </label>
                    <input
                        type="text"
                        id="name_project"
                        name="name_project"
                        value={project.name_project}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                        placeholder="Enter project name"
                    />
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                        <FiFileText className="text-gray-500" />
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={project.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900 resize-vertical"
                        placeholder="Enter project description"
                    />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="date_start" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                        <FiCalendar className="text-gray-500" />
                        Start Date
                        </label>
                        <input
                        type="date"
                        id="date_start"
                        name="date_start"
                        value={project.date_start}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="date_end" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                        <FiCalendar className="text-gray-500" />
                        End Date
                        </label>
                        <input
                        type="date"
                        id="date_end"
                        name="date_end"
                        value={project.date_end}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                        />
                    </div>
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                        <FiDollarSign className="text-gray-500" />
                        Budget
                    </label>
                    <input
                        type="number"
                        id="budget"
                        name="budget"
                        value={project.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                        placeholder="Enter budget amount"
                        min="0"
                        step="0.01"
                    />
                    </div>

                    <button 
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg flex items-center justify-center gap-2"
                    >
                    <FiPlus className="w-5 h-5" />
                    Add Project
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}