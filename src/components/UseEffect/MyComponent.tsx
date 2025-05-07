import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const MyComponent = () => {
  const [data, setData] = useState<null | Product>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/1");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Description: {data.description}</p>
          <p>Price: ${data.price}</p>
          <p>Discount: {data.discountPercentage}%</p>
          <p>Rating: {data.rating}</p>
          <p>Stock: {data.stock}</p>
          <p>Brand: {data.brand}</p>
          <p>Category: {data.category}</p>
          {/* <img
                src={data.thumbnail}
                alt={data.title}
                style={{ width: "200px" }}
              /> */}
          <p>Thumbnail: {data.thumbnail}</p>
          <div>
            <h3>Images:</h3>
            {data.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${data.title} ${index + 1}`}
                style={{ width: "100px", marginRight: "10px" }}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
