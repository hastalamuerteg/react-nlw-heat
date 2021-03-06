import styles from "./App.module.scss";
import { MessageList } from "./components/MessageList/index";
import { LoginBox } from "./components/LoginBox/index";

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  );
}
