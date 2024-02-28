import data from "./data.json";

import Header from "./components/Header";
import CardList from "./components/CardsList";

function App() {


  return (
    <>
      <Header />
      <CardList data={data} />
    </>
  );
}

export default App;
