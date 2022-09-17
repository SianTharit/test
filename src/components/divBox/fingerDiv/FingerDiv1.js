import { useBody } from "../../../context/BodyContext";
import classes from "./FingerDiv1.module.css";

function FingerDiv1() {
   const { finger1 } = useBody();
   return (
      <div className={classes.wrapper}>
         <div className={finger1 ? classes.div1_active : classes.div1}></div>
         <div className={finger1 ? classes.div2_active : classes.div2}></div>
         <div className={finger1 ? classes.div3_active : classes.div3}></div>
         <div className={finger1 ? classes.div4_active : classes.div4}></div>
      </div>
   );
}

export default FingerDiv1;
