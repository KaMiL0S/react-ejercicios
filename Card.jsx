const Card = ({cardName,cardAge,cardJob}) => {

  return (
    <>
      <div className="container">
        <div>Name : {cardName}</div>
        <div>Age : {cardAge}</div>
        <div>Job : {cardJob}</div>
      </div>
    </>
  );
};
export default Card;
