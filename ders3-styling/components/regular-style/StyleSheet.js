import "./styleSheet.css";

const StyleSheet = (props) => {
  const isPrimary = props.primary ? "primary" : "secondary"; //primary true ise primary, false ise secondary
  return (
    <div>
      <img
      className="logo"
        src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
        alt="clarusway-logo"
      />
      <h1 className="header">Welcome to Clarusway</h1>
      <p className={isPrimary}>Change your skillset, change your future!</p> 
    </div> //değişen bir şey vermek için className i {} içerisinde yazılır
  );
};

export default StyleSheet;
