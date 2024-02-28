import data from "./data.json";

import Header from "./components/Header";
import CardList from "./components/CardsList";
import Filters from "./components/Filters";

function App() {


  return (
    <>
      <Header />
      <Filters />
      <CardList data={data} />
    </>
  );
}

export default App;
