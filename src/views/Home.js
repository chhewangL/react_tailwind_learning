import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import PictureCard from './PictureCard'
import { useAxiosGet } from '../Hooks/HTTPRequest'

function Home() {
    const URL ='https://5f30fb2c373bc7001635f1bf.mockapi.io/picture'
    
    const picture = useAxiosGet(URL)
    if(picture.loading){
    return(
        <div>
            <Loading/>
        </div>
    )
    }
    else if(picture.error){
        return(
            <div>.....sorry, something went wrong. please try again later.</div>
        )
    }
    else if(picture.data){
        return (
            picture.data.map((pic,key)=>
            <div style={{position:'relative',left:'30%'}} key={key}>
            <PictureCard pic={pic}/>
            </div>
        )
        )
    } else{
        return (
            <div>
                
            </div>
        )
    }
}

export default Home
