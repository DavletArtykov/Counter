import './ExpensesChief.css'

export const ExpensesCheif =(props) =>{
    return(
        <div className="container-card" >
            <div  >
            <h2>{props.title}</h2>
            </div>
            <img src = {props.img} alt={props.img}/>
            <h3>{props.zag}</h3>
            <a href= {props.side}>{props.side}</a>
          
        </div>
    )
}