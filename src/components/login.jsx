import React, { useState, useEffect } from "react";
import "../login.css";
import bull_login from "../assets/videos/bull_login.gif";
import bear_login from "../assets/videos/bear_login.gif";
import dp_icon from "../assets/images/dp_log_launcher.png";
import alertsound from "../assets/audios/notification.wav";
import errorSound from "../assets/audios/errorSound.wav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app, db } from "./config";
import { collection, query, where, getDocs } from "firebase/firestore";

import { useGlobalContext } from "../store/Contex";

const Login = () => {
  const {
    userDetails,
    setUserDetails,
    phoneNumber,
    setPhoneNumber,
    logout,
    setLogout,
  } = useGlobalContext();
  const [IsOTPBtnClicked, setIsOTPBtnClicked] = useState(false);
  const [isTnC_Checked, setIsTnC_Checked] = useState(false);

  const [isValidNumber, setisValidNumber] = useState(false);
  const [isValidotpNumber, setisValidotpNumber] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(59);
  const [buttonColor, setButtonColor] = useState("#rgb(81 81 81)");
  const [appVerifierI, setAppVerifierI] = useState();
  const [otp, setotp] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (logout === true) {
      toast.success("Logged out successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      setLogout(false);
    }
  }, [logout]);

  useEffect(() => {
    setPhoneNumber("");
  }, []);
  useEffect(() => {
    if (IsOTPBtnClicked) {
      const timer =
        countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [IsOTPBtnClicked, countdown]);

  useEffect(() => {
    // Change button color when countdown reaches 0
    if (countdown === 0) {
      setButtonColor("#0e2a5b");
      setResendDisabled(false); // Enable resend button when countdown reaches 0
    }
  }, [countdown, IsOTPBtnClicked]);

  const handlePhoneNumberChange = (e) => {
    let value = e.target.value.trim(); // Remove leading and trailing spaces

    // Number validation
    setisValidNumber(() => (value.length === 10 ? true : false));

    if (value.length > 0) {
      // If the input is not empty
      if (parseInt(value[0]) < 6 || parseInt(value[0]) > 9) {
        // If the first digit is not between 6 and 9
        value = "6"; // Default to 6
      }
      value = value.replace(/\D/g, "").slice(0, 10); // Remove non-digit characters and limit to 10 digits
    }
    setPhoneNumber(value); // Update the state with the phone number value
  };

  const handleotpChange = (e) => {
    let value = e.target.value.trim(); // Remove leading and trailing spaces
    // otp validation
    setisValidotpNumber(() => (value.length === 6 ? true : false));
    if (value.length > 0) {
      // If the input is not empty

      value = value.replace(/\D/g, "").slice(0, 6); // Remove non-digit characters and limit to 10 digits
    }
    setotp(value); // Update the state with the phone number value
  };

  // Function to check if user already exists in Firestore
  const checkUserExists = async (phoneNumber) => {
    try {
      const q = query(
        collection(db, "users"),
        where("phoneNumber", "==", phoneNumber)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        // User exists
        const userDetailsArray = [];
        querySnapshot.forEach((doc) => {
          const userDetails = doc.data();
          setUserDetails(userDetails);
          userDetailsArray.push(doc.data());
        });
        // Store user details array in session storage
        sessionStorage.setItem(
          "logged-in-session-ID",
          userDetailsArray[0].phoneNumber
        );

        console.log("session", userDetailsArray[0].phoneNumber);
        navigate("/dashboard-trades");
      } else {
        // User doesn't exist
        sessionStorage.setItem("logged-in-session-ID", phoneNumber);
        sessionStorage.setItem("username", "true");
        navigate("/user-name-preference");
      }
    } catch (error) {
      throw error;
    }
  };

  const sendOTP = () => {
    setShowSpinner(true);
    if (isTnC_Checked && isValidNumber) {
      const auth = getAuth(app);

      var appVerifier = new RecaptchaVerifier(auth, "verifier_container", {
        size: "invisible",
      });

      setAppVerifierI(appVerifier);

      signInWithPhoneNumber(auth, `+91${phoneNumber}`, appVerifier)
        .then((res) => {
          window.Cred = res;
          new Audio(alertsound).play();
          toast.success("OTP sent !!", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
          setIsOTPBtnClicked(true);
          setShowSpinner(false);
          console.log(res);
          console.log("otp sent");
        })
        .catch((err) => {
          console.log(err);
          new Audio(errorSound).play();
          toast.error("server broke :( ", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
          setShowSpinner(false);
        });
    } else if (!isValidNumber) {
      new Audio(errorSound).play();
      toast.error("Not a valid mobile number ", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      setShowSpinner(false);
      console.log("function");
    } else {
      new Audio(errorSound).play();
      toast.error(
        "Please accept DailyPunch's Terms & Condition to proceed further. ",
        {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        }
      );
      setShowSpinner(false);
    }
  };

  const resendOTP = () => {
    setButtonColor("#1010104d");
    setResendDisabled(true);
    setCountdown(59);
    const auth = getAuth(app);
    if (!appVerifierI) {
      var appVerifier = new RecaptchaVerifier(auth, "v_c", {
        size: "invisible",
      });
      setAppVerifierI(appVerifier);
    }

    signInWithPhoneNumber(auth, `+91${phoneNumber}`, appVerifierI)
      .then((res) => {
        window.Cred = res;
        new Audio(alertsound).play();
        toast.success("OTP sent !!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        setIsOTPBtnClicked(true);
        setShowSpinner(false);
        console.log(res);
        console.log("otp sent");
      })
      .catch((err) => {
        console.log(err);
        new Audio(errorSound).play();
        toast.error("server broke :( ", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        setShowSpinner(false);
      });
  };

  return (
    <div>
      <section
        className="login_container"
        style={{
          marginTop: "100px",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={bull_login} width={200} height={234} alt="bull"></img>
        {!IsOTPBtnClicked ? (
          <div
            className="login"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              padding: "20px",
              borderRadius: "0px",
              zIndex: "1",
            }}
          >
            <div className="login_form">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={dp_icon} width={70} alt="logo"></img>
              </div>

              <div className="signup/login">
                <div className="login_title" style={{ margin: "30px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "17px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        color: "#0e2a5b",
                      }}
                    >
                      Signup / Login
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "15px",
                      color: "#0e2a5b",
                    }}
                  >
                    <span>Add phone number below to begin signing up or</span>
                    <span>logging in to DailyPunch</span>
                  </div>
                </div>
                <div
                  className="login_input_container"
                  style={{ padding: "20px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "2px solid #022b691a",
                      padding: "10px",
                      borderRadius: "7px",
                    }}
                  >
                    <div className="country_code">
                      <span>+91</span>
                    </div>
                    <div
                      style={{
                        margin: "0px 20px 0px 10px",
                        height: "18px",
                        borderRight: "2px solid #022b691a",
                      }}
                    />
                    <div>
                      <input
                        placeholder="Phone Number"
                        id="telNo"
                        name="telNo"
                        type="number"
                        pattern="[6-9][0-9]*"
                        min="10"
                        max="10"
                        inputMode="numeric"
                        value={phoneNumber} // Bind the value to the state
                        onChange={handlePhoneNumberChange} // Call the function to handle value changes
                        style={{
                          border: "none",
                          width: "250px",
                          fontSize: "20px",
                          fontWeight: "400",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="t/c_container" style={{ padding: "7px 30px" }}>
                  <div style={{ display: "flex" }}>
                    <div style={{ padding: "4px 4px 4px" }}>
                      <input
                        type="checkBox"
                        style={{ height: "16px", width: "16px" }}
                        onChange={(e) => setIsTnC_Checked(e.target.checked)}
                      ></input>
                    </div>
                    <div>
                      <span
                        id="tos-label"
                        style={{ fontSize: "13px", color: "#555555" }}
                      >
                        I accept DailyPunch's&nbsp;
                        <a href="/s/terms" target="_blank">
                          Terms
                        </a>{" "}
                        &amp;{" "}
                        <a href="/s/privacy" target="_blank">
                          Privacy Policy
                        </a>{" "}
                        and <br></br>acknowledge the content provided is not
                        financial <br></br>advice.
                      </span>
                    </div>
                  </div>
                </div>
                <div id="verifier_container"></div>
                <div
                  className="submit_btn_container"
                  style={{
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    class="button-65"
                    onClick={() => {
                      sendOTP();
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <span>Send OTP</span>
                      {showSpinner ? (
                        <i
                          className="fa fa-spinner fa-spin"
                          style={{ marginLeft: "5px" }}
                        ></i>
                      ) : null}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="login"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              padding: "20px",
              borderRadius: "0px",
              zIndex: "1",
            }}
          >
            <div className="login_form">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={dp_icon} width={70} alt="logo"></img>
              </div>

              <div className="signup/login">
                <div className="login_title" style={{ margin: "30px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "17px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        color: "#0e2a5b",
                      }}
                    >
                      Verify OTP
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "15px",
                      color: "#0e2a5b",
                    }}
                  >
                    <span>
                      SMS with OTP sent to <b>+91-{phoneNumber}</b>.{" "}
                      <a href="/">Click here</a>{" "}
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span>to change phone number. </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div
                  className="login_input_container"
                  style={{ padding: "20px" }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: "13px", fontWeight: "bold" }}>
                      Enter 6-Digit OTP*
                    </div>
                    <div
                      style={{
                        borderBottom: "3px solid #2f80ed",
                        padding: "10px 0px 5px 0px",
                      }}
                    >
                      <input
                        placeholder="Enter 6 digit OTP"
                        id="telNo"
                        name="OTPno"
                        type="number"
                        min="6"
                        max="6"
                        inputMode="numeric"
                        value={otp} // Bind the value to the state
                        onChange={handleotpChange} // Call the function to handle value changes
                        autoComplete="false"
                        style={{
                          border: "none",
                          width: "250px",
                          fontSize: "20px",
                          fontWeight: "400",
                          letterSpacing: "5px",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="submit_btn_container"
                  style={{
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    class="button-65"
                    onClick={() => {
                      setShowSpinner(true);
                      if (isValidotpNumber) {
                        window.Cred.confirm(otp)
                          .then((res) => {
                            console.log(window.Cred);
                            checkUserExists(phoneNumber);
                            setShowSpinner(false);
                          })
                          .catch((res) => {
                            console.log(res);
                            new Audio(errorSound).play();
                            toast.error("Not valid OTP ", {
                              position: "top-right",
                              autoClose: 3000,
                              theme: "colored",
                            });
                            setShowSpinner(false);
                          });
                      } else {
                        new Audio(errorSound).play();
                        toast.error("Not valid OTP ", {
                          position: "top-right",
                          autoClose: 3000,
                          theme: "colored",
                        });
                        setShowSpinner(false);
                      }
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <span>Verify OTP</span>
                      {showSpinner ? (
                        <i
                          className="fa fa-spinner fa-spin"
                          style={{ marginLeft: "5px" }}
                        ></i>
                      ) : null}
                    </div>
                  </button>
                </div>
                <div id="v_c"></div>
                <div className="resend_otp_container">
                  <div
                    style={{
                      padding: "10px 17px 0px 17px",
                      fontWeight: "bold",
                    }}
                  >
                    <button
                      className="resend_btn"
                      onClick={resendOTP}
                      style={{
                        color: buttonColor,
                        border: "none",
                        backgroundColor: "white",
                        fontWeight: "bold",
                        cursor: countdown === 0 ? "pointer" : "default",
                      }} // Set color dynamically
                      disabled={resendDisabled}
                    >
                      <span>
                        RE-SEND OTP (0:
                        {countdown < 10 ? `0${countdown}` : countdown})
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <img
          src={bear_login}
          width={200}
          height={234}
          style={{ zIndex: "0" }}
          alt="bear"
        ></img>
      </section>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
