
function FeatureCard (props) {
    const { title, description } = props;

  return (
    <div className='card card-feature h-100'>
        <span className='icon icon-lg bg-secondary2'>
            <i className="bi bi-cash-coin accent"></i>
        </span>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
    ); 
}

export default FeatureCard;