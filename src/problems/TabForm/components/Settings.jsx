import React from "react";

const Settings = ({ formData, setFormData }) => {
  const themes = ["light", "dark"];

  const handleThemeChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      theme: e.target.value,
    }));
  };

  return (
    <fieldset>
      <legend>Choose a theme</legend>

      {themes.map((theme, index) => {
        return (
          <div className="form__element__radio" key={index}>
            <label
              htmlFor={theme}
              style={{
                textTransform: "capitalize",
              }}
            >
              {theme}
            </label>
            <input
              type="radio"
              value={theme}
              id={theme}
              name={theme}
              checked={formData.theme === theme}
              onChange={handleThemeChange}
            />
          </div>
        );
      })}
    </fieldset>
  );
};

export default Settings;
