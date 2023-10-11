import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ObjAssignment } from "./../../App";

type ChildProps = {
  assignment: ObjAssignment;
  toogleComplete: (index: number) => void;
  deleteItem: (index: number) => void;
};

export function Assignment(props: ChildProps) {
  return (
    <div className={styles.assignment}>
      <button
        className={styles.checkContainer}
        onClick={() => props.toogleComplete(props.assignment.index)}
      >
        {props.assignment.isCompleted && <BsFillCheckCircleFill />}
        {!props.assignment.isCompleted && <div />}
      </button>

      <p
        style={{
          color: props.assignment.isCompleted ? "#808080" : "",
          textDecoration: props.assignment.isCompleted ? "line-through" : "",
        }}
      >
        {props.assignment.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => props.deleteItem(props.assignment.index)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
