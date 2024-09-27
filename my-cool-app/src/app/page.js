import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <a href="/profile">Profile</a>
      <h1>My Cool App</h1>
    </div>
  );
}
