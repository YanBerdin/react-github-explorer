import "./Header.scss";
import logoGithub from "src/assets/images/logo-github.png";
import { Segment } from "semantic-ui-react";

function Header() {
  return (
    /*     <div className="Header">
      <img
        src=""
        alt="Logo Git Hub"
      />
    </div> */
    <Segment>
      <div className="header-container">
        <img className="header-image" src={logoGithub} alt="Logo Github" />
      </div>
    </Segment>
  );
}

export default Header;
