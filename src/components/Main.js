import Reserve from "./Reserve";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Restaurant from "./Restaurant";

function Main () {
    return (
        <main>
            <div className="main-container">
               <Reserve/>
               <Specials/>
               <Testimonials/>
               <Restaurant/>
            </div>
        </main>
    )
}
export default Main;