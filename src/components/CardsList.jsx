import { Card } from './Card';

const CardsList = ({data}) => {
  return (
    <div className="container">
            <div className='cardlist'>
            {
                data.map ((item) => {
                    return( 
                        <Card 
                            key={item.id}
                            company={item.company}
                            logo={item.logo}
                            _new={item.new}
                            featured={item.featured}
                            position={item.position}
                            role={item.role}
                            postedAt={item.postedAt}
                            contract={item.contract}
                            location={item.location}  
                            languages={item.languages}
                            tools={item.tools}
                        />
                    )
                })
            }
            </div>
    </div>
  )
}
export default CardsList;