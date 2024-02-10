import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const updatenews = async () => {
  document.title=`${capitalize(props.category)}-News`
  let url = `https://newsapi.org/v2/top-headlines?q=${props.search}&country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
  setloading(true);
  let data = await fetch(url);
  let parsedata = await data.json();
  setArticles(parsedata.articles);
  settotalResults(parsedata.totalResults);
  setloading(false);
  };
  
  useEffect(() => {
    updatenews();
  }, [props.search]);

  const fetchMoreData = async () => {
    setloading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pagesize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(parsedata.articles);
    setArticles(articles.concat(parsedata.articles));
    settotalResults(parsedata.totalResults);
    setloading(false);
  };
  return (
    <>
      <h2 className="text-center" style={{ marginTop: "90px" }}>
        News Headlines - Top {capitalize(props.category)} Headlines
      </h2>
      {loading && <Loading />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        // loader={<Loading/>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={
                      element.title
                        ? element.title.split(" ", 10).join(" ")
                        : ""
                    }
                    description={
                      element.description
                        ? element.description.split(" ", 20).join(" ")
                        : ""
                    }
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
