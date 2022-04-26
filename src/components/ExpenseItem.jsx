import { ExpensesCheif } from "./ExpensesCheif"
import { ExpenseInput } from "./ExpenseInput"
import './ExpenseItem.css'

export const ExpenseItem = (props) =>{



    return (
        <div  className="container" >
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        <div className="container-wrap" >
                {props.expenses.map((elem)=>{
                    return(
                    <ExpensesCheif  key ={elem.id} title = {elem.title} img={elem.img} zag={elem.zag} side={elem.side}  />
                   
                    )

                })}
           

    
        </div>
        <ExpenseInput/>
        </div>
    )
}

