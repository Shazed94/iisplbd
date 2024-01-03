import "./customLoader.css";

const CircularDotLoader = (props) => {
  return (
    <>
      <div className={props.className}>
        <span className="circular_loader"></span>
      </div>
    </>
  );
};

export { CircularDotLoader };
