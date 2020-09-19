import React,{useState, useEffect} from 'react'
import axios from 'axios'


export function useAxiosGet(URL){

    const [picture, setPicture]=useState({
        loading: false,
        data: null,
        error: false,
    })

    useEffect(
        ()=>{
            setPicture({
                loading:true,
                data:null,
                error: false,
            })
            axios.get(URL)
    .then(res =>{
        setPicture({
            loading: false,
            data: res.data,
            error: false
        })
    })
    .catch(err=>{
        setPicture({
            loading: false,
            data: null,
            error: true,
        })
    })
        },[URL])

        return picture
}