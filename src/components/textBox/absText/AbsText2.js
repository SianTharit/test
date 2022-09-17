import Card from "../../ui/Card";
import classes from "./AbsText2.module.css";

function AbsText2() {
   return (
      <div className={classes.wrapper}>
         <Card>
            <div className={classes.wrapper_text}>
               <span>ช่องท้อง</span>
               <span>ด้านบนขวา</span>
            </div>
         </Card>
         <div className={classes.wrapper_line}>
            <div className={classes.line}></div>
            <div className={classes.line2}></div>
         </div>
      </div>
   );
}

export default AbsText2;
