import './RandomQuote.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import {faTumblr, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FC, useEffect, useState} from 'react';

const SOCIAL_MEDIA = [
  {title: 'twitter', icon: faTwitter},
  {title: 'tumblr', icon: faTumblr},
];

interface IRandomQuoteProps {
  dynamicColor: string;
  onMakeRandomColor: () => void;
}

interface IQuote {
  content: string;
  author: string;
  tags: string[];
  length: number;
}

const RandomQuote: FC<IRandomQuoteProps> = ({
  dynamicColor,
  onMakeRandomColor,
}) => {
  const [quote, setQuote] = useState<IQuote>({} as IQuote);
  const [animOpacity, setAnimOpacity] = useState<boolean>(false);
  const styleForQuote = {
    color: dynamicColor,
    opacity: animOpacity ? 1 : 0,
    transition: 'all 700ms linear',
  };

  const getQuote = async () => {
    setAnimOpacity(false);
    const response = await fetch('https://api.quotable.io/random');
    const rdnQuote: IQuote = await response.json();
    onMakeRandomColor();

    setTimeout(() => {
      setQuote(rdnQuote);
      setAnimOpacity(true);
    }, 500);
  };

  const getTweetURL = (): string => {
    const twitterURL = new URL('https://twitter.com/intent/tweet/');
    twitterURL.searchParams.append('hashtags', 'quotes');
    twitterURL.searchParams.append('related', 'freecodecamp');
    twitterURL.searchParams.append('text', `${quote.content} ${quote.author}`);
    return twitterURL.href;
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div id="quote-box" className="quote-container">
      <div className="quote">
        <FontAwesomeIcon
          className="quote__icon"
          icon={faQuoteLeft}
          style={styleForQuote}
        />
        <p id="text" className="quote__text" style={styleForQuote}>
          {quote.content}
        </p>
      </div>
      <p id="author" className="quote-author" style={styleForQuote}>
        - {quote.author}
      </p>
      <div className="quote-btns">
        <ul className="quote-btns__social">
          {SOCIAL_MEDIA.map(({title, icon}) => (
            <li
              key={title}
              style={{
                color: '#ffffff',
                backgroundColor: dynamicColor,
                transition: 'background-color 700ms linear',
              }}
            >
              <a href={getTweetURL()} id="tweet-quote" target="_blank">
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
        <button
          id="new-quote"
          style={{
            backgroundColor: dynamicColor,
            transition: 'background-color 700ms linear',
          }}
          className="quote-btns__new-quote"
          onClick={() => {
            getQuote();
          }}
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuote;
