import { Header } from "./components/Header";
import { AssignmentsList } from "./components/AssignmentsList";
import { useState } from "react";

export type ObjAssignment = {
  title: string;
  isCompleted: boolean;
  index: number;
};

function App() {
  const [listAssignments, setListAssignments] = useState<ObjAssignment[]>([]);
  const [indexItem, setIndexItem] = useState(0);

  const addItem = (newItem: string) => {
    const newAssignment = {
      title: newItem,
      isCompleted: false,
      index: indexItem,
    };
    setListAssignments((prev) => [...prev, newAssignment]);
    setIndexItem(indexItem + 1);
  };

  const toogleComplete = (index: number) => {
    console.log(index);
    const filteredList = listAssignments.map((x) =>
      x.index === index ? { ...x, isCompleted: !x.isCompleted } : x
    );
    setListAssignments(filteredList);
  };

  const deleteItem = (index: number) => {
    const filteredList = listAssignments.filter((x) =>
      x.index === index ? false : true
    );
    setListAssignments(filteredList);
  };

  return (
    <>
      <Header addItem={addItem} />
      <AssignmentsList
        listItems={listAssignments}
        toogleComplete={toogleComplete}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default App;

/*
References:
https://bobbyhadz.com/blog/react-typescript-usestate-array-of-objects
*/
