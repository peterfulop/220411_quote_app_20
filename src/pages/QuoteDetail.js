import { Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Andrea",
    text: "Learning Nodejs is interesting.",
  },
  {
    id: "q3",
    author: "Sebastian",
    text: "Learning MongoDB is difficult, but very good.",
  },
];

export default function QuoteDetail() {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <section>
      <h1>Quote Details</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quote.id}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quote.id}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${quote.id}/comments`}>
        <Comments />
      </Route>
    </section>
  );
}
