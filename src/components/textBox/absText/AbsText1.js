import Card from "../../ui/Card";
import classes from "./AbsText1.module.css";

function AbsText1() {
   return (
      <div className={classes.wrapper}>
         <Card>
            <div className={classes.wrapper_text}>ลิ้นปี่</div>
         </Card>
         <div className={classes.wrapper_line}>
            <div className={classes.line}></div>
            <div className={classes.line2}></div>
         </div>
      </div>
   );
}

export default AbsText1;
