import { Button } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);


  return (
    <Fragment>
        <ProductList products={products} />
      <Button variant="contained" >Add product</Button>
    </Fragment>
  );
}
