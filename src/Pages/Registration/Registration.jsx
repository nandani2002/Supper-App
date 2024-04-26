import React, { useState } from "react";
import BgImage from "../../assets/image 13.png";
import styles from "./../Registration/Registration.module.css";

export default function Registration() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !username || !email || !mobile) {
      alert("Please fill all the fields");
      return;
    } else {
      const currentUser = { name, username, email, mobile };
      localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser));
      }
      console.log(JSON.parse(localStorage.getItem("currentUser")));
  };
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.leftheader}>
      <h1>
      
      Discover New things on <br></br>Superapp
    </h1>
    </div>
        <img src={BgImage} className={styles.BgImage} alt="BackgroundImage" />
     

      </div>
      <div className={styles.right}>
     
        <div >
        <h2>Super app</h2>
          <h3>Create your new account</h3>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
           <br></br>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <br></br>
          <input
            type="tel"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
           <br></br>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              value={consent}
              onChange={(e) => setConsent(e.target.value)}
            />
             

            <label htmlFor="Mobile">
              Share my registration data with Superapp
            </label>
          </div>
          <button onClick={handleSubmit}>SIGN UP</button>
        </div>
        <div className={styles.footer}>
          
          <p>
            By clicking on Sign up. you agree to Superapp{""} <span>Terms and Conditions
            of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};
