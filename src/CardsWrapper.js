import React from "react";
import Card from "./Card";

function CardsWrapper({ data }) {
  const cards = data.map((e) => {
    return (
      <Card
        key={e.id}
        // hard-coding type and category as they are absent in the api
        type={"Article"}
        category={"Desktop"}
        creationDate={new Date(e.date)}
        title={e.title.rendered}
        imageLink={e._embedded["wp:featuredmedia"][0].source_url}
        postLink={e.link}
        authorName={e._embedded.author[0].name}
        authorLink={e._embedded.author[0].link}
      />
    );
  });

  return <div className='row u-equal-height u-clearfix'>{cards}</div>;
}

export default CardsWrapper;
