export const ImageUpload = ({ id, onChange }) => {
  return <input id={id} type="file" accept="image/*" onChange={onChange} />;
};
