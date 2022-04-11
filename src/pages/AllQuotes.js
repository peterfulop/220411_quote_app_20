import QuoteList from "../components/quotes/QuoteList";

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

export default function AllQuotes() {
  return (
    <section>
      <h1>All Quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </section>
  );
}
