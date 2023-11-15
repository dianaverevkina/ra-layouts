import { ShopCard } from "./ShopCard/ShopCard";
import './cardsView.css';

export const CardsView = ({ cards }) => {
  return (
    <div className='cards'>
      {cards.map(card => <ShopCard product={card} />)}
    </div>
  )
}
