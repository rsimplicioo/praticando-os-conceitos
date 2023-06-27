import { ChangeEvent, FormEvent, useState } from "react";
import todoLogo from "../../assets/logo.svg";
import iconPlus from "../../assets/plus.svg";

import styles from "./header.module.css";

interface Props {
  onAddTask: (titleTask: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (title) {
      onAddTask(title);
      setTitle("");
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo ToDo" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar
          <img src={iconPlus} alt="Ícone adicionar" />
        </button>
      </form>
    </header>
  );
}
