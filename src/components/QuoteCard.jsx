import './QuoteCard.css'
import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const QuoteCard = props => {
  const { text, author } = props;

  console.log(`Text length: ${text.length}, Long Quote: ${text.length > 120}, Quote: ${text}`);

  return (
    <div className='quote-container'>
      <div className='quote-text'>
        <FontAwesomeIcon className="quote-left-icon" icon={faQuoteLeft} />
        <span className={text.length > 120 ? 'long-quote' : ''}>{text}</span>
      </div>
      <div className="quote-author">
        <span>{author}</span>
      </div>
    </div>
  )
}

QuoteCard.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string
}

export default QuoteCard
