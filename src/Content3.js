import { useEffect, useMemo, useState, useRef } from "react";

// useMemo giúp tránh thực hiện lại một logic nào đó không cần thiết

function Content3() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const handleAdd = () => {
    setProducts([...products, { name, price: +price }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  const nameRef = useRef();

  //   const [total, setTotal] = useState(0);
  //   useEffect(() => {
  //     setTotal(() => {
  //       let result = products.reduce((total, product) => {
  //         console.log("Dang tinh toan...");
  //         return total + product.price;
  //       }, 0);
  //       return result;
  //     });
  //   }, [products]);

  const total = useMemo(() => {
    const result = products.reduce((total, product) => {
      console.log("Dang tinh toan...");
      return total + product.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <>
      <h1>Nhập hàng hoá...</h1>
      <input
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên hàng hoá"
      ></input>
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Nhập giá"
      ></input>
      <button onClick={handleAdd}>Thêm sản phẩm</button>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              STT:{index+1} -- Tên sản phẩm:{product.name} --- Giá:
              {product.price}
            </li>
          );
        })}
      </ul>
      <p>Tổng : {total}</p>
    </>
  );
}

export default Content3;
