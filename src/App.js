import React from 'react';
import styled from 'styled-components';
import Twitch from './components/Twitch/Twitch.jsx';
import Location from './components/Bosses/Location.jsx';
import YoutubeEmbed from './components/YoutubeVid/YoutubeEmbed.jsx';

const Title = styled.div`
  background: green;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <div className="app">
      <Title>
        <h1>(web)site of Grace</h1>
      </Title>
      <Twitch />
      <Location />
      <YoutubeEmbed className="beginner-guide" embedId="NLdZ8Zex1cw" />
      <YoutubeEmbed className="class-guide" embedId="oc915Caa2S8" />
    </div>
  );
}

export default App;
