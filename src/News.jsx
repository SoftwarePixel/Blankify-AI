import NewsComponent from "./NewsComponent";
import "./News.css";

function News() {
  return (
    <div className="news-root">
      <div style={{ paddingTop: "14rem" }}></div>
      <center>
        <NewsComponent title={"Changelog"} items={["Initial release 1.0.0"]} />
        <NewsComponent
          title={"Example News"}
          items={[
            "This is what news looks like!",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nihil laborum amet quo veniam vel explicabo, odio reprehenderit ipsam sequi impedit qui iste culpa tempora necessitatibus non minus iusto? Sed!",
          ]}
        />
      </center>
    </div>
  );
}

export default News;
