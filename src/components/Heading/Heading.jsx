const Heading = ({ title, subTitle }) => {
  return (
    <div className="text-center text-2xl font-bold py-5">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default Heading;
