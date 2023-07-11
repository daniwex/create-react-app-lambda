import Button from "./Button";

export default function Form({
  name,
  Fname,
  btnname,
  formName,
  onsubmit,
  onclick,
  onchange,
  status,
  title,
  onchangetitle,
}) {
  return (
    <div className={name}>
      <form
        className={formName}
        onSubmit={(e) => {
          e.preventDefault();
          onsubmit();
        }}
      >
        <h2> {Fname} </h2>
        <i
          className="fa-sharp fa-light fa-x"
          onClick={() => {
            onclick();
          }}
        ></i>
        <div className="formControl">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onchangetitle}
          />
        </div>
        <div className="formControl">
          <label htmlFor="status">Status</label>
          <select value={status} onChange={onchange}>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </div>
        <Button name={btnname} color="#646FF0" type="submit" mr="10px" />
        <Button name="Cancel" color="#CCCDDF" modal={onclick} />
      </form>
    </div>
  );
}
