const Header = () => {
  return (
    <div>
      <h1 className="title">
        <span>Next.Js X Netlify Koklonozi</span> First
      </h1>
      <style jsx>
        {`
          .title {
            color: red;
          }
          .title span {
            color: blue;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
