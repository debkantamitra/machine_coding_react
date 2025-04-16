import styles from "../styles.module.css";
import Error from "./Error";

const Interests = ({ formData, setFormData, errors }) => {
  const handleFormData = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      interests: e.target.checked
        ? [...prevData.interests, e.target.name]
        : prevData.interests.filter((item) => item !== e.target.name),
    }));
  };

  return (
    <>
      <div className={styles["form__element__checkbox"]}>
        <label htmlFor="coding">Coding</label>
        <input
          type="checkbox"
          name="coding"
          id="coding"
          checked={formData.interests.includes("coding")}
          onChange={handleFormData}
        />
      </div>

      <div className={styles["form__element__checkbox"]}>
        <label htmlFor="music">Music</label>
        <input
          type="checkbox"
          name="music"
          id="music"
          checked={formData.interests.includes("music")}
          onChange={handleFormData}
        />
      </div>

      <div className={styles["form__element__checkbox"]}>
        <label htmlFor="cinema">Cinema</label>
        <input
          type="checkbox"
          name="cinema"
          id="cinema"
          checked={formData.interests.includes("cinema")}
          onChange={handleFormData}
        />
      </div>

      <div className={styles["form__element__checkbox"]}>
        <label htmlFor="photography">Photography</label>
        <input
          type="checkbox"
          name="photography"
          id="photography"
          checked={formData.interests.includes("photography")}
          onChange={handleFormData}
        />
      </div>

      <Error error={errors.interests} />
    </>
  );
};

export default Interests;
