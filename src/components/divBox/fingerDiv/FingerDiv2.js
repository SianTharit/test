import { useBody } from "../../../context/BodyContext";
import classes from "./FingerDiv2.module.css";

function FingerDiv2() {
   const { finger2 } = useBody();
   return (
      <div className={classes.wrapper}>
         <div className={finger2 ? classes.div1_active : classes.div1}></div>
         <div className={finger2 ? classes.div2_active : classes.div2}></div>
         <div className={finger2 ? classes.div3_active : classes.div3}></div>
         <div className={finger2 ? classes.div4_active : classes.div4}></div>
         <div className={finger2 ? classes.div5_active : classes.div5}></div>
      </div>
   );
}

export default FingerDiv2;
