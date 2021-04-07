import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Cards.css";



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CustomizedCategories = () => {
  const [catname, setcatName] = useState("");
  const [catimg, setcatImg] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = { catname, catimg };
    fetch("http://localhost:3001/customizedCategories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).then((response) => {
      console.log(response.status);
    });
  };

  useEffect(() => {
    fetch("http://localhost:3001/CustomizedCategories/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  const handleClick = (id_c) => {
    fetch("http://localhost:3001/CustomizedCategories/" + id_c, {
      method: "DELETE",
    }).then((data) => {
      
    });
  };
  const classes = useStyles();
  return (
    <div>








      <div className="categories">
        {data.map((category) => (
          <div key={category.id}>
            <Link to={`/items/${category.id}`}>
              <Card className={classes.root}>
                <CardActionArea>

                  <CardContent>
                    <CardMedia

                      height="250"


                    />

                    <img src="./photo/jacket.jpg" alt="" />

                  </CardContent>
                </CardActionArea>
                <CardActions>

                  <Button size="big" color="primary" onClick={() => handleClick(category.id)}>
                    Delete
        </Button>
                  <h5>{category.catname}</h5>
                </CardActions>

              </Card>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomizedCategories;

