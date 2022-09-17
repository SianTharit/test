import Card from "../../ui/Card";
import classes from "./AbsText3.module.css";

function AbsText3() {
   return (
      <div className={classes.wrapper}>
         <Card>
            <div className={classes.wrapper_text}>
               <span>ช่องท้อง</span>
               <span>ด้านล่างขวา</span>
            </div>
         </Card>
         <div className={classes.wrapper_line}>
            <div className={classes.line}></div>
            <div className={classes.line2}></div>
         </div>
      </div>
   );
}

export default AbsText3;
