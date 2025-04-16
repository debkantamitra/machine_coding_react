import styles from "../styles.module.css";
import Error from "./Error";

// htmlFor is equivalent to for in native html
const Profile = ({ formData, setFormData, errors }) => {
  const handleFormData = (e) => {
    // whenever working with objects, use prevData
    // mechanism
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className={styles["form__element"]}>
        <label htmlFor="name">Name</label>
        <span>:</span>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleFormData}
          />
          <Error error={errors.name} />
        </div>
      </div>

      <div className={styles["form__element"]}>
        <label htmlFor="age">Age</label>
        <span>:</span>
        <div>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleFormData}
          />
          <Error error={errors.age} />
        </div>
      </div>

      <div className={styles["form__element"]}>
        <label htmlFor="email">Email</label>
        <span>:</span>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleFormData}
          />

          <Error error={errors.email} />
        </div>
      </div>
    </>
  );
};

export default Profile;
