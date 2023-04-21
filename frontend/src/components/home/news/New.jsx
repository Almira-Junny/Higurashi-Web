import { Link } from "react-router-dom";
function New({ newData, index }) {
  return (
    <>
      <div
        className="topic wow fadeInLeft"
        data-wow-delay={`${(index + 1) * 0.3}s`}
      >
        <time>{newData?.article?.updatedAt}</time>
        <img src={require("../../../images/rena-test.png")} alt="" />
        <Link to={`/news/${newData?.article?.id}`}>
          {newData?.article?.a_name}
        </Link>
      </div>
    </>
  );
}

export default New;
