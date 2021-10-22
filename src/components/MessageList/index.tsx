import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface IMessage {
  created_at: string;
  id: string;
  text: string;
  user: {
    avatar_url: string;
    name: string;
  };
}

export function MessageList() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  useEffect(() => {
    async function getLast3Messages() {
      const { data } = await api.get("messages/last3");
      setMessages(data as IMessage[]);
    }

    getLast3Messages();
  }, []);
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="logo DoWhile" />
      <ul className={styles.messageList}>
        {messages.map((item) => (
          <li key={item.id} className={styles.message}>
            <p className={styles.messageContent}>{item.text}</p>
            <div className={styles.messageUser}>
              <div className={styles.userImage}>
                <img src={item.user.avatar_url} alt={item.user.name} />
              </div>
              <span>{item.user.name}</span>
              {/* <span>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(item.created_at)
                )}
              </span> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
