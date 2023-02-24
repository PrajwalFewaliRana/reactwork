import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const UserDetailsPage = () => {
    const router = useParams()
    const userId = router.contactId;
    const [singleUserData,setSingleUserData]=useState([])

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then ((res) =>{
        let allUsers=res.data;
        let singleUserDataFetched = allUsers.filter((item)=> item.id === parseInt(userId))
        setSingleUserData(singleUserDataFetched[0]);
        
      })
    }, [userId])
  return (
    <>
    <h1 className='text-5xl'>{singleUserData.name}({singleUserData.username})</h1>
    <h1 className='text-2xl'>{singleUserData.email}</h1>
    <h1 className='text-xl'>{singleUserData.phone}</h1>
    <h1 className='text-xl'>{singleUserData.website}</h1>
    </>
  )
}

export default UserDetailsPage