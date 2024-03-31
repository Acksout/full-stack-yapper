import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">He</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">She</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
