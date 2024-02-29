import dataJson from "./data.json";
import {useEffect, useState} from "react";


import Header from "./components/Header";
import CardList from "./components/CardsList";
import Filters from "./components/Filters";



function App() {

  const [data, setData] = useState([]);
  const [role,  setRole] = useState('Frontend');
  const [level, setLevel] = useState('Junior');

  useEffect (()=>{
    setData(dataJson);
  },[data])
  

  let filtredData = [...data];
  if (role) {
    filtredData = filtredData.filter ((item) => {
        return item.role.includes(role);
      })
    }
    
    if (level) {
        filtredData = filtredData.filter ((item) => {
            return item.level.includes(level);
        })
    }

  const clearFilters = () => {
    setRole('');
    setLevel('');
  }

  return (
    <>
      <Header />
      <Filters role={role} level={level} setRole={setRole} setLevel={setLevel} clearFilters={clearFilters}/>
      <CardList data={filtredData} setRole={setRole} setLevel={setLevel}/>
    </>
  );
}

export default App;
