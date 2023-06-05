import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({ danger, success }) {
  console.log(danger);
  const classes = clsx(styles.button, {
    [styles.active]: true,
    [styles.danger]: danger,
    [styles.success]: success,
  });
  return (
    <>
      {/* <button className={styles.button}>Click me !</button> */}
      {/* Props className nhận kiểu dữ liệu là chuỗi! */}
      {/* <button className={`${styles.button} ${styles.active}`}>
        Click me !
      </button> */}
      {/* <button className={[styles.button, styles.active].join(" ")}>
        Click me !
      </button> */}
      <button className={classes}>Click me !</button>
    </>
  );
}

export default Button;
