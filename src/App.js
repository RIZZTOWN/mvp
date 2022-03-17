import React from 'react';
import styled from 'styled-components';
import Twitch from './components/Twitch/Twitch.jsx';
import Location from './components/Bosses/Location.jsx';
import YoutubeEmbed from './components/YoutubeVid/YoutubeEmbed.jsx';

const Title = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://p325k7wa.twic.pics/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header.jpg?twic=v1/cover=1920/step=10/quality=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

function App() {
  return (
    <>
      <Title>
        <h1>(web)site of Grace</h1>
      </Title>
      <Wrapper>
        <YoutubeEmbed className="beginner-guide" embedId="NLdZ8Zex1cw" />
        <YoutubeEmbed className="class-guide" embedId="oc915Caa2S8" />
        <YoutubeEmbed className="class-guide" embedId="vEQCRFcIogY" />
        <Twitch />
        <Location />
      </Wrapper>
    </>
  );
}

export default App;
