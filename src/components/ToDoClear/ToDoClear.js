import React, { useContext } from 'react'
import { ItemContext } from '../../context/ItemContext'

function ToDoClear() {
  const context = useContext(ItemContext);
  const clearCompleted = ()=>context.setListe(context.liste.filter(item=>!item.tamamlandi));
  return (
    <button onClick={() => { clearCompleted() }} className="temizle">
            Tamamlananları Temizle
        </button>
  )
}

export default ToDoClear