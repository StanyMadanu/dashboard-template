import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ listData }) => {
  const [selectedItem, setSelectedItem] = useState(
    listData[listData.length - 1]
  );

  const handleSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedItem}
        </button>
        <ul className="dropdown-menu">
          {listData.map((item) => (
            <li key={item}>
              <Link
                to="#"
                className="dropdown-item fs-13"
                onClick={() => handleSelected(item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
