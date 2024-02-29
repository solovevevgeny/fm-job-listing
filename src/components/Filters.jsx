import {useState, useEffect} from "react";


const Filters = ({role, level}) => {
  
  // if (role) {
  //   console.log(role);
  // }

  // if (level) {
  //   console.log(level);
  // }

  return (
    <div className='filters'>
        <div className="filters__active flex-inline">
        {
            role ? (
              <div className="filter">
                <div className="filter__name">{role}</div>
                <div className="filter__icon">X</div>
              </div>
            ) :
            ('')
        }

        {
            level ? (
              <div className="filter">
                <div className="filter__name">{level}</div>
                <div className="filter__icon">X</div>
              </div>
            ) :
            ('')
        }


        </div>
        <div className="filters__clear">
            <a className='green' href="#">clear</a>
        </div>

    </div>
  )
}
export default Filters;