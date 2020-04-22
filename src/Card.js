import React from "react";

function Card({
  type,
  category,
  creationDate,
  title,
  imageLink,
  postLink,
  authorName,
  authorLink,
}) {
  const cardStyles = {
    display: "flex",
    flexDirection: "column",
  };
  const borderStyles = { borderTop: "1px dotted #cdcdcd" };
  const imageStyles = {
    width: "100%",
    maxHeight: "130px",
    overflow: "hidden",
  };
  const cardContentStyles = {
    padding: ".5rem 0",
    flex: "1",
  };
  const getFormattedDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return [day, month, year].join(" ");
  };

  return (
    <div className='col-4 p-card--highlighted' style={cardStyles}>
      <h4 className='p-muted-heading'>{category}</h4>
      <div className='p-card__content' style={{ ...borderStyles, ...cardContentStyles }}>
        <div style={imageStyles}>
          <img className='p-image' src={imageLink} alt='' style={{ width: "100%" }} />
        </div>
        <h3 className='p-heading--4'>
          <a href={postLink}>{title}</a>
        </h3>
        <p>
          <em>
            By <a href={authorLink}>{authorName}</a> on {getFormattedDate(creationDate)}
          </em>
        </p>
      </div>
      <p style={borderStyles}>{type}</p>
    </div>
  );
}

export default Card;
