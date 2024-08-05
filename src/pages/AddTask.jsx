import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FriendList } from '../database/FriendList'
import { AddFriendForm } from '../database/AddFriend'

function AddTask() {
  return (
    <div className='flex flex-col  min-h-screen'>
      <Header />
      <div className='flex-1 bg-gray-800'>
        <FriendList />
        <AddFriendForm />
      </div>
      <Footer />
    </div>
  )
}

export default AddTask