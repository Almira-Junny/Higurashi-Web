import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getNews } from "../../api/user.service";
import { setMessage } from "../../redux/features/messageSlice";
import { SEVERITY } from "../../utils/enum";
import New from "./news/New";
import { useEffect } from "react";

function News() {
  const [news, setNews] = useState([]);

  const dispatch = useDispatch();

  const fetchNews = async () => {
    try {
      const { data: news } = await getNews(1);
      if (news) {
        setNews(news.slice(0, 3));
      }
    } catch (err) {
      dispatch(
        setMessage({ message: err.message, severity: SEVERITY.WARNING })
      );
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <div id="news">
        <h2 className="wow fadeInDown">News</h2>
        <div id="news-content">
          {news?.map((newData, index) => (
            <New newData={newData} index={index} />
          ))}
        </div>
        <Link to="/news" className="normalBtn wow fadeIn" data-wow-delay="1.2s">
          More News
        </Link>
      </div>
    </>
  );
}

export default News;
