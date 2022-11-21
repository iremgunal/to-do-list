import React, { useContext } from 'react'
import { ItemContext } from '../../context/ItemContext'
import { VscCheck ,VscChromeClose } from "react-icons/vsc";



function ToDoItem({item}) {
    const context = useContext(ItemContext);
    const clearItem = (id) => context.setListe(context.liste.filter(item=>item.id !=id));
    const markCompleted =(id) => context.setListe(context.liste.map(i=>i.id == id ? {...i , tamamlandi: !i.tamamlandi}: i));
  return (
    <div className='toDoItem'>
        <div key={item.id}
            className={item.tamamlandi ? 'yapildi': ''}
            style={{textAlign: 'left'}}
        > {item.baslik}
        </div>
        <div>
           
            <button className="btn btn-completed" onClick={() => {
                    markCompleted(item.id)
                }}>{item.tamamlandi ? <VscCheck color='white' /> : <VscCheck color='white' />}</button>
                <button className="btn btn-delete"><VscChromeClose color='white' onClick={
                    () => {
                        clearItem(item.id)
                    }
                } /></button>
        </div>
    </div>
  )
}

export default ToDoItem