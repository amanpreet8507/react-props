function Card(props) {
  return (
    <div className="card">
      <div className="card__content">{props.content}</div>
      <h4 className="card__title">{props.title}</h4>
    </div>
  );
}

export default Card;
