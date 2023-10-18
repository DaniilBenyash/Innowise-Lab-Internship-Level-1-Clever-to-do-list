export const Textarea = ({ label, cols, rows, placeholder, value, onChange }) => {
  const handleChangeTextarea = (ev) => {
    onChange(ev.target.value);
  };
  return (
    <>
      <label htmlFor="">{label}</label>
      <textarea
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={handleChangeTextarea}></textarea>
    </>
  );
};
