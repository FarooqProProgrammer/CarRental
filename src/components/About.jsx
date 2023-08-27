import React from 'react'
import Car from "../assets/car-1.jpg"

export default function About() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">
                        About Our Car Rental App
                    </h1>
                    <p className="leading-relaxed mt-4">
                        Welcome to our premier car rental platform, where convenience meets adventure. We're dedicated to providing you with top-notch car rental services that suit your travel needs. Whether you're planning a business trip, a family vacation, or a spontaneous road trip, our app offers a diverse range of vehicles to choose from.
                        <br />
                        Our user-friendly app allows you to effortlessly browse through our extensive fleet of cars, select your preferred vehicle, and make reservations with just a few taps. With a focus on quality, safety, and customer satisfaction, we ensure that every car is well-maintained and thoroughly inspected before it reaches your hands.
                        <br />
                        Experience the freedom of the open road with our reliable and modern vehicles, accompanied by transparent pricing and flexible rental options. Our dedicated support team is available 24/7 to assist you at any stage of your journey, making your car rental experience smooth and enjoyable.
                        <br />
                        Thank you for choosing our car rental app. We look forward to being a part of your memorable travel experiences.
                    </p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <img src={Car} className='w-full h-full' />
                </div>
            </div>
        </section>

    )
}
