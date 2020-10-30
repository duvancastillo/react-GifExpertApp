import React, {useState} from  'react';
import { AddCategory } from './AddCategory'
import {GifGrid} from './GifGrid';



export const GifExpertApp = () =>{

    
    const [categories, setCategories] = useState(['Dragon Ball'])

    // const handleAdd = () => {
    //     //C([...categories, 'snk']);
    //     setcategories(cast => [ ...cast, 'snk']);
    // }

    return(
        <>
            
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories = {setCategories}/>
            
            <hr />


            <ol>
                {
                    categories.map( category =>(
                        < GifGrid 
                        key = { category}
                        category = {category} />
                    ))
                
                }
            </ol>
            
        </>
    )
}

