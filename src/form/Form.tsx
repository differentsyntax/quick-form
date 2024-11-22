import { ChangeEvent, FormEvent, useState } from "react";
import { initialUserState, User } from "../utilities";
import "./Form.css";

type FormProps = {
  onSubmit: (userData: User) => void;
};

const Form = (props: FormProps) => {
  const [formData, setFormData] = useState<User>(initialUserState);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || Number(formData.age) <= 0) {
      alert("Please fill in all fields correctly.");
      return;
    }
    props.onSubmit(formData);
    setFormData(initialUserState);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target && e.target.value) {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]:
          e.target.name === "age" ? Number(e.target.value) : e.target.value,
      }));
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form-container">
        <div className="form-components">
          <label>Name</label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
        </div>

        <div className="form-components">
          <label>Email</label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>

        <div className="form-components">
          <label>Age</label>
          <input
            required
            type="number"
            value={formData.age}
            onChange={handleChange}
            name="age"
          />
        </div>

        <div className="form-components">
          <label>Gender</label>
          <select value={formData.gender} onChange={handleChange} name="gender">
            <option value="Male">{`Male`}</option>
            <option value="Female">{`Female`}</option>
            <option value="Other">{`Other`}</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
