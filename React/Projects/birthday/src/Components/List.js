import React from "react";

const List = ({ people }) => {
    console.log("data",people)
  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;
        console.log(id,name,age);
        return (
          <div key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
