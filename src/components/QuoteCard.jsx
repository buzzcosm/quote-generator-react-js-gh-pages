import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export const QuoteCard = (props) => {
  const { text, author } = props;

  return (
    <div className="quote-container">
      {/* Quote */}
      <div className="quote-text">
        <span className="fa-quote-left">
          <FontAwesomeIcon icon={faQuoteLeft} size="sm"/>
        </span>
        <span className={text.length > 120 ? "long-quote" : ""}>{text}</span>
      </div>
      {/* Author */}
      <div className="quote-author">
        <span>{author}</span>
      </div>
      {/* Buttons */}
      <div className="button-container">
        <button onClick={props.tweetQuote} className="twitter-button unselectable" title="Tweet This!">
        <FontAwesomeIcon icon={faTwitter} />
        </button>
        <button onClick={props.getQuote} className="unselectable">New Quote</button>
      </div>
    </div>
  );
};

QuoteCard.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  getQuote: PropTypes.func,
  tweetQuote: PropTypes.func,
};
