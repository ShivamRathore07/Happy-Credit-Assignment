import React, { useEffect, useState } from "react"
import Modal from "./Modal";

const Posts=()=>{
const [data,setData]=useState([])
const [alrtData,setAlrtData]=useState([])
const [openModal, setOpenModal] = useState(false);

useEffect(()=>{
  FetchData()
},[])

// View post function

 async function FetchData(){
   try {
     let request = await fetch(`https://jsonplaceholder.typicode.com/posts`)
     let result = await request.json()
     console.log(result) 
     setData(result)
   } catch (error) {
     console.log(error)
   }

 }

//  Search function 

 const handleChnage=(e)=>{
  if(e.length>2){
    const value = data.filter((elem)=>{
        return elem.title.includes(e)
    }) 
    setData(value)
  }

 }
 
//  onClick View user open function

 const handleClick=async (id)=>{
    try {
        let request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        let result = await request.json()
        setAlrtData(result)
        setOpenModal(true)
      } catch (error) {
        console.log(error)
      }
 }
console.log(alrtData)
 
  return (
    <>
    <div className="input_box">
    <h1>Post App</h1>
    <input type="text" placeholder="Search here" onChange={(e)=>handleChnage(e.target.value)}/>
    </div>
    <div className="Container">
     {data.map((elem)=>(
     <div key={elem.id} className="card">
       <h5 className="card-title">Title : {elem.title}</h5>
       <p className="card-text">Body : {elem.body}</p>
       <button onClick={()=>handleClick(elem.userId)} className="btn">View User</button>            
     </div>   
     ))}

      <Modal open={openModal} onClose={() => setOpenModal(false)}  alrtData={alrtData} /> 
     </div>
      
    </>
  )
}
export default Posts;