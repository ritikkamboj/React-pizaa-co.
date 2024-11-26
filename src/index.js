import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
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


function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />

        </div>


    )
}



function Header() {

    // const style = { color: 'red', fontSize: '48px', textTransform: "uppercase" }
    return <header className='header'>
        <h1 > The React Pizza making Company </h1>
    </header>
}
function Menu() {

    const pizzas = pizzaData;
    // const pizzas = [];
    const pizzaLen = pizzas.length;
    return <main className='menu'>
        <h2 >Below we have the items availaible </h2>
        {/* <Pizza name="Focaccia" ingredients="Bread with italian olive oil and rosemary" price={6} photoName="pizzas/focaccia.jpg" />
        <Pizza name="Focaccia" ingredients="Bread with italian olive oil and rosemary" price={6} photoName="pizzas/focaccia.jpg" /> */}
        {
            pizzaLen > 0 ? <ul className='pizzas'>
                {
                    pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name} />)
                }
            </ul> : <p>We are working on our Menu, Stay Excited !</p>
        }

    </main>
}


function Pizza(props) {

    // if (props.pizzaObj.soldOut)
    //     return null;
    return <li className={`pizza ${props.pizzaObj.soldOut ? 'sold-out' : ""}`}>
        <img src={props.pizzaObj.photoName} />
        <div>
            <h3>{props.pizzaObj.name}</h3>
            <p>{props.pizzaObj.ingredients}</p>
            <span>{props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.soldOut}</span>
        </div>

    </li>
}

function Footer() {

    const openTime = 12;
    const closeTime = 20;
    const hour = new Date().getHours();

    const open = hour >= openTime && hour <= closeTime;

    return <footer className='footer'>
        {
            open ? <div className='order'>
                <p>{new Date().toLocaleDateString()} We are open Now till {closeTime}:00, come or order food online !</p>
                <button className='btn'>Order</button>
            </div> : <p> Please visits us between {openTime}:00 and {closeTime}:00</p>
        }
    </footer>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);