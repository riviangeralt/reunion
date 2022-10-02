import React from "react";
import styles from "./Filter.module.css";
import Button from "../form-components/Button";

const Filter = (props) => {
  const { data, setData, resetData } = props;
  const onFilterProperties = (e) => {
    let dummyProperties = [...resetData];
    e.preventDefault();
    let newData = new FormData(e.target);
    let parsedData = Object.fromEntries(newData);
    if (parsedData && parsedData.location) {
      dummyProperties = dummyProperties.filter((element) =>
        element.country
          .toLowerCase()
          .includes(parsedData.location.toLowerCase())
      );
    }
    if (parsedData && parsedData.move) {
      dummyProperties = dummyProperties.filter(
        (element) =>
          Date.parse(element.lastSaleDate) >= Date.parse(parsedData.move)
      );
    }
    if (parsedData && parsedData.price) {
      let [minPrice, maxPrice] = parsedData.price
        .replaceAll("$", "")
        .includes("+")
        ? parsedData.price.replaceAll("$", "").split("+")
        : parsedData.price.replaceAll("$", "").split("-");
      console.log(minPrice);
      dummyProperties = dummyProperties.filter(
        (element) =>
          element.rent >= parseInt(minPrice) &&
          element.rent <= parseInt(maxPrice || 999999)
      );
    }
    if (parsedData && parsedData.type) {
      dummyProperties = dummyProperties.filter(
        (element) => element.propertyType === parsedData.type
      );
    }
    setData(dummyProperties);
  };
  return (
    <div className={styles.filter}>
      <div className={styles.filterHead}>
        <h5 className={styles.filterHeading}>Search for properties to rent</h5>
        <input
          className={styles.filterInput}
          type={"text"}
          placeholder="Search with search bar"
        />
      </div>
      <form onSubmit={onFilterProperties} className={styles.filterForm}>
        <div className={styles.formControl}>
          <h5>Location</h5>
          <input type="text" name="location" />
        </div>
        <div className={styles.formControl}>
          <h5>When</h5>
          <input type="date" name="move" />
        </div>{" "}
        <div className={styles.formControl}>
          <h5>Price</h5>
          <select name="price">
            <option></option>
            <option>$0-$250</option>
            <option>$250-$500</option>
            <option>$500-$750</option>
            <option>$750-$900</option>
            <option>$900+</option>
          </select>
        </div>{" "}
        <div className={styles.formControl}>
          <h5>Property Type</h5>
          <select name="type">
            <option></option>
            <option>Commercial Real Estate</option>
            <option>Apartment</option>
            <option>Multifamily Residential</option>
            <option>Condominium</option>
            <option>Personal Property</option>
            <option>Residential Area</option>
            <option>Single Family Home</option>
          </select>
        </div>
        <div className={styles.formControl}>
          <Button label="Search" />
        </div>
      </form>
    </div>
  );
};

export default Filter;
