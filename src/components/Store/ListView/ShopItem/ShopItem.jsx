import './shopItem.css';

export const ShopItem = ({ product }) => {
  return (
    <article className='item'>
      <div className="item__img">
        <img src={product.img} alt={product.name} />
      </div>
      <h2 className="item__name">{product.name}</h2>
      <p className="item__color">{product.color}</p>
      
      <p className="item__price">${product.price}</p>
      <button className="item__btn">Add to cart</button>
    </article>
  )
}
