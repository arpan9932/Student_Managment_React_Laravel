import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

export default function Create() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    http.post("/student", inputs).then((response) => {
      navigate("/view");
    });
  };

  return (
    <div className="container mt-5">
      <section className="intro">
        <div className="mask d-flex align-items-center h-100 gradient-custom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card">
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2">Add Student</h3>
                    <form onSubmit={submitForm}>
                      <div className="form-outline">
                        <label className="form-label" htmlFor="Name">
                          Name
                        </label>
                        <input
                          type="text"
                          id="Name"
                          className="form-control"
                          name="name"
                          value={inputs.name || ""}
                          onChange={handleChange}
                        />
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-outline datepicker">
                        <label htmlFor="DateofBirth" className="form-label">
                          Age
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="DateofBirth"
                          name="age"
                          value={inputs.age || ""}
                          onChange={handleChange}
                        />
                        <span className="text-danger"></span>
                      </div>
                      <div className="form-outline">
                        <label className="form-label" htmlFor="emailAddress">
                          Email
                        </label>
                        <input
                          type="email"
                          id="emailAddress"
                          className="form-control"
                          name="email"
                          value={inputs.email || ""}
                          onChange={handleChange}
                        />
                        <span className="text-danger"></span>
                      </div>

                      <div className="form-outline">
                        <label className="form-label" htmlFor="city">
                          Address
                        </label>
                        <input
                          type="text"
                          id="city"
                          className="form-control"
                          name="address"
                          value={inputs.address || ""}
                          onChange={handleChange}
                        />
                        <span className="text-danger"></span>
                      </div>
                      <div className="mt-4">
                        <button className="btn btn-warning btn-lg w-100">Add</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
