export default function Button({ name, modal, color = "#646FF0", type, mr }) {
  const mm = mr ? mr : "";
  const styles = {
    button: {
      border: "none",
      backgroundColor: color,
      color: "white",
      padding: "13px 28px",
      borderRadius: "7px",
      cursor: "pointer",
      marginRight: mm,
    },
  };

  return (
    <button style={styles.button} type={type ? type : ""} onClick={modal}>
      {name}
    </button>
  );
}
