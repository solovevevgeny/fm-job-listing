import React from 'react'

export const Card = ({company, logo, _new, featured,position,role,level,postedAt,contract,location,languages,tools=[], setRole, setLevel}) => {


  return (
        <div className='card'>
            <div className="card__logo">
                <img src={logo} alt={company} />
            </div>

            <div className="card__info">
                <div className="card__info-cap flex-inline">
                    <div className='company-name'>{company}</div>
                    <div>{_new ? <span className="badge badge-new">new</span> : ''}</div>
                    <div>{featured ? <span className="badge badge-featured">featured</span>: ''}</div>
                </div>

        
                <div className="card__info-position">
                    <h2><a href="">{position}</a></h2>
                </div>

                <div className="card__info-footer flex-inline">
                    <div>{postedAt}</div>
                    <div>{contract}</div>
                    <div>{location}</div>
                </div>

            </div>

            <div className="card__tags">
                <div className='tag' id='tag-role' onClick={()=>{setRole(role)}}>{role}</div>

                {
                    level ? (

                        <div className='tag' id='tag-level' onClick={()=>{setLevel(level)}}>{level}</div>
                    )
                    : (
                        ''
                    )
                }
                
                
                {
                    languages.map ((language)=> {
                        return (<div className='tag'>{language}</div>)
                    })
                }

                {
                    tools.map ((tool)=> {
                        return (<div className='tag'>{tool}</div>)
                    })
                }
            </div>

        </div>
  )
}
