import styled from "styled-components";
import birthdayImage from "./assets/birthday.png";

const AppWrapper = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const ImageWrapper = styled.div`
  width: 10%;
  height: 8.5%;
  display: flex;
  justify-content: flex-start;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 26px;
`;

const BigHeading = styled.h1`
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
  margin: 0.5rem 0;
`;
const NormalHeading = styled.h2`
  color: white;
  text-align: center;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  margin: 0.5rem 0;
`;
const SmallHeading = styled.h3`
  color: white;
  text-align: center;
  font-size: 0.75rem;
  font-family: Arial, sans-serif;
  margin: 0.5rem 0;
`;

function App() {
  return (
    <AppWrapper>
      <ImageWrapper>
        <img src={birthdayImage} alt="Birthday" />
      </ImageWrapper>
      <TextWrapper>
        <BigHeading>Happy Birthday!</BigHeading>
        <NormalHeading>
          I hope you're pleased with our destination☺️
        </NormalHeading>
        <NormalHeading>
          Here is our loose (ish) itinerary for the weekend.
        </NormalHeading>
        <SmallHeading>
          (All are optional unless marked with a * 🙂)
        </SmallHeading>
        <br></br>
        <NormalHeading>Friday:</NormalHeading>
        <SmallHeading>- Mini egg pancakes🥞</SmallHeading>
        <SmallHeading>- Head off from yours🚘</SmallHeading>
        <SmallHeading>- Starbs en route☕️</SmallHeading>
        <SmallHeading>- Drop bags off or check-in🛎️</SmallHeading>
        <SmallHeading>- Chill🥱</SmallHeading>
        <SmallHeading>- Stroll to St Ives🚶🏻‍♂️</SmallHeading>
        <SmallHeading>- Chippies on the beach🍟</SmallHeading>
        <SmallHeading>- Cocktails @ Seven Bar🍹</SmallHeading>
        <SmallHeading>- Uber home🚕</SmallHeading>
        <br></br>
        <br></br>
        <NormalHeading>- Saturday:</NormalHeading>
        <SmallHeading>
          - Carbis Bay or St Ives for an iced coffee and a light brunch🥐
        </SmallHeading>
        <SmallHeading>- Paddleboards or kayak on the sea🛶</SmallHeading>
        <SmallHeading>- Home to rinse off and change🚿</SmallHeading>
        <SmallHeading>- Afternoon tea @ Ugly Butterfly🦋</SmallHeading>
        <SmallHeading>- Walk to Godrevy lighthouse⚓️</SmallHeading>
        <SmallHeading>- Snacks & sunset somewhere🌅</SmallHeading>
        <br></br>
        <br></br>
        <NormalHeading>- Sunday:</NormalHeading>
        <SmallHeading>- Pack up and check-out🔑</SmallHeading>
        <SmallHeading>- Find a nice bakery or brunch spot🧇</SmallHeading>
        <SmallHeading>- Jellycat hunting🍊</SmallHeading>
        <SmallHeading>- Drive to Dartmoor National Park🚙</SmallHeading>
        <SmallHeading>- Little hike or a nice walk with snacks🍿</SmallHeading>
        <SmallHeading>- Home🛌</SmallHeading>
        <SmallHeading>- Test</SmallHeading>
      </TextWrapper>
    </AppWrapper>
  );
}

export default App;
