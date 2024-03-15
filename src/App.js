import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
import SearchItem from "./components/SearchItem";

function App() {
  let [foodItems, setFooditems] = useState([
    "Dal",
    "green Chutney",
    "cake",
    "mango juice",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newItem = [...foodItems, event.target.value];
      event.target.value = "";
      setFooditems(newItem);
    }
  };

  
  return (
    <>
      <center>
        <Container>
          <Heading />
          <ErrorMessage item={foodItems} />
          <FoodInput onKeyDown={onKeyDown}></FoodInput>
          <SearchItem items={foodItems} />
        </Container>
      </center>
    </>
  );
}

export default App;
