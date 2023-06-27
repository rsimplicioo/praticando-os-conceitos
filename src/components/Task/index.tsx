import { ITask } from "../../App";
import iconTrash from "../../assets/trash.svg";
import { BsFillCheckCircleFill } from "react-icons/bs";

import styles from "./task.module.css";

interface TaskProps {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  const isCompleted = task.isCompleted;

  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={isCompleted ? styles.textCompleted : ""}>{task.title}</p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <img src={iconTrash} alt="Deletar" />
      </button>
    </div>
  );
}
