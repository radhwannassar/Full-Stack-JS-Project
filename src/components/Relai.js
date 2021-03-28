import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
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
    <div>
      <div className="Category">
        {data.map((category) => (
          <div key={category.id}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <label>Category Name:</label>
                  <p>{category.name}</p>
                </Card.Title>
                <Card.Text>
                  <label>Category Picture:</label>
                  <div>{category.img}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Relai;
