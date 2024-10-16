import BodyContainer from "../component/BodyContainer";
import Header from "../component/Header";

function Container(){
    return(
        <div className="container">
            <Header />
            <BodyContainer/>
        </div>
    );
}

export default Container