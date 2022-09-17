import BodyItem from "./BodyItem";
import classes from "./BodyList.module.css";

function BodyList(props) {
   const { isShow, datas } = props;
   return (
      <ul className={classes.list}>
         {/* {datas.map((data) => (
            <BodyItem
               key={data.id}
               id={data.id}
               image={data.image}
               title={data.title}
               detail={data.detail}
            />
         ))} */}
         {!isShow ? (
            <BodyItem
               id={datas[0].id}
               title={datas[0].title}
               image={datas[0].image}
               detail={datas[0].detail}
            />
         ) : (
            <BodyItem
               id={datas[1].id}
               title={datas[1].title}
               image={datas[1].image}
               detail={datas[1].detail}
            />
         )}
      </ul>
   );
}

export default BodyList;
