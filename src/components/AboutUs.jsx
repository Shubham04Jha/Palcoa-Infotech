import React from 'react';
import network from '../../assets/NONETWORK2.png';
import secure from '../../assets/SECURE.png';
import commitment from '../../assets/COMMITMENT.png';
function AboutUs() {

    const sections = [
        {
            id: 1,
            title: "Data Submission & Network Resilience",
            text: "Our system ensures that data submissions are sent to our server immediately. In the case of network disruptions, our technology securely stores the data locally on your device. Once network connectivity is restored, the data is automatically synchronized with our server. This guarantees that your data is never lost, maintaining continuity even in the face of temporary network challenges.",
            img: network, 
        },
        {
            id: 2,
            title: "Data Encryption & Privacy",
            text: "At OffSync, we prioritize your data privacy. When data is stored locally during network outages, it is fully encrypted to ensure security. As soon as network connectivity is restored, the encrypted data is sent to our server, where decryption takes place. This ensures that your data remains protected at all times, both in transit and at rest.",
            img: secure,
        },
        {
            id: 3,
            title: "Our Commitment",
            text: "At OffSync, we are committed to providing innovative and dependable data management solutions. We focus on ensuring that your data integrity is never compromised, and your industrial operations continue to run smoothly. Thank you for trusting us with your data management needs.",
            img: commitment,
        },
    ];


    return (
        <div className="bg-gray-800 text-gray-200 flex-1 font-sans">

            <div className=" text-white py-6 pb-3 px-6 text-center bg-gray-800 mx-5 rounded-b-xl">
                <h1 className="text-5xl mb-4 text-pink-400">About Us</h1>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-200 ">
                    At <b className="text-2xl text-pink-400">OffSync</b>, we specialize in delivering advanced data management solutions tailored to the needs of industrial operations. Our platform is engineered to provide unparalleled reliability and efficiency, ensuring that your critical data is handled seamlessly, even in challenging network conditions.
                </p>
            </div>

            <div className="bg-gray-800 text-gray-200 font-sans">
            {sections.map((section, index) => (
                <div
                    key={section.id}
                    className={`flex flex-col-reverse md:flex-row ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center py-12 px-6 bg-gray-800 mx-5 my-4 rounded-lg`}
                >
                    {/* Text Section */}
                    <div className="md:w-1/2 text-center md:text-left px-6">
                        <h2 className="text-4xl mb-4 text-pink-400">{section.title}</h2>
                        <p className="text-lg text-blue-200">{section.text}</p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={section.img}
                            alt="Description"
                            className="w-64 h-64 object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
            ))}
        </div>

            <div className="py-12">
                <h2 className="text-4xl text-center mb-12 text-blue-200">Our Team</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div className="bg-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* <img src="team1.jpg" alt="John Doe" className="rounded-full w-full h-auto mb-4" /> */}

                            <div className="text-center">
                                <h2 className="text-2xl mb-2">Chinmay Chaudhari</h2>
                                <p className="text-lg text-blue-100 mb-2">CEO & Founder</p>
                                <p className="text-gray-300 mb-4">Chinmay is the visionary behind our platform, ensuring we always move forward with innovation and passion.</p>
                                <p className="text-blue-400 mb-4">2022.chinmay.chaudhari@ves.ac.in</p>
                                <button className="bg-purple-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full">Contact</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div className="bg-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* <img src="team2.jpg" alt="Jane Smith" className="rounded-full w-full h-auto mb-4" /> */}
                            <div className="text-center">
                                <h2 className="text-2xl mb-2">Sairam Konar</h2>
                                <p className="text-lg text-blue-100 mb-2">CTO</p>
                                <p className="text-gray-300 mb-4">Sairam leads our technology team, constantly pushing the boundaries of what's possible.</p>
                                <p className="text-blue-400 mb-4">2022.sairam.konar@ves.ac.in</p>
                                <button className="bg-purple-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full">Contact</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div className="bg-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* <img src="team3.jpg" alt="Paul Brown" className="rounded-full w-full h-auto mb-4" /> */}
                            <div className="text-center">
                                <h2 className="text-2xl mb-2">Shubham Jha</h2>
                                <p className="text-lg text-blue-100 mb-2">COO</p>
                                <p className="text-gray-300 mb-4">shubham ensures our operations run smoothly and efficiently, keeping our team focused and effective.</p>
                                <p className="text-blue-400 mb-4">2022.shubham.jha@ves.ac.in</p>
                                <button className="bg-purple-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full">Contact</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div className="bg-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* <img src="team3.jpg" alt="Paul Brown" className="rounded-full w-full h-auto mb-4" /> */}
                            <div className="text-center">
                                <h2 className="text-2xl mb-2">Ayush Maurya</h2>
                                <p className="text-lg text-blue-100 mb-2">CFO</p>
                                <p className="text-gray-300 mb-4">Ayush ensures that our work complete on time and manages overall financials of the company.</p>
                                <p className="text-blue-400 mb-4">2022.ayush.maurya@ves.ac.in</p>
                                <button className="bg-purple-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs