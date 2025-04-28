import { useState } from "react";
import Interests from "./components/Interests";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import styles from "./styles.module.css";

const TabForm = () => {
  const [formData, setFormData] = useState({
    theme: "light",
    interests: [],
    name: "",
    age: "",
    email: "",
  });
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};

        if (!formData.name || formData.name.length < 2) {
          err.name = "Please enter a valid name";
        }

        if (!formData.age || formData.age < 18) {
          err.age = "Please enter a valid age";
        }

        if (
          !formData.email ||
          !formData.email.includes("@") ||
          !formData.email.includes(".") ||
          formData.email.length < 3
        ) {
          err.email = "Please enter a valid email";
        }

        setErrors(err);
        return Object.keys(err).length < 1;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (!formData.interests || formData.interests < 1) {
          err.interests = "Please select interests";
        }

        setErrors(err);
        return Object.keys(err).length < 1;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNext = () => {
    const valid = tabs[activeTab].validate();

    if (valid) setActiveTab(activeTab + 1);
  };

  const handlePrev = () => {
    const valid = tabs[activeTab].validate();

    if (valid) setActiveTab(activeTab - 1);
  };

  const handleSubmit = () => {
    console.log(formData);

    alert("Please check the console");
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => {
          return (
            <button
              key={index}
              className={`${styles.tabs__btn} ${
                activeTab === index ? styles["tabs__btn--active"] : ""
              }`}
              onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      <div className={styles["tabs__content"]}>
        <ActiveTabComponent
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />

        <div className={styles["control__btns"]}>
          {activeTab > 0 && (
            <button type="button" onClick={handlePrev}>
              Prev
            </button>
          )}

          {activeTab < tabs.length - 1 && (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          )}

          {activeTab === tabs.length - 1 && (
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabForm;
