import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TransactionList from '../components/TransactionList'

function Dashboard() {
  return (
    <div className='flex flex-col  min-h-screen'>
      <Header />
      <div className='flex-1 bg-gray-800'>
        <TransactionList />
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard