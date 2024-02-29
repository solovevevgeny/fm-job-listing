import dataJson from "./data.json";
import {useEffect, useState} from "react";


import Header from "./components/Header";
import CardList from "./components/CardsList";
import Filters from "./components/Filters";



function App() {

  const [data, setData] = useState([]);
  const [role,  setRole] = useState('Frontend');
  const [level, setlevel] = useState('Senior');

  useEffect (()=>{
    setData(dataJson);
  },[])

  if (role) {
    // console.log(roles);
    let filterData = data.filter ((item) => {
      // item.includes(role);
    })
  }



  return (
    <>
      <Header />
      <Filters role={role} level={level} />
      <CardList data={dataJson} />
    </>
  );
}

export default App;
