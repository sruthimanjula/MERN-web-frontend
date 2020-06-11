import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "text-dark p-5",
  children,
}) => (
  <div>
    <Menu />
    <div className="slider">
      <ul className="slides">
        <li>
          <img src="images/1.jpg" alt="img 1" />
          <div className="caption center-align white-text ">
            <h3>Biba - Fashion Capital</h3>
            <h5 class="light text-lighten-3">{description}</h5>
          </div>
        </li>
        <li>
          <img src="images/3.jpg" alt="img 1" />
          <div className="caption center-align white-text">
            <h3>Biba - Fashion Capital</h3>
            <h5 className="light text-lighten-3">{description}</h5>
          </div>
        </li>
        <li>
          <img src="images/4.jpg" alt="img 1" />
          <div className="caption center-align white-text ">
            <h3>Biba - Fashion Capital</h3>
            <h5 class="light text-lighten-3">{description}</h5>
          </div>
        </li>
        <li>
          <img src="images/5.jpg" alt="img 1" />
          <div className="caption center-align white-text">
            <h3>Biba - Fashion Capital</h3>
            <h5 className="light text-lighten-3">{description}</h5>
          </div>
        </li>
        <li>
          <img src="images/6.jpg" alt="img 1" />
          <div className="caption center-align white-text">
            <h3>Biba - Fashion Capital</h3>
            <h5 className="light text-lighten-3">{description}</h5>
          </div>
        </li>
      </ul>

      <div className={className}>{children}</div>
    </div>
  </div>
);

export default Base;
