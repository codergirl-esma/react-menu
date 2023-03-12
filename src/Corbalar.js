import React from 'react'
import { menu } from './Icerikler';
import { sepeteEkle } from './Function';
import { sepetiGoster } from './Function';

const stil = {
  image : {
      boxShadow: '15px 5px 15px #888888',
      borderRadius: '20%',
      width: '100%',
     
  }
}


function Corbalar() {

  return (
      <>
      <h1 style={{color: "red"}}>Çorbalar</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '35px' }}>
                    {menu.filter(x => x.tip==="corba").map((item, index) => (
                        <div key={index} style={{ width: '300px' }}>
                            <h3><i>{item.ad}</i></h3>
 
                            <div className='row' >
                                <div className='col'>
                                    <img src={item.resim} alt={item.ad} className="image" style={stil.image}/>
                                </div>
                            </div>

                            <div className='row' >
                                <div className='col'>
                                    <p className='py-2'><i>{item.aciklama}</i></p>
                                </div>
                            </div>

                            <div >
                                <button className="btn btn-outline-secondary py-1 px-3" onClick={() => { sepeteEkle(item.ad, item.fiyat); sepetiGoster(); }}>Sepete Ekle</button>
                                <span style={{marginLeft:'50px'}}>{item.fiyat}</span>
                            </div>
                        </div>
                    ))}
                </div>
      </>
  );

}

export default Corbalar;