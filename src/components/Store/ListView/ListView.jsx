import { ShopItem } from "./ShopItem/ShopItem"
import './listView.css';

export const ListView = ({ items }) => {
  return (
    <div className='items'>
      {items.map((item, index) => <ShopItem key={index} product={item} />)}
    </div>
  )
}
