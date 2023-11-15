// eslint-disable-next-line react/prop-types
const SetIcons = ({ icon, title, supTitle }) => {
  return (
    <div className="d-flex gap-5 align-items-center py-2"
    >
      {icon}
      <div>
        <p>{title}</p>
        <p>{supTitle}</p>
      </div>
    </div>
  );
};

export default SetIcons;
