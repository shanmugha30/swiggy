import {FOOD_COM_URL} from "../utils/constants";

const RestroCard=(props)=>{
    const {resData}=props;
    const {name,avgRating,cuisines,cloudinaryImageId,areaName}=resData?.info;
    //console.log(resData?.info.cloudinaryImageId)
    
    return (
        <div className="res-card" style={{backgroundColor:"lightgray"}}>
            <img src={FOOD_COM_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{areaName}</h4>
        </div>
    );
}

export default RestroCard;