import { React, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Plan = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const planEstudios = [
        {
            id: 1,
            question: "Curso Propedeutico",
            answer: [
                "Álgebra (5 hrs.)",
                "Física Básica (5 hrs.)",
                "Diseño Estructurado de Algoritmos (5 hrs.)",
                "Introducción a la Informática y Sistemas Inteligentes (5 hrs.)",
                "Técnicas de Estudio (3 hrs.)"
            ]
        },
        {
            id: 2,
            question: "Primer Semestre",
            answer: [
                "Programación Estructurada",
                "Lógica Matemática",
                "Cálculo I",
                "Física I",
                "Metodología de la Investigación",
                "Administración",
                "Historia del Pensamiento Filosófico"
            ]
        },
        {
            id: 3,
            question: "Segundo Semestre",
            answer: [
                "Estructura de Datos",
                "Fundamentos de Electrónica",
                "Interacción Humano Computadora",
                "Matemáticas Discretas",
                "Cálculo II",
                "Álgebra Lineal",
                "Teoría General de Sistemas"
            ]
        },
        {
            id: 4,
            question: "Tercer Semestre",
            answer: [
                "Paradigmas de Programación I",
                "Electrónica Digital",
                "Base de Datos I",
                "Teoría de Autómatas",
                "Ecuaciones Diferenciales",
                "Probabilidad y Estadística",
                "Contabilidad y Finanzas"
            ]
        },
        {
            id: 5,
            question: "Cuarto Semestre",
            answer: [
                "Paradigmas de Programación II",
                "Programación de Sistemas",
                "Diseño Web",
                "Arquitectura de Computadoras",
                "Base de Datos II",
                "Métodos Numéricos",
                "Gestión y Desarrollo Social"
            ]
        },
        {
            id: 6,
            question: "Quinto Semestre",
            answer: [
                "Programación de Dispositivos Móviles",
                "Fundamentos de Sistemas Operativos",
                "Tecnologías Web I",
                "Redes I",
                "Ingeniería de Software I",
                "Fundamentos de IA",
                "Emprendimiento e Innovación"
            ]
        },
        {
            id: 7,
            question: "Sexto Semestre",
            answer: [
                "Bases de Datos Avanzadas",
                "Sistemas Operativos de Red",
                "Tecnologías Web II",
                "Redes II",
                "Ingeniería de Software II",
                "Ciencia de Datos",
                "Liderazgo y Desarrollo Personal"
            ]
        },
        {
            id: 8,
            question: "Septimo Semestre",
            answer: [
                "Calidad de Software",
                "Sistemas Distribuidos",
                "Redes Neuronales",
                "Algoritmos de Optimización",
                "Investigación de Operaciones",
                "Derecho y Legislación en Informática",
                "Liderazgo y Equipos de Alto Desempeño"
            ]
        },
        {
            id: 9,
            question: "Octavo Semestre",
            answer: [
                "Proyectos de Tecnologías de la Información",
                "Ciberseguridad",
                "Modelos predictivos",
                "Seminario de tesis",
                "Optativa I",
                "Optativa II"
            ]
        },
        {
            id: 10,
            question: "Noveno Semestre",
            answer: [
                "Estancia profesional",
                "Seminario de Titulación"
            ]
        },
        {
            id: 11,
            question: "Optativas",
            answer: [
                "Arquitecturas de Software",
                "Administración de Proyectos de Software con Enfoque Ágil",
                "Procesamiento del Lenguaje Natural",
                "Programación de Robots Móviles",
                "Reconocimiento de Patrones",
                "Visión por Computadora y Realidad Aumentada",
                "Aplicaciones de Inteligencia Artificial en Sistemas Embebidos"
            ]
        },
    ];

    return (
        <div className='w-screen h-screen bg-black flex justify-center items-center'>
        <div className="w-[89%] m-auto max-w-[1400px] bg-gray-300 p-8 rounded-lg shadow-md">
            <h2 className='text-2xl mb-6 font-semibold'>Plan de estudios</h2>
            {planEstudios.map((q) => (
                <div key={q.id} className='mb-4 last:mb-0'>
                    <button
                        className='w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center'
                        onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}
                    >
                        {q.question}
                        {activeQuestion === q.id ?
                            <FaMinusCircle /> :
                            <FaPlusCircle />
                        }
                    </button>
                    
                    <AnimatePresence>
                        {activeQuestion === q.id && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    height: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    height: "auto"
                                }}
                                exit={{
                                    opacity: 0,
                                    height: 0
                                }}
                                className='mt-2 text-gray-600 ml-4'
                            >
                                <ul>
                                    {q.answer.map((curso, index) => (
                                        <li key={index}>{curso}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Plan