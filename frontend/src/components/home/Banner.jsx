function Banner() {
  return (
    <div>
      <div id="banner">
        <img src={require("../../images/banner-1.jpg")} alt="" />
        <div id="banner-content">
          <div className="gameTitle">
            Higurashi When They <span>C</span>ry
          </div>
          <p className="subTitle"></p>
          <a
            href="https://store.steampowered.com/app/310360/Higurashi_When_They_Cry_Hou__Ch1_Onikakushi/"
            className="buyBtn"
          >
            {" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
