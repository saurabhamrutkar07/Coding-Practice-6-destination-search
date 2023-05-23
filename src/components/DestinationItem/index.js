import "./index.css";

const DestinationItem = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <li className="container">
      <img className="item-img" src={item.imgUrl} alt={item.name} />
      <p className="img-name">{item.name}</p>
    </li>
  );
};

export default DestinationItem;
