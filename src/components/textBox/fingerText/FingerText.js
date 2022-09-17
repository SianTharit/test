import Card from "../../ui/Card";
import classes from "./FingerText.module.css";

function FingerText1(props) {
   return (
      <div className={classes.wrapper}>
         <div className={classes.wrapper_line}>
            <div className={classes.line2}></div>
            <div className={classes.line}></div>
         </div>
         <Card>
            <div className={classes.wrapper_text}>{props.text}</div>
         </Card>
      </div>
   );
}

export default FingerText1;
