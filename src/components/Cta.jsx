import React from 'react'

export default function Cta() {
    return (
        <section className="bg-[#f3f4f6] py-20">
            <div className="container mx-auto flex  items-center justify-between text-center">
                <div className='flex flex-col justify-center items-start'>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Ready to Hit the Road?
                    </h2>
                    <p className="text-lg md:text-xl mb-6">
                        Explore our diverse fleet of vehicles for your next adventure.
                    </p>
                </div>

                <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md text-lg md:text-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Get Started
                </a>
            </div>
        </section>


    )
}
