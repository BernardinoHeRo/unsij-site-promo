import React from 'react';
import dataCareers from '../DataCareers';

import informatica from "../../../assets/unsij/carreras/informatica.jpg";


// Encuentra la carrera con ID 3 en dataCareers
const carrera = dataCareers.find(carrera => carrera.id === 3);

const G2 = () => {

    // Extrae el contenido de mission, vision y objective de la carrera encontrada
    const { mission, vision, objective } = carrera.content;

    return (
        <div className='bg-gray-300'>
            <section>
                <div className='flex flex-wrap lg:items-center p-12'>
                    <div className="lg:w-1/2">
                        <img src={informatica} alt="" />
                    </div>

                    <div className='lg:w-1/2'>
                        <h2 className='lg:ml-12 lg:text-3xl font-bold mt-5 mb-5'>Misión</h2>
                        <p className='lg:ml-12 mb-5 lg:text-xl bg-gray-100 rounded-xl px-2 py-1 text-justify shadow-md'>
                            {mission}
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className='flex flex-wrap lg:items-center p-12 '>
                    <div className='lg:w-1/2'>
                        <h2 className='lg:ml-12 lg:text-3xl font-bold mt-5 mb-5'>Visión</h2>
                        <p className='lg:ml-12 mb-5 lg:text-xl bg-gray-100 rounded-xl px-2 py-1 text-justify shadow-md'>
                            {vision}
                        </p>
                    </div>

                    <div className="lg:w-1/2 bg-gray-50 ">
                        <img src={informatica} />
                    </div>
                </div>
            </section>

            <section>
                <div className='flex flex-wrap lg:items-center p-12'>
                <div className="lg:w-1/2 bg-gray-50">
                        <img src={informatica} alt="" />
                    </div>

                    <div className='lg:w-1/2'>
                        <h2 className='lg:ml-12 lg:text-3xl font-bold mt-5 mb-5'>Objetivo</h2>
                        <p className='lg:ml-12 mb-5 lg:text-xl bg-gray-100 rounded-xl px-2 py-1 text-justify shadow-md'>
                            {objective}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default G2;