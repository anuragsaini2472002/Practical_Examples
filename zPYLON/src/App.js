import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-12">
            <div className="sidebar">
              <div className="_name">Ashish Wallet</div>

              <div className="inside">
                <ul>
                  <li className="insides">
                    <a href="#">Dashboard</a>
                  </li>
                  <li className="insides">
                    <a href="#">History</a>
                  </li>
                  <li className="insides">
                    <a href="#">DeFi made easy</a>
                  </li>
                  <li className="insides">
                    <a href="#">Trading</a>
                  </li>
                  <li className="insides">
                    <a href="#">Bridge</a>
                  </li>
                  <li className="insides">
                    <a href="#">Safe farms</a>
                  </li>
                  <li className="insides">
                    <a href="#">Multisender</a>
                  </li>
                  <ul className="prod">
                    <li
                      className="insides prod_main"
                      style={{ backgroundColor: "#141A1E" }}
                    >
                      <a href="">Pylon products</a>
                    </li>
                    <li
                      className="insides"
                      style={{ backgroundColor: "#141A1E" }}
                    >
                      <a href="">Pylon Finance</a>
                    </li>
                    <li
                      className="insides"
                      style={{ backgroundColor: "#141A1E" }}
                    >
                      <a href="">Dark Pylon</a>
                    </li>
                  </ul>
                </ul>
                <p className="cmp_name">
                  <span className="spn1">z</span>
                  <span className="spn2">PYLON</span>
                </p>
              </div>
            </div>
          </div>

          {/* <div className="col-md-9 col-12 main_nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button
                className="navbar-toggler "
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <form className="form-inline my-2 my-lg-0 search_bar">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </nav>
          </div> */}
        </div>
      </div>

      <div className="bar ">
        <input
          type="search"
          className="search_bar"
          placeholder="              Search Tokens..."
        />
        <div className="eth_img"></div>
        <div className="eth_img2"></div>
        <div className="eth_img3"></div>
      </div>

      <div className="count">
        <p className="counting">
          $11,627.<span className="cout_spn">29</span>
        </p>
      </div>

      {/* First Rectange======================= */}

      <div className="first_rect">
        <div className="graph"></div>
      </div>
      <div className="sec_rect">
        <p className="p_rect">All Assets</p>
        <div className="rect1">
          <p className="fir">
            Uniswap <span className="fir_count">70.18</span>
            <span className="sec_cout">222.567.82.00</span>
            <span className="thi_cout">$7221.66</span>
          </p>
        </div>
        <div className="rect2">
          <p className="fir">
            EthLand <span className="fir_count">70.18</span>
            <span className="sec_cout">122.675.62.00</span>
            <span className="thi_cout">$1221.47</span>
          </p>
        </div>
        <div className="rect3">
          <p className="fir">
            Ethereum <span className="fir_count">70.18</span>
            <span className="sec_cout">422.757.72.00</span>
            <span className="thi_cout">$9221.67</span>
          </p>
        </div>
        <div className="rect4">
          <p className="fir">
            Uniswap_another <span className="fir_count">70.18</span>
            <span className="sec_cout">722.867.92.00</span>
            <span className="thi_cout">$4221.17</span>
          </p>
        </div>
      </div>


      <div className="side_rec">
        <h3>All Assets</h3>
        <h4>Total Value</h4>
        <h2>$61,720.84</h2>
      </div>

      <div className="side_rec2">
      <div className="rec1">
          <p className="fir">
            Uniswap <span className="side_count">70.18</span>
         
          </p>
        </div>
        <div className="rec2">
          <p className="fir">
            EthLand <span className="side_count">70.18</span>
            
          </p>
        </div>
        <div className="rec3">
          <p className="fir">
            Ethereum <span className="side_count">70.18</span>
           
          </p>
        </div>
        <div className="rec4">
          <p className="fir">
            Uniswap_another <span className="side_count">70.18</span>
           
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
