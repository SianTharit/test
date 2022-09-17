import Card from "../../ui/Card";
import classes from "./AbsText7.module.css";

function AbsText7() {
   return (
      <div className={classes.wrapper}>
         <div className={classes.wrapper_line}>
            <div className={classes.line2}></div>
            <div className={classes.line}></div>
         </div>
         <Card>
            <div className={classes.wrapper_text}>รอบสะดือ</div>
         </Card>
      </div>
   );
}

export default AbsText7;
