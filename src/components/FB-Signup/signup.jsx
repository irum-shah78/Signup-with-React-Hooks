import React, { useState } from "react"

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");

  function enterName(e) {
    setName(e?.target?.value)
  }

  function enterEmail(e) {
    setEmail(e?.target?.value)
  }
  function enterPhone(e) {
    setPhone(e?.target?.value)
  }
  function enterPwd(e) {
    setPwd(e?.target?.value)
  }

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "lightgray", height: "100%" }}>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-6 col-md-4 col-12 mt-5 pt-5 text-md-start">
            <h1 className="text-primary"> facebook </h1>
            <p className="fw-bold fs-4" style={{ width: "570px" }}>Connect with the friends and the world around you on facebook.</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-2 p-2" style={{ borderRadius: "6px", backgroundColor: "white" }}>
            <form className="mt-1">
              <div className="mb-2">
                <input type="text" className="form-control p-2" placeholder="Enter your Name" onChange={(e) => enterName(e)} />
              </div>
              <div className="mb-2">
                <input type="email" className="form-control p-2" placeholder="Enter your Email" onChange={(e) => enterEmail(e)} />
              </div>
              <div className="mb-2">
                <input type="number" className="form-control p-2" placeholder="Enter your Phone" onChange={(e) => enterPhone(e)} />
              </div>
              <div className="mb-2">
                <input type="password" className="form-control p-2" placeholder="Create Password" onChange={(e) => enterPwd(e)} />
              </div>
              <button type="submit" className="btn btn-primary fs-5 p-2 mb-3" style={{ width: "100%" }}> Sign up </button>
              <p className="text-center"><span style={{ textDecoration: "underline" }}>Already have account?</span>
                <strong stye={{ cursor: "pointer" }}>Login</strong></p>
            </form>
          </div>
        </div>
      </div>


      <div className="container text-align-center">
        <div className="col-lg-12">
          <ul className="">
            <li><strong>Name:</strong> {name}</li>
            <li><strong>Email:</strong> {email}</li>
            <li><strong>Phone:</strong> {phone}</li>
            <li><strong>Password:</strong> {pwd}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Signup;