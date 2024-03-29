function Introduction() {
  return (
    <>
      <div id="introduction">
        <div className="bg-deco-1 wow slideInRight"></div>
        <div id="introduction-content">
          <div className="description">
            <h2 className="wow slideInRight">Introduction</h2>
            <p className="wow slideInUp">
              The 58th year of Shouwa, early summer. <br />
              It’s June, and the summer heat has arrived earlier than it does
              most years. By day there are crickets, and by night there are
              cicadas. We’re in Hinamizawa, a small village in the countryside.
              There are fewer than two thousand people here. <br /> But every
              year, there is an event. <br />
              This event is a mysterious death. <br />
              (The series has run from 1979 to 1983)
            </p>
          </div>

          <img
            src={require("../../images/introduction.jpg")}
            alt=""
            className="wow slideInRight"
          />
        </div>
        <div className="bg-deco-2 wow slideInLeft" data-wow-delay="0.5s"></div>
      </div>
    </>
  );
}

export default Introduction;
