import React from 'react'

function AboutUs() {
    return (
        <div class="bg-gray-800 text-gray-200 flex-1 font-sans">

            <div class="bg-gray-700 text-white py-12 px-6 text-center">
                <h1 class="text-5xl mb-4 text-pink-400">About Us</h1>
                <p class="text-lg mb-8 max-w-3xl mx-auto text-blue-200">
                    At <b>OffSync</b>, we specialize in delivering advanced data management solutions tailored to the needs of industrial operations. Our platform is engineered to provide unparalleled reliability and efficiency, ensuring that your critical data is handled seamlessly, even in challenging network conditions.
                </p>
                <p class="text-lg mb-8 max-w-3xl mx-auto text-blue-200">
                    Our system is designed to handle data submissions with precision. When data is submitted, it is immediately sent to our server. In the event of network disruptions, our technology ensures that your data is securely stored locally on your device. Once network connectivity is restored, the data is automatically synchronized with our server, safeguarding against any loss and maintaining operational continuity.
                </p>
                <p class="text-lg max-w-3xl mx-auto text-blue-200">
                    We understand the high stakes of industrial environments where downtime can impact productivity. Therefore, our commitment is to provide a solution that ensures your data integrity and operational efficiency are never compromised. Thank you for choosing <b>OffSync.</b> We are dedicated to supporting your industrial needs with dependable and innovative solutions.
                </p>
            </div>

            <div class="py-12">
                <h2 class="text-4xl text-center mb-12 text-blue-200">Our Team</h2>
                <div class="flex flex-wrap justify-center">
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div class="bg-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img src="team1.jpg" alt="John Doe" class="rounded-full w-full h-auto mb-4" />

                            <div class="text-center">
                                <h2 class="text-2xl mb-2">John Doe</h2>
                                <p class="text-lg text-blue-100 mb-2">CEO & Founder</p>
                                <p class="text-gray-300 mb-4">John is the visionary behind our platform, ensuring we always move forward with innovation and passion.</p>
                                <p class="text-blue-400 mb-4">johndoe@example.com</p>
                                <button class="bg-purple-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full">Contact</button>
                            </div>
                        </div>
                    </div>

                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div class="bg-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img src="team2.jpg" alt="Jane Smith" class="rounded-full w-full h-auto mb-4" />
                            <div class="text-center">
                                <h2 class="text-2xl mb-2">Jane Smith</h2>
                                <p class="text-lg text-blue-100 mb-2">CTO</p>
                                <p class="text-gray-300 mb-4">Jane leads our technology team, constantly pushing the boundaries of what's possible.</p>
                                <p class="text-blue-400 mb-4">janesmith@example.com</p>
                                <button class="bg-purple-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full">Contact</button>
                            </div>
                        </div>
                    </div>

                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div class="bg-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img src="team3.jpg" alt="Paul Brown" class="rounded-full w-full h-auto mb-4" />
                            <div class="text-center">
                                <h2 class="text-2xl mb-2">Paul Brown</h2>
                                <p class="text-lg text-blue-100 mb-2">COO</p>
                                <p class="text-gray-300 mb-4">Paul ensures our operations run smoothly and efficiently, keeping our team focused and effective.</p>
                                <p class="text-blue-400 mb-4">paulbrown@example.com</p>
                                <button class="bg-purple-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs