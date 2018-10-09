import React, { Component } from "react";
import "./App.css";
require("materialize-css");

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar-fixed">
          <ul id="dropdown1" className="dropdown-content">
            <li>jQuery</li>
            <li>Node.js</li>
            <li className="devider" />
            <li>React</li>
          </ul>
          <nav>
            <div className="nav-wrapper">
              <a href="#" class="brand-logo">
                Hackingdeal
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a
                    className="dropdown-trigger"
                    data-target="dropdown1"
                    href="#"
                  >
                    JavaScript
                  </a>
                </li>
                <li>
                  <a href="#">Python</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="lorem">
          ipsam, blanditiis, tenetur cupiditate tempora quas magni aut
          voluptates unde commodi enim! Nobis ea, deserunt nostrum molestiae
          officia libero aperiam est accusamus repudiandae architecto enim
          officiis magni itaque ab perferendis quam dolorum impedit atque
          necessitatibus, qui esse iure voluptate sunt vel. Ad architecto
          tempore vitae velit sint id iure doloribus aliquid. Sed, vitae
          doloribus illum dolorem quam quas quod non odio, mollitia minus
          incidunt facilis id itaque fugiat cupiditate sapiente dolores aliquam.
          Expedita facere repellat doloribus cupiditate quis fuga maxime ad
          assumenda tempora! Voluptate voluptates ratione animi iure, sequi
          tenetur fugiat voluptatibus expedita unde tempore omnis velit, eos
          natus doloremque asperiores minus enim recusandae vero molestias.
          Suscipit omnis praesentium quaerat, libero aut molestiae vero,
          voluptatibus est amet magnam, corrupti beatae doloribus debitis
          voluptatem excepturi? Molestias dignissimos laudantium, omnis veniam
          error atque est voluptas dicta quia optio aspernatur perspiciatis
          assumenda. Fuga debitis commodi accusantium nulla aut consequuntur ab
          vitae cumque quos, aliquam, doloribus magnam provident, iste omnis
          enim soluta quod excepturi blanditiis repellat earum ipsa. Iusto
          voluptatibus atque recusandae debitis. Vel debitis explicabo nihil
          aliquam laborum architecto dolorem, rem tenetur pariatur quidem! Quae,
          dolore provident? Tempora quo, modi dolores esse nam est vel optio
          odit? Deleniti amet tempora reiciendis officia dolorem eligendi, alias
          enim voluptate consectetur explicabo omnis maxime numquam! Tempore
          neque itaque in dolor beatae aliquam suscipit consequuntur facere
          excepturi pariatur culpa maxime rerum non, et deleniti nisi! Et,
          voluptates alias, animi minima quas quae, aut sit ipsum quasi ipsa
          sunt dolor iste? Expedita mollitia laudantium ullam aspernatur odit
          officia eum dolor nesciunt vitae nulla fuga porro, deserunt tenetur
          maiores, quo quam? Maiores accusamus veniam magni nulla ipsa repellat
          quo molestias iusto amet sed perferendis distinctio aliquam, ducimus
          autem commodi recusandae doloribus reiciendis quas! Ea assumenda
          ducimus molestiae possimus exercitationem aliquid labore perferendis
          voluptatibus iusto fugit alias, voluptates vitae cumque repellendus,
          hic quisquam dolores dolor itaque velit, suscipit blanditiis
          temporibus. Ut deserunt debitis aliquid unde ad officia obcaecati iste
          explicabo quia, mollitia excepturi provident sequi libero, molestias
          laudantium minima aut illum itaque tenetur, suscipit sint ratione?
        </div>
      </div>
    );
  }
}

export default App;
