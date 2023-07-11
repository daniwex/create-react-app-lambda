import { useState } from "react";
import Items from "./components/Items";
import Options from "./components/Options";
import Button from "./components/Button";
import Form from "./components/Form";
import Toast from "./components/Toast";
import "./App.css";

let options = [
  { item1: 1, value: "All" },
  { item2: 2, value: "Completed" },
  { item3: 3, value: "Incomplete" },
];

export default function App() {
  let [count, setcount] = useState(0);
  let [showModal, setshowModal] = useState(false);
  let [title, settitle] = useState("");
  let [status, setstatus] = useState("Completed");
  let [items, setitems] = useState([]);
  let [message, setmessage] = useState("");
  let [selectedoption, setSelectedoption] = useState("All");
  let sortedItems;

  function saveItems() {
    if (title === "") {
      setmessage({ message: "Please enter a value", status: false });
      setTimeout(() => {
        setmessage("");
      }, 4000);
      return;
    }
    let obj = {
      id: count,
      title: title,
      status: status,
    };
    setcount((count) => count + 1);
    setitems([obj, ...items]);
    setshowModal(false);
    settitle("");
    setmessage({ message: "Task added successfully", status: true });
    setTimeout(() => {
      setmessage("");
    }, 4000);
    setstatus("Completed");
  }
  function deleteItem(id) {
    setitems(items.filter((el) => el.id !== id));
    setmessage({ message: "Task successfully deleted", status: true });
    setTimeout(() => {
      setmessage("");
    }, 4000);
  }

  function toggleItem(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Completed" ? "Incomplete" : "Completed",
            }
          : item
      )
    );
  }
  if (selectedoption === "All") {
    sortedItems = items;
  }
  if (selectedoption === "Completed") {
    sortedItems = items.slice().filter((it) => it.status === selectedoption);
  }
  if (selectedoption === "Incomplete") {
    sortedItems = items.slice().filter((it) => it.status === selectedoption);
  }

  return (
    <div style={styles.containerFirst}>
      <h1 className="h1">TODO LIST</h1>
      <div className="container-top" style={styles.containerTop}>
        <Button
          name="Add task"
          modal={() => {
            setshowModal(true);
          }}
          color="#646FF0"
        />
        <Options
          options={options}
          onchange={(e) => {
            setSelectedoption((selectedoption = e.target.value));
          }}
        />
      </div>
      <div className="todo-container">
        {sortedItems.length === 0 ? (
          <p className="notodo-text">No Todos</p>
        ) : (
          <Items
            allitems={sortedItems}
            onDelete={deleteItem}
            onToggleItem={toggleItem}
          />
        )}
      </div>
      {showModal && (
        <Form
          Fname="Add Todo"
          name="container-form"
          btnname="Add Task"
          formName="form"
          onsubmit={saveItems}
          onclick={() => {
            setshowModal(false);
            setmessage("");
          }}
          status={status}
          onchange={(e) => setstatus(e.target.value)}
          title={title}
          onchangetitle={(e) => {
            settitle(e.target.value);
          }}
        />
      )}
      {message && <Toast message={message} />}
    </div>
  );
}

const styles = {
  containerFirst: {
    width: "700px",
  },
  containerTop: {
    display: "flex",
    justifyContent: "space-between",
  },
};
