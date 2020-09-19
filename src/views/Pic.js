import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loading'
import { useAxiosGet } from '../Hooks/HTTPRequest'

function Pic() {

    const {id}=useParams()
    const url=`https://5f30fb2c373bc7001635f1bf.mockapi.io/picture/${id}`
    const picture= useAxiosGet(url)
    if(picture.loading){
        return(
            <Loading />
        )
    }
    else if(picture.error){
        return(
            <div>.....sorry, something went wrong. please try again later.</div>
        )
    }
if(picture.data)
    return (
        
            <div style={{position:'relative',left:'30%'}}>
            <div className="mb-3 "  >
            
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={picture.data.avatar} alt={picture.data.name}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{picture.data.name}</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    
  </div>
  <div className="px-6 py-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
  </div>
  </div>
  </div>
        </div>
       
    ) 
    else{
        return(
            <div></div>
        )
        
    }
}

export default Pic
