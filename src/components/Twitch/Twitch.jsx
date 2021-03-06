
import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import styled from 'styled-components';

const StreamVid = styled.div`
  grid-column: 1 / 4;
`;

// const StreamChat = styled.div`
//   height: 255px;
//   width:450px;
// `;

const Twitch = () => {
  return (
    <StreamVid>
      <TwitchEmbed
        channel="LIRIK"
        id="LIRIK"
        theme="dark"
        muted
        onVideoPause={() => console.log(':(')}
        width="100%"
        height="392%"
      />
    </StreamVid>
  );
}

export default Twitch;






// ------------------------------ EMBEDED OPTION ----------------------------------------------------

// const Twitch = () => {
//   return (
//     <StreamSpot>
//       <TwitchEmbed
//         channel="LIRIK"
//         id="LIRIK"
//         theme="dark"
//         muted
//         onVideoPause={() => console.log(':(')}
//       />
//       <TwitchChat channel="LIRIK" theme="dark" />
//       <TwitchClip clip="WealthyBumblingKimchiItsBoshyTime" parent={['mycoolsite.com, anotherawesomesite.net']} />
//       <TwitchPlayer video="333014765" />
//     </StreamSpot>
//   );
// }




// -------------------------- NOT EMBEDED OPTION ---------------------------------------------------

// const StreamVid = styled.div`
//   height: 255px;
//   width: 450px;
// `;

// const StreamChat = styled.div`
//   height: 255px;
//   width:450px;
// `;

// const Twitch = () => {
//   return (
//     <>
//       <StreamVid>
//         <TwitchPlayer
//           channel="LIRIK"
//           height='100%'
//           width='100%'
//         />
//       </StreamVid>
//       <StreamChat>
//         <TwitchChat
//           channel="LIRIK"
//           theme="dark"
//           height="100%"
//           width="100%"
//         />
//       </StreamChat>
//     </>
//   );
// }