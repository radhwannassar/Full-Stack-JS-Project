import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import "./Cards.css";
const Relai = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="categories">
      {data.map((category) => (
        <div key={category.id}>
          <Link to={`/items/${category.id}`}>
          <div className="card-container ">
            <div className="image-container">
              <img src="./photo/jeans.jpg" alt="" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h5>{category.name}</h5>
              </div>
            </div>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Relai;

 
// {category.img}
