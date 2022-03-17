import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const BossContainer = styled.div`
  border: 2px solid red;
`;

const Location = () => {

  const [currentLocation, setCurrentLocation] = useState();
  const [bossInfo, setBossInfo] = useState();

  // Use Id's becauase theres a space between map names
  useEffect(() => {
    console.log('In useEffect; current Location: ', currentLocation);
    axios.get(`http://localhost:5000/bosses/${currentLocation}`)
    .then((res) => {
      console.log(res.data); // console.logs arent working...
      //find out where is data, set bossInfo, conditional render info
      setBossInfo(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [currentLocation]);


  const handleChange = (e) => {
    setCurrentLocation(e.target.value);
  }

  return (
    <>
    <form >
      <label>
        Map:
        <select value={currentLocation} onChange={handleChange}>
          <option value="">Select An Area</option>
          <option value="LIMGRAVE">Limgrave</option>
          <option value="STORMVEIL_CASTLE">Stormveil Castle</option>
          <option value="WEEPING_PENINSULA">Weeping Peninsula</option>
          <option value="LIURNIA_OF_THE_LAKES">Liurnia of the lakes</option>
          <option value="CAELID">Caelid</option>
          <option value="DRAGONBARROW">Dragonbarrow</option>
          <option value="ALTUS_PLATEAU">Altus Plateu</option>
          <option value="MT._GELMIR">Mt. Gelmir</option>
          <option value="LEYNDELL._ROYAL_CAPITAL">Leyndell, Royal Capital</option>
          <option value="FORBIDDEN_LANDS">Forbidden Lands</option>
          <option value="CONSECRATED_GROUNDS">Consecrated Grounds</option>
          <option value="MOUNTAINTOPS_OF_THE_GIANTS">Mountaintops of the Giants</option>
          <option value="MIQUELLA’S_HALIGTREE">Miquella's Haligtree</option>
          <option value="SIOFRA_RIVER">Siofra River</option>
          <option value="DEEPROOT_DEPTHS">Deeproot Depths</option>
          <option value="LAKE_OF_ROT">Lake of Rot</option>
          <option value="CRUMBLING_FARUM_AZULA">Crumbling Farum Azula</option>
          <option value="ELDEN_THRONE">Elden Throne</option>
        </select>
      </label>
    </form>
    {bossInfo ? <div>{bossInfo.rows.map((boss, index) => (
      <BossContainer>
        <li>{boss.name}</li>
        <div> Location: {boss.location}</div>
        <div> Items Dropped: {boss.items}</div>
      </BossContainer>
    ))}</div> : <div>No Boss info</div>}
    </>
  );
}

export default Location;