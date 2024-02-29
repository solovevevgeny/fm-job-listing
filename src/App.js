import dataJson from "./data.json";
import {useEffect, useState} from "react";


import Header from "./components/Header";
import CardList from "./components/CardsList";
import Filters from "./components/Filters";



function App() {

  const [data, setData] = useState([]);
  const [role,  setRole] = useState('Backend');
  const [level, setLevel] = useState('Midweight');

  useEffect (()=>{
    setData(dataJson);
  },[data, role, level])
  

  let filtredData = [...data];
  if (role) {
    filtredData = data.filter ((item) => {
        return item.role.includes(role);
      })
    }
    
    if (level) {
        filtredData = filtredData.filter ((item) => {
            console.log('__' + level + '__' + item.level + '__' + item.level.includes(level));
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
      <CardList data={filtredData} />
    </>
  );
}

export default App;
