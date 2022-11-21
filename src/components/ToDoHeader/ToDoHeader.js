import React, { useContext } from 'react'
import { ItemContext } from '../../context/ItemContext';

function ToDoHeader({}) {
    const context = useContext(ItemContext);
    const addNew = (title) =>{
        context.setListe([...context.liste, {id: Date.now(), baslik:title, tamamlandi: false}]);
        context.setYeniBaslik(' ');
    }
  return (
    <>
    <h1 className='header_title'>Yapılacaklar Listesi</h1>
    <div className='ekleme_formu'>
    <input onChange={(e) => context.setYeniBaslik(e.target.value)} type="text" value={context.yeniBaslik} placeholder="Yeni başlık ekle.." />
        <button onClick = {(e)=>{addNew(context.yeniBaslik)}}>Ekle</button>
    </div>
    </>
  )
}

export default ToDoHeader