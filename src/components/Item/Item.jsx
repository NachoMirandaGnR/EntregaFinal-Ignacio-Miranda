import "./Item.css";

const Item = ({ id, name, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock Disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <button className="Option">Ver Detalles</button>
      </footer>
    </article>
  );
};

export default Item;
