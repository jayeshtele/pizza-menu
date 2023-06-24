import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas && (
        <ul className="pizzas">
          {pizzaData.map((pizza, idx) => (
            <Pizza
              key={idx}
              name={pizza.name}
              photoName={pizza.photoName}
              price={pizza.price}
              ingredients={pizza.ingredients}
            />
          ))}
        </ul>
      )}
      
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;

  // if (hour >= openHours && hour <= closeHours) {
  //   alert("We're currently open");
  // } else {
  //   alert("Sorry we're closed");
  // }

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're open until {closeHours}:00. Come visit us or order online{" "}
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </li>
  );
}
