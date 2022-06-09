import "./Featured.css";
import { GiAfrica, GiPayMoney } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

function Featured() {
  return (
    <div className="featured">
      <div className="features">
        <div className="featureContent">
          <GiAfrica className="featureIcon" />
          <div className="featureText">
            <h2>Africa's No 1</h2>
            <p>Travar is the Leading travel agency in Africa.</p>
          </div>
        </div>
        <div className="featureContent">
          <GiPayMoney className="featureIcon" />
          <div className="featureText">
            <h2>Installment Payment</h2>
            <p>
              Lock down great travel deals and pay in convenient installments
            </p>
          </div>
        </div>
        <div className="featureContent">
          <RiCustomerService2Fill className="featureIcon" />
          <div className="featureText">
            <h2>We are here for you</h2>
            <p>
              Reach us 24/7 <br />
              (Monday - Sunday)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
