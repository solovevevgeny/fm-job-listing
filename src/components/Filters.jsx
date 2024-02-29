import {useState, useEffect} from "react";


const Filters = ({role, level, clearFilters, setLevel, setRole}) => {
  
  return (
    <div className='filters'>
        <div className="filters__active flex-inline">
        {
            role ? (
              <div className="filter" key={role}>
                <div className="filter__name">{role}</div>
                <div className="filter__icon" onClick={()=>setRole('')}>X</div>
              </div>
            ) :
            ('')
        }

        {
            level ? (
              <div className="filter" key={level}>
                <div className="filter__name">{level}</div>
                <div className="filter__icon" onClick={()=>setLevel('')}>X</div>
              </div>
            ) :
            ('')
        }


        </div>
        <div className="filters__clear">
            <a className='green' href="#" onClick={()=>clearFilters()}>clear</a>
        </div>

    </div>
  )
}
export default Filters;