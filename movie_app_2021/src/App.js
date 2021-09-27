import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    // rating: 5.0,
  },

  {
    id: 2,
    name: "samgyetang",
    image:
      "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.5,
  },

  {
    id: 3,
    name: "watermelon",
    image:
      "https://ww.namu.la/s/39b3e728107195de9f39f45cb873f3a1ab60f2ddb8a7b044784c76d7d19d476c00e588331c7928b610ab49dc429cb3fbbbd6cb6332e046545a16c247beec948b9adb94e21941040c247aac315310191445229df0276c485fc341d3f1cd9af728",
    rating: 3.2,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
