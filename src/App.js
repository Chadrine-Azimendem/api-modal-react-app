// import "./App.css";
import { Wrapper, NavItem } from "./Navbar.style";
import { useState, useEffect } from "react";
function App() {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState({});

  useEffect(() => {
    const shuffleCard = async () => {
      const shuffleResponse = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      const data = await shuffleResponse.json();
      setDeck(data);
    };
    shuffleCard();
  }, []);

  const fetchCard = async () => {
    const deckId = deck.deck_id;
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`
    );
    const data = await response.json();
    console.log(data.cards);
    setCards(data.cards);
  };

  return (
    <div className="App">
      <Wrapper>
        <NavItem>item</NavItem>
        <NavItem>item</NavItem>
        <NavItem>item</NavItem>
        <NavItem>item</NavItem>
      </Wrapper>
      <h1>Make a web page using API</h1>
      <button onClick={fetchCard}>Draw cards</button>
      {/* <CardImage source={images} /> */}
      <div>
        {cards.map((obj, index) => (
          <img src={obj.image} key={index} alt={obj.suit} />
        ))}
      </div>
    </div>
  );
}

export default App;
