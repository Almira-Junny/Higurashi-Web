// import Banner from "../../../components/home/Banner";
// import Character from "../../../components/home/Character";
// import Gameplay from "../../../components/home/Gameplay";
// import Introduction from "../../../components/home/Introduction";
// import Creators from "../../../components/home/Creators";
// import News from "../../../components/home/News";
// import Story from "../../../components/home/Story";
import "./style.css";
// import Footer from "../../../components/home/Footer";
import ScrollContainer from "../../../components/home/ScrollContainer";
import { lazy, Suspense } from "react";
import LoadingScreen from "../../../components/loadingScreen/LoadingScreen";
const scrollIntertia = 70;

const Banner = lazy(() => import("../../../components/home/Banner"));
const Character = lazy(() => import("../../../components/home/Character"));
const Gameplay = lazy(() => import("../../../components/home/Gameplay"));
const Introduction = lazy(() =>
  import("../../../components/home/Introduction")
);
const Creators = lazy(() => import("../../../components/home/Creators"));
const News = lazy(() => import("../../../components/home/News"));
const Story = lazy(() => import("../../../components/home/Story"));
const Footer = lazy(() => import("../../../components/home/Footer"));

function Home() {
  return (
    <>
      <div className="mainContainer">
        <ScrollContainer scrollIntertia={scrollIntertia}>
          <Suspense fallback={<LoadingScreen />}>
            <Banner />
            <div id="container">
              <News />
              <Introduction />
              <Story />
            </div>
            <Character />
            <Gameplay />
            <Creators />
            <Footer />
          </Suspense>
        </ScrollContainer>
        <div className="sky-bg"></div>
      </div>
    </>
  );
}

export default Home;
