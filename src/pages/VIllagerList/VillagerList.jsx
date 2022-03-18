import React, { useState, useEffect } from 'react';
import Villager from "../../components/Villager/Villager";
import { getVillagers } from "../../services/api-call";

const VillagerList = (props) => {
  const[villagers, setVillagers] = useState([])

  useEffect(()=>{
    getVillagers()
    .then(villagerData => setVillagers(villagerData)
    )  },[])
  return ( 
    <>
    <h2>Villager List</h2>
    {villagers.map(villager=>
      <Villager villager={villager} key={villager.id}/>
      )}
    </>
   );
}
 
export default VillagerList;