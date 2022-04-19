

import './Button.css'


export const Button = (props) =>{
    let title = props.title
    let setCount = props.setCount

    const countHndler =() =>{
        if (title === '+') {
            setCount((prev)=> prev + 1)
        }else{
            setCount((prev)=> prev - 1)
        }
    }

   
    return(
        <button className='btn' onClick={countHndler} >{title}</button>
    )
}
