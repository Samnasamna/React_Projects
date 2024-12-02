import React from "react"
import ReactMarkdown from 'react-markdown'


export default function ShowRecipe(props){
    return(
        <section className="aiRecipe">
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
        
    )
}