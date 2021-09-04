import React from "react";
import Header from './components/Header';
import ProductListContainer from "./containers/ProductListContainer";
import Message from "./components/Message";
import Footer from "./components/Footer";
import CartContainer from "./containers/CartContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Header --> */}
        <Header/>
        <main id="mainContainer">
          <div className="container">

            {/* <!-- Products --> */}
            <ProductListContainer/>

            {/* <!-- Message --> */}
            <Message/>

            {/* <!-- Cart --> */}
            <CartContainer/>

          </div>
        </main>
        
        {/* <!-- Footer --> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
