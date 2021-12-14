import React from 'react'

 function ToDoItem({item}) {

// const {item}= props

const completeDone = (event) =>{
    event.preventDefault();
    item.isCompleted = !item.isCompleted
    //console.log(item.isCompleted)
    item.isCompleted ?      event.target.className = "list-group-item text-decoration-line-through bg-success text-light"
:      event.target.className = "list-group-item"

    //console.log(event.target.className)
   //  event.target.className = "list-group-item text-decoration-line-through bg-success text-light"

}

    return (
        <li className={` list-group-item 
         ${item.isCompleted && 
            'text-decoration-line-through bg-success text-light'}` } key={item.id}   
            onClick={completeDone}
            > 
            {item.title} 
        </li>
    )
}

export default ToDoItem

