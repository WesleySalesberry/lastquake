import React, {useState, useEffect} from 'react'
import { Card } from '../Card/Card'
import {api} from '../../Utils/api'

import ReactPaginate from 'react-paginate';

import './CardDisplay.css'


export const CardDisplay = ({name}) => {
    const [data, setData] = useState([])

    const [offset, setOffset] = useState(0);
    const [perPage] = useState(24);
    const [pageCount, setPageCount] = useState(0)

  
    useEffect(() => {
        async function fetchData(name){
            // const myData = await getData(name)
            // setData(myData.data)
            getData(name)
        }
        fetchData(name)
        
    }, [offset])

     const getData = async (name) =>{
      try{
        const res = await api.get(`/${name}`)
        const data = res.data;
        const slice = data.slice(offset, offset + perPage)

        const postData = slice.map(item => (
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

        setData(postData)
        setPageCount(Math.ceil(data.length / perPage))

      }catch(err){
        console.log(`${err}`)
      }
    }
    const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
};

    // const getData = async (name) =>{
    //   try{
    //     const res = await api.get(`/${name}`)
    //     return res
    //   }catch(err){
    //     console.log(`${err}`)
    //   }
    // }


    console.log(data)

    return (
        <div className="container-fluid">
            <div>
                <h1>Quakes over the past {name}</h1>
            </div>

            <div className="row">

                {data}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>

                {/* {
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
                } */}
            </div>
      </div>
    )
}

 
