import React, { useContext } from 'react'
import { ItemContext } from '../../context/ItemContext'
import ToDoItem from '../ToDoItem/ToDoItem'

function ToDoList({}) {
    const context = useContext(ItemContext);
  return (
    <div className="liste">
        {context.liste.map(item => (<ToDoItem item={item} />))}
        
    </div>
    
  )
}

export default ToDoList