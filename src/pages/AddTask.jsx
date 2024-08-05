import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../components/Form'

function AddTask() {
    return (
        <div className='flex flex-col  min-h-screen text-white'>
            <Header />
            <div className='flex-1 bg-gray-800'>
                <Form />
            </div>
            <Footer />
        </div>
    )
}

export default AddTask