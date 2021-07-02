import "./Card.css";

const Card = (props) => {
  console.log("[Card] rendered");

  const classes = ["card"];
  if (props.className) {
    classes.push(props.className);
  }
  return <div className={classes.join(" ")}>{props.children}</div>;
};

export default Card;
