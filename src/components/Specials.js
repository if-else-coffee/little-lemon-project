function Specials () {
    return (
        <div className="specials">
            <div className="specials-heading">
                <h1>This week specials!</h1>
            </div>
            <div id="button">
                <button className="button">Order online</button>
            </div>
            <div className="specials1">
                <div className="image">
                    <img src="/greek-salad.jpeg"></img>
                </div>
                <div className="price">
                    <div>Greek salad</div>
                    <div>$12.99</div>
                </div>
                <div className="description">
                    The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons
                </div>
                <div className="delivery">
                    <div>Order a delivery</div>
                    <div>
                        <img src="/delivery.png"></img>
                    </div>
                </div>
            </div>
            <div className="specials2">
                <div className="image">
                    <img src="/bruschetta.jpg"></img>
                </div>
                <div className="price">
                    <div>Bruschetta</div>
                    <div>$5.99</div>
                </div>
                <div className="description">
                    Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations
                </div>
                <div className="delivery">
                    <div>Order a delivery</div>
                    <div>
                        <img src="/delivery.png"></img>
                    </div>
                </div>
            </div>
            <div className="specials3">
                <div className="image">
                    <img src="/lemondessert.jpeg"></img>
                </div>
                <div className="price">
                    <div>Lemon dessert</div>
                    <div>$5.00</div>
                </div>
                <div className="description">
                    Lemon white chocolate pie combined with salty cracker crust creates a unique combination of flavours and a delicious combo of a tangy lemon and rich white chocolate
                </div>
                <div className="delivery">
                    <div>Order a delivery</div>
                    <div>
                        <img src="/delivery.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Specials;