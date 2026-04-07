
function PlaceCard (props) {
    const { img, title, description, price = 0 } = props;

  return (
    <div className="place-card">
        <img src={img} className="card-img-top" alt={' imagen de ' + title} />
        <h5>{title}</h5>
        <p>{description}</p>
        <h4>${price}</h4>
    </div>
    ); 
}

export default PlaceCard;