import "./Card.css";

//Children props
const Card = (props) => {
  //append any class set in tag into classes
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
