import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Toast({ message }) {
  return (
    <div className="toast-container">
      <div className="toast">
        {message.status ? (
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#48f96b", marginRight: "10px" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircleExclamation}
            style={{ color: "#ff0f0f", marginRight: "10px" }}
          />
        )}
        {message.message}
      </div>
    </div>
  );
}
