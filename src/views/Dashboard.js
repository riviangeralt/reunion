import Filter from "components/others/Filter";
import PropertyCard from "components/others/PropertyCard";
import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import DummyData from "../generated.json";

const Dashboard = () => {
  const [filteredProperties, setFilteredProperties] = useState(
    DummyData.slice(0, 50)
  );
  return (
    <div className={styles.container}>
      <Filter
        data={filteredProperties}
        setData={setFilteredProperties}
        resetData={DummyData.slice(0, 50)}
      />
      <div className={styles.properties}>
        {filteredProperties.map((item, index) => {
          return <PropertyCard key={index} data={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
