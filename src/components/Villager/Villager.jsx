const Villager = ({villager}) => {
  return ( 
    <>
    <div style={{color:villager['text-color'], backgroundColor: villager['bubble-color']}} className="villager">
      <img src={villager.image_uri} alt="villager" />
      <h3>
        {villager.name['name-USen']} the {villager.species}
        is 
        {villager.personality}</h3>
      <h3 style={{color:villager['text-color'], backgroundColor: villager['bubble-color']}}>"{villager['catch-phrase']}"</h3>

    </div>
    
    </>
   );
}
 
export default Villager;