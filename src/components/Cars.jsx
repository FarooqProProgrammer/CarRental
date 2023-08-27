import React, { useState } from 'react'
import { Data } from '../Data'
import { Button, Modal } from 'antd';
import { useStep } from '../context/StepContext';
import Step1 from '../Forms/Step1';
import Step2 from '../Forms/Step2';


export default function Cars() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const { step } = useStep();

    const steps = [
        <Step1 />,
        <Step2 />
    ];



    return (
        <>
            <section className="text-gray-600 body-font" id='cars'>
                <div className="container px-5 py-24 mx-auto">
                    <div className='my-4 pb-10'>
                        <h4 className='text-5xl font-Bold text-center'>Your Favourite Cars</h4>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            Data.map((item) => {
                                return (
                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img
                                                alt="ecommerce"
                                                className="object-cover object-center w-full h-full block"
                                                src={item.img}
                                            />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                                {item.title}
                                            </h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">
                                                {item.desc}
                                            </h2>
                                            <p className="mt-1">{item.price}</p>
                                            <button onClick={showModal} className='bg-blue-500 px-5 py-2 my-1 text-white rounded-md '>Rent</button>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </section>

            <Modal title="User Information" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {steps[step - 1]}
            </Modal>
        </>
    )
}
