import styles from "./styles.module.scss";
import { VscGithubInverted as GithubIcon } from "react-icons/vsc";

export function LoginBox() {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href="#" className={styles.signInWithGithub}>
        <GithubIcon size={24} />
        Entre com o Github
      </a>
    </div>
  );
}
