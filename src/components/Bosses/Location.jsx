import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';



const BossWrapper = styled.div`
  grid-column: 1 / 4;
  grid-row: 7 / 10;
  background-image: url('https://cdn.vox-cdn.com/thumbor/rzgLd2ZUzQitq-jQlmBkUuTP4cg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22652456/potboys.jpg');
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    color: rgba(207, 207, 207, 0.726);
  }
  .map-label {
    color: rgba(207, 207, 207, 0.726);
    margin: 10px;
  }
`;


const BossContainer = styled.div`
  background-color: rgba(207, 207, 207, 0.726);
  ul {
    display: flex;
  }
`;

const Location = () => {

  const [currentLocation, setCurrentLocation] = useState();
  const [bossInfo, setBossInfo] = useState();

  useEffect(() => {
    console.log('In useEffect; current Location: ', currentLocation);
    axios.get(`http://localhost:5000/bosses/${currentLocation}`)
    .then((res) => {
      console.log(res.data);
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
    <BossWrapper>
      <h1>Boss Info</h1>
    <form >
      <label className="map-label">
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
        <h3>{boss.name}</h3>
        <ul> Location:<div>{' ' + boss.location}</div></ul>
        <ul> Items Dropped:<div>{' ' + boss.items}</div></ul>
      </BossContainer>
    ))}</div> : <div>No Boss info</div>}
    </BossWrapper>
  );
}

export default Location;