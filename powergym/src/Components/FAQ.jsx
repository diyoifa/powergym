import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'


const FAQ = ({question, answer}) => {
const [isAnswerShowing, setIsAnserShowing] = useState(false);


  return (
    <article className="faq">
        <div>
            <h4>{question}</h4>                                           {/*Change to the oposite value*/}
            <button className="faq__icon" onClick={()=> setIsAnserShowing(!isAnswerShowing) }>
               
               {       //
                    isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/> 
               }
                
            </button>
        </div>
             {/* if true  and true then render p if no not */}   
       {isAnswerShowing && <p>{answer}</p>}
        {/*(true/false)           true*/}    
    </article>

  )
}

export default FAQ
