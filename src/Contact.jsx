import React, { useState } from "react";

const Contact = () => {

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  let name, value;

  const InputEvent = (e) => {

    name = e.target.name;
    value = e.target.value;

    setUser(() => {

      return {
        ...user,
        [name]: value,
      }

    })
  };


  const PostUser = async (event) => {
    event.preventDefault();

    const { name, phone, email, msg } = user;

    const response = await fetch('/submit', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name, phone, email, msg
      })
    });

    const res = response.json();
    if (res.status === 422 || !res) {
      window.alert("Registeration Unsuccessfull")
    } else {
      window.alert("Registeration Successfull")
    }
  }



  return (
    <>
      <div className="my-3">
        <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form >
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={user.name}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={user.phone}
                  onChange={InputEvent}
                  placeholder="mobile number"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={user.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={user.msg}
                  onChange={InputEvent}
                  autoComplete="off"
                ></textarea>
              </div>

              <div className="col-12">
                <input className="btn btn-outline-primary" type="submit" onClick={PostUser} value="Submit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;