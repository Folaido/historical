import React from "react";
import "../css/footer.css";
import logo from "../assets/logo_gray.png";

class Footer extends React.Component {
  render = () => (
    <div className="footer">
      <div className="logo logo-footer">
        <img src={logo} alt="Logo" />
      </div>
      <div className="info">
        <div>18 West Main St.</div>
        <div>Norton, MA 02766</div>
        <div>(508)285-7070</div>
        <div>nortonhistoricalsociety@verizon.net</div>
      </div>
    </div>
  );
}

export { Footer };
