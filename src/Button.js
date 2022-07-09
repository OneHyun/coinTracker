import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ text, fontSize = 16 }) => {
  return <button className={styles.btn}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};
export default Button;
