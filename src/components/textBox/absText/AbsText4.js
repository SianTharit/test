import Card from "../../ui/Card";
import classes from "./AbsText4.module.css";

function AbsText4() {
   return (
      <div className={classes.wrapper}>
         <Card>
            <div className={classes.wrapper_text}>ท้องน้อย</div>
         </Card>
         <div className={classes.wrapper_line}>
            <div className={classes.line}></div>
            <div className={classes.line2}></div>
         </div>
      </div>
   );
}

export default AbsText4;
