import React, { useEffect, useState } from "react";
import styles from "./Property.module.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "app/features/favSlice";

const PropertyCard = (props) => {
  const { data, index } = props;
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const { favProp } = useSelector((state) => state.favSlice);
  const fetchImage = async () => {
    let item = {
      category: "places",
      image_type: "",
      colors: "",
      _token: "A1GlBz6e8OegXInTxWhNGcF5cvmi5XDEQt7zGk8M",
    };
    var form_data = new FormData();
    for (var key in item) {
      form_data.append(key, item[key]);
    }
    let res = await fetch(`https://source.unsplash.com/random/?house,${index}`);
    return res.url;
  };
  let isDataPresent = favProp.find((item) => item.id === data.id)
    ? true
    : false;

  useEffect(() => {
    fetchImage().then((res) => setImage(res));
  }, []);

  return (
    <div className={styles.card}>
      <img src={image} alt="house" />
      <div className={styles.cardInfo}>
        <div className={styles.infoHeader}>
          <div className={styles.homeInfo}>
            <h4>
              ${data?.rent}
              <span>/month</span>
            </h4>
            <h3>{data?.name}</h3>
          </div>
          <div
            className={styles.favouriteButton}
            onClick={() =>
              dispatch(
                toggleFavourite({
                  type: isDataPresent ? "remove" : "add",
                  data,
                })
              )
            }
          >
            {isDataPresent ? (
              <Icon icon="ant-design:heart-filled" width={25} />
            ) : (
              <Icon icon="akar-icons:heart" width={25} />
            )}
          </div>
        </div>
        <p
          style={{
            marginTop: 16,
            borderBottom: "1px solid #ccc",
            paddingBottom: 16,
          }}
        >
          {data?.address}
        </p>
        <div className={styles.area}>
          <p>
            <Icon icon="icon-park-twotone:bedside-two" />4 Beds
          </p>
          <p>
            <Icon icon="cil:bathroom" />
            {data?.bathrooms} Bathrooms
          </p>
          <p>
            <Icon icon="majesticons:map-marker-area-line" />
            {data?.squareFootage} sqft
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
