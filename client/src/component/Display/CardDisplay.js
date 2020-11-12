import React, {useState, useEffect} from 'react'
import { Card } from '../Card/Card'
import {api} from '../../Utils/api'


export const CardDisplay = ({name}) => {

    const [data, setData] = useState()

    useEffect(() => {
        async function fetchData(name){
            const myData = await getTest(name)
            setData(myData.data)
        }
        fetchData(name)
        
    }, [])
    const getTest = async (name) =>{
      try{
        const res = await api.get(`/${name}`)
        return res
      }catch(err){
        console.log(`${err}`)
      }
    }

    console.log(data)

    return (
        <div className="container-fluid">
            <div className="row">
                {
                    data && data.map(item => (
                        
                        <Card
                            key={item.id}
                            map={item.id}
                            title={item.properties.place}
                            starttime={item.properties.time}
                            updatedtime={item.properties.updated} 
                            mag={item.properties.mag} 
                            felt={item.properties.felt}
                            tyevent={item.properties.type} 
                        />
                    ))
                }
            </div>
        </div>
    )
}
