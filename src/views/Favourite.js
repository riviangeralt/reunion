import styles from "../components/others/Filter.module.css";
import React from "react";
import styles2 from "./Dashboard.module.css";
import { useSelector } from "react-redux";
import PropertyCard from "components/others/PropertyCard";

const Favourite = () => {
  const { favProp } = useSelector((state) => state.favSlice);
  return (
    <div className={styles2.container}>
      <div className={styles.filter}>
        <div className={styles.filterHead}>
          <h5 className={styles.filterHeading}>Your Favourite</h5>
          <input
            className={styles.filterInput}
            type={"text"}
            placeholder="Search with search bar"
          />
        </div>
        <div className={styles2.properties}>
          {favProp.length > 0
            ? favProp.map((item, index) => {
                return <PropertyCard key={index} data={item} index={index} />;
              })
            : "No Favourites available"}
        </div>
      </div>
    </div>
  );
};

export default Favourite;
