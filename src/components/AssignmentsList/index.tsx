import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { ObjAssignment } from "./../../App";

type ListAssignments = {
  listItems: ObjAssignment[];
  toogleComplete: (index: number) => void;
  deleteItem: (index: number) => void;
};

export function AssignmentsList(props: ListAssignments) {
  console.log(props.listItems);
  const totalAssignments = props.listItems.length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{totalAssignments}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {props.listItems.filter((x) => x.isCompleted).length} of{" "}
            {totalAssignments}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {props.listItems.map((item) => (
          <Assignment
            key={item.index}
            assignment={item}
            toogleComplete={props.toogleComplete}
            deleteItem={props.deleteItem}
          />
        ))}
      </div>
    </section>
  );
}
