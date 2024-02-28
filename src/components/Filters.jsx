import React from 'react'

const Filters = () => {
  return (
    <div className='filters'>
        <div className="filters__active">

            <div className="filter">
              <div className="filter__name">filter</div>
              <div className="filter__icon">X</div>
            </div>
            
        </div>
        <div className="filters__clear">
            <a className='green' href="">clear</a>
        </div>

    </div>
  )
}
export default Filters;