import styles from "../styles/Travel.module.css";

interface CountCardProp {
  id: string;
  cardTitle: string;
  countValue: number;
}

// Define a count card component that holds a string title and a number.
export default function CountCard(props: CountCardProp) {
  const { id, cardTitle, countValue } = props; // Extract the props
  return (
    <div id={id} className={styles.countcard}>
      <h3>{cardTitle}</h3>
      <h4>{countValue}</h4>
    </div>
  );
}
