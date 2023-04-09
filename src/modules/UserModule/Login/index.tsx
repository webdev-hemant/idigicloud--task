import loginSvg from "images/login.svg";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles.loginWrapper}>
      <h1>Login page</h1>
      <div className={styles.imageWrapper}>
        <img src={loginSvg} loading="lazy" alt="login svg" />
      </div>
    </div>
  );
};

export default Login;
