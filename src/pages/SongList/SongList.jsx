import Song from "../../components/Song/Song";
import React, { useState, useEffect } from 'react';
import { getSongs } from "../../services/api-call";

const SongList = (props) => {
  const [songs, setSongs] = useState([])

  useEffect(()=>
  getSongs()
  .then(songData => setSongs(songData))
  )
  return ( 
    <h2>Song List Component</h2>
   );
}
 
export default SongList;