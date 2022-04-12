import { Link } from "react-router-dom";
import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = ({ quoteDetails = false }) => {
  return (
    <div className={classes.noquotes}>
      <p>No {quoteDetails ? "quote" : "quotes"} found!</p>
      <Link to="/new-quote" className="btn">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
