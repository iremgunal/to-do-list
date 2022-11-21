import React, { useState } from 'react'
import { ItemContext } from '../../context/ItemContext'
import ToDoClear from '../ToDoClear/ToDoClear'
import ToDoHeader from '../ToDoHeader/ToDoHeader'
import ToDoList from '../ToDoList/ToDoList'

function ToDoContainer({tasks}) {
  const [liste , setListe] = useState(tasks);
  const [yeniBaslik, setYeniBaslik] = useState(' ');
  return (
    <ItemContext.Provider value={{liste , setListe, yeniBaslik , setYeniBaslik}}>
    <ToDoHeader />
    <ToDoClear />
    <ToDoList />
    </ItemContext.Provider>
  )
}

export default ToDoContainer