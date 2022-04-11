import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
export default function NewQuote() {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.replace("/quotes");
  };

  return (
    <section>
      <h1>New Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </section>
  );
}
