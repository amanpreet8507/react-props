import Card from './Card';
import { v4 as uuid } from 'uuid';

function CardList(props) {
  // create an array to store info for the 2 cards here
  const cardArray = [{title: 'Title 1', content:'Content 1'},{title:'Title 2', content:'Content 2'}]
  return (
    <section className="card-list">
      {/* replace the card below by using the Array .map method */
        cardArray.map((card) => {
          return (<Card 
            key={uuid()}
            title={card.title}
            content={card.content}
          />)
        })
      }
    </section>
  );
}

export default CardList;
