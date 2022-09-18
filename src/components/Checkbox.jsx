export const Checkbox = ({ value, setValue, setMaxDuration }) => {
  return (
    <div className="root-checkbox d-flex">
      <div className="custom-checkbox">
        <input
          onChange={(event) => {
            setValue(event.target.checked);
            event.target.checked ? setMaxDuration(240) : setMaxDuration(182);
          }}
          className="checkbox"
          id="tuberculosis"
          name="data"
          type="checkbox"
          value="tuberculosis"
          checked={value}></input>
        <label for="tuberculosis"></label>
      </div>
      <p className="ml-30">I have tuberculosis</p>
    </div>
  );
};
