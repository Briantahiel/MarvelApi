import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Marvel.css"
import logo from "../Assets/Marvel_Logo.svg.png"
import SearchMarvel from './Search'

function Marvel() {
    const [character, setCharacter] = useState([])
    const [find, setFind] = useState('')

 
    useEffect(()=>{
        
        if(find === ''){
            axios.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=").then(res =>{
            setCharacter(res.data.data.results)
      
        }).catch(error => console.log(error))
        } else{
            axios.get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${find}&ts=1&apikey=`).then(res =>{
                setCharacter(res.data.data.results)
   
            }).catch(error => console.log(error))
        }
        

    }, [find])

  return (
      <>
      <div className='container'>
     <div className='logo'>
         <img alt='' src={logo}/> 
      </div>
      <SearchMarvel 
      search={(e)=> setFind(e)}/>
    <div className='style'>
        {character.length === 0 ? (<p className='loading'>Cargando...</p>) :
        (character.map((e)=>(
            <div className='card-container'
            key={e.id}>
                <div className='card'>
                    <img style={{width:"300px", height: "400px"}} alt='' src={`${e.thumbnail.path}.${e.thumbnail.extension}`}/>
                    <div className='card-text'>
                       <p><span>Name:</span> {e.name}</p>
                    <p><span>Description:</span> {e.description === '' ? "Nothing to show" : e.description}</p> 
                    </div>
                </div>
            </div>   
        )))}
    </div>  
    </div>
    </>
  )
}

export default Marvel