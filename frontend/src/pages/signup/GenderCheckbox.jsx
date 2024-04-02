const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "He" ? "selected" : ""} `}>
                    <span className="label-text">He</span>
                    <input
                        type="checkbox"
                        checked={selectedGender === "He"}
                        onChange={() => {
                            onCheckboxChange("He")
                        }}
                        className="checkbox checkbox-primary"
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "She" ? "selected" : ""} `}>
                    <span className="label-text">She</span>
                    <input
                        type="checkbox"
                        checked={selectedGender === "She"}
                        onChange={() => {
                            onCheckboxChange("She")
                        }}

                        className="checkbox checkbox-primary"
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;