import Fossil from "../../components/Fossil/Fossil";
import { useState, useEffect } from "react";
import { getFossils } from "../../services/api-call";

const FossilList = (props) => {
  const [fossils, setFossils] =useState([])
  
  useEffect(()=> {
    getFossils()
    .then(fossilData => setFossils(fossilData))
  },[])

  return ( 
    <>
    <h2>FOssil List Page</h2>

    <div className="fossil-container">
    {fossils.map(fossil => 
      <Fossil key={fossil.image_uri} fossil={fossil} />
      )}
    </div>
    </>
   );
}
 
export default FossilList;