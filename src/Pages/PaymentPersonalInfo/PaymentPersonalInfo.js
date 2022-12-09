import "./PaymentPersonalInfo.css";
import PaymentHero from "../../Components/PaymentHero/PaymentHero";
// import Button from "../../Components/Button/Button";
import PaymentSideNav from "../../Components/PaymentSideNav/PaymentSideNav";
// import LeaseSubNav from "../../Components/LeaseSubNav/LeaseSubNav";
import listImg from "../../Assets/list-style.svg";
import DetailsForm from "../../Components/DetailsForm/DetailsForm";


const PaymentPersonalInfo = () => {

  const paymentList = [
    {
      id: "01",
      listWord: "As the first person to complete this application you will be considered the primary applicant and you will be asked to provide information about additional occupants.",
      image: listImg
    },
    {
      id: "02",
      listWord: "if you do not finish your application now, you may log in it at a later time to complete it or to review it after you have submitted it",
      image: listImg
    },
    {
      id: "03",
      listWord: "Once your application has started, any changes made to your application by the property management company will immediately be reflected on this application for your convenience",
      image: listImg
    }
  ]

    return (
      <div>
        <PaymentHero />
        <div className="body_payment_main">
          <PaymentSideNav />
          
          <div className="body_payment">
            <div className="body_pay_listWord">
              <ul>
                {
                  paymentList.map(item => {
                    const {id, listWord} = item;
                    return <li key={id}>{listWord}</li>
                  })
                }
              </ul>
              
            </div>
            <div>
              <DetailsForm/>
            </div>
          </div>
        </div>

      </div>


      
  );
};

export default PaymentPersonalInfo;










