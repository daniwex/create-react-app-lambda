import Checkbox from "./Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Form from "./Form";
import Toast from "./Toast";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

export default function Item({ element, onDelete, onToggleItem }) {
  const [modalStatus, setmodalStatus] = useState(false);
  let [title, settitle] = useState(element.title);
  let [message, setmessage] = useState("");
  let [status, setstatus] = useState(element.status);

  function saveItems() {
    if (title === "") {
      setmessage({ message: "Please enter a value", status: false });
      setTimeout(() => {
        setmessage("");
      }, 4000);
      return;
    }
    if (title === element.title && status === element.status) {
      setmessage({ message: "No changes made", status: false });
      setTimeout(() => {
        setmessage("");
      }, 4000);
      return;
    }
    let obj = {
      title: title,
      status: status,
    };
    element.title = obj.title;
    element.status = obj.status;
    setmessage({ message: "Changes made successfully", status: true });
    setmodalStatus(false);
    setTimeout(() => {
      setmessage("");
    }, 4000);
  }

  return (
    <div className="checkbox-container">
      <div className="flex justify-content-space">
        <div>
          {
            <Checkbox
              checkedStatus={element.status === "Completed" ? true : false}
              handlechange={() => onToggleItem(element.id)}
            />
          }
          <span
            className="txt"
            style={
              element.status === "Completed"
                ? { textDecoration: "line-through" }
                : {}
            }
          >
            {element.title}
          </span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faPen}
            onClick={() => {
              setmodalStatus(true);
              settitle(element.title);
              setstatus(element.status);
            }}
            className="btn"
          />
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => onDelete(element.id)}
            className="btn"
          />
        </div>
        {modalStatus && (
          <Form
            Fname="Update Todo"
            name="container-form"
            btnname="Update"
            formName="form"
            onsubmit={saveItems}
            onclick={() => {
              setmodalStatus(false);
            }}
            status={status}
            onchange={(e) => setstatus(e.target.value)}
            title={title}
            onchangetitle={(e) => settitle(e.target.value)}
          />
        )}
        {message && <Toast message={message} />}
      </div>
    </div>
  );
}
