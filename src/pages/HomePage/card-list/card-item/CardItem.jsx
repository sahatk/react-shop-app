import React from "react";
import styles from "./CardItem.module.scss";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../../hooks/redux";
import { addProduct } from "../../../../store/cart/cart.slice";

const CardItem = ({ item }) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cartSlice);
  const productMatching = products.some((product) => product.id === item.id);

  const handleAddToCart = () => {
    dispatch(addProduct(item));
  };

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          width={"80%"}
          height={"200px"}
          alt="product card"
        />
      </Link>

      <h5>{item.title.substring(0, 15)}...</h5>

      <div>
        <button
          type="button"
          disabled={productMatching}
          onClick={handleAddToCart}
        >
          {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
        </button>
        <p>${item.price}</p>
      </div>
    </li>
  );
};

export default CardItem;
