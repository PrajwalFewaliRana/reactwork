import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const SideBar = () => {
  const [users,setUsers]=useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then ((res) =>{
      setUsers(res.data)
    })
  }, [])
  
  return (
    <div className='h-[50vh] sticky top-0'>
    <h3 className="title font-bold text-xl mb-2" >Most Popular Users</h3>
    <ul>
      {users.map((user)=>(

        <li key={user.id}>
          <Link to={`/contact/${user.id}`}>{user.name}</Link>
        
        </li>
        ))}
      
    </ul>
  </div>
  )
}

export default SideBar
