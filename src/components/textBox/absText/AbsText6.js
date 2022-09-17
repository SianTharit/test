import Card from "../../ui/Card";
import classes from "./AbsText6.module.css";

function AbsText6() {
   return (
      <div className={classes.wrapper}>
         <div className={classes.wrapper_line}>
            <div className={classes.line2}></div>
            <div className={classes.line}></div>
         </div>
         <Card>
            <div className={classes.wrapper_text}>
               <span>ช่องท้อง</span>
               <span>ด้านบนซ้าย</span>
            </div>
         </Card>
      </div>
   );
}

export default AbsText6;
