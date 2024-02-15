function Main () {
    return (
        <main>
            <div className="main-container">
                < div className="reserve">
                        <div className="reserve-heading1"><h1>Little Lemon</h1></div>
                        <div className="reserve-heading3"><h3>Chikago</h3></div>
                        <div className="reserve-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</div>
                        <div id="reserve-button">
                            <button className="button">Reserve a table</button>
                        </div>
                        <div className="reserve-image">
                        <img src="/restaurantfood.jpg"></img>
                    </div>
                </div>
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
                        <div className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</div>
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
                        <div className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations</div>
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
                        <div className="description">Lemon white chocolate pie combined with salty cracker crust creates a unique combination of flavours and a delicious combo of a tangy lemon and rich white chocolate </div>
                        <div className="delivery">
                            <div>Order a delivery</div>
                            <div>
                                <img src="/delivery.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials">
                    <div className="testimonials-heading">
                        <h1>Testimonials</h1>
                    </div>
                    <div className="testimonial1">
                        <div className="rating">Rating 5</div>
                        <div className="card">
                            <div className="testimonial-image">
                            <img src="/man1.jpeg"></img>
                            </div>
                            <div className="name">Alex F.</div>
                        </div>
                        <div className="review">Review</div>
                    </div>
                    <div className="testimonial2">
                        <div className="rating">Rating 4.5</div>
                        <div className="card">
                        <div className="testimonial-image">
                            <img src="/woman2.jpeg"></img>
                        </div>
                        <div className="name">Olivia S.</div>
                        </div>
                        <div className="review">Review</div>
                    </div>
                    <div className="testimonial3">
                        <div className="rating">Rating 4.5</div>
                        <div className="card">
                        <div className="testimonial-image">
                            <img src="/man2.jpeg"></img>
                        </div>
                        <div className="name">John G.</div>
                        </div>
                        <div className="review">Review</div>
                    </div>
                    <div className="testimonial4">
                        <div className="rating">Rating 5</div>
                        <div className="card">
                        <div className="testimonial-image">
                            <img src="/woman1.jpeg"></img>
                        </div>
                        <div className="name">Ella D.</div>
                        </div>
                        <div className="review">Review</div>
                    </div>
                </div>
                <div className="restaurant">
                    <div className="restaurant-heading1">
                        <h1>Little Lemon</h1>
                    </div>
                    <div className="restaurant-heading3">
                        <h3>Chikago</h3>
                    </div>
                    <div className="restaurant-description">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </div>
                    <div className="restaurant-image1">
                        <img src="/owners1.jpg"></img>
                    </div>
                    <div className="restaurant-image2">
                        <img src="/owners2.jpg"></img>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main;