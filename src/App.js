import Anayemek from "./Anayemek";
import Corbalar from './Corbalar';
import Icecekler from "./Icecekler";
import Tatli from "./Tatli";


function App() {
  return (
    <>    
    <div className="container">
      <h1 style={{color: "#C7AA8D", fontSize:"3em" , textAlign: "center"}}>Restoran Menumuz</h1>
      <div className="row">
      <div className="col-2 p-2">
      <Anayemek />
      </div>
      <div className="col-2 p-2">
      <Corbalar />
      </div>
      <div className="col-2 p-2 ms-2">
      <Icecekler />
      </div>
      <div className="col-2 p-2">
      <Tatli />
      </div>
      <div  className='col justify-content-center text-center' id='siparis'>
          <h3 id='bos'></h3>
          <ul id='sepet-listesi'></ul>
          <p id='toplam-fiyat'></p>
        </div>
     
      </div>


    </div>
   
   

  
    </>

  );
}

export default App;
