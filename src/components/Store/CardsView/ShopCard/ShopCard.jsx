import './shopCard.css';

export const ShopCard = ({ product }) => {
  return (
    <article className='card'>
      <div className="card__header">
        <h2 className="card__name">{product.name}</h2>
        <span className="card__color">{product.color}</span>
      </div>
      <div className="card__img">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="card__footer">
        <p className="card__price">${product.price}</p>
        <button className="card__btn">Add to cart</button>
      </div>
    </article>
  )
}
