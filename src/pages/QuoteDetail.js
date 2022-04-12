import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

export default function QuoteDetail() {
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && !loadedQuote.text) {
    return <NoQuotesFound quoteDetails={true} />;
  }

  return (
    <section>
      <h1>Quote Details</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Outlet />
    </section>
  );
}
