import React from 'react';
import Reserve from "./Reserve";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Restaurant from "./Restaurant";

function Home () {
    return(
        <div>
            <Reserve/>
            <Specials/>
            <Testimonials/>
            <Restaurant/>
        </div>
    )
}
export default Home;