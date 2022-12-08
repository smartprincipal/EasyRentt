import "./PaymentPersonalInfo.css";
import PaymentHero from "../../Components/PaymentHero/PaymentHero";
import Button from "../../Components/Button/Button";
import PaymentSideNav from "../../Components/PaymentSideNav/PaymentSideNav";
import LeaseSubNav from "../../Components/LeaseSubNav/LeaseSubNav";
import listImg from "../../Assets/list-style.svg";


const PaymentPersonalInfo = () => {

    return (
    <div>
      <PaymentHero />
      <div className="section-2-container">
        <PaymentSideNav />
        <div className="lease-sub-main">
          <div className="sub-nav-container">
            <LeaseSubNav />
          </div>
          <ul className="payment-list-container">
            <li>
              <div>
                <img src={listImg} alt="list style represented by icon" />
              </div>
              <div>
                As the first person to complete this application you will be
                considered the primary applicant and you will be asked to
                provide information about additional occupants.
              </div>
            </li>
            <li>
              <div>
                <img src={listImg} alt="list style represented by icon" />
              </div>
              <div>
                if you do not finish your application now, you may log in it at
                a later time to complete it or to review it after you have
                submitted it
              </div>
            </li>
            <li>
              <div>
                <img src={listImg} alt="list style represented by icon" />
              </div>
              <div>
                Once your application has started, any changes made to your
                application by the property management company will immediately
                be reflected on this application for your convenience
              </div>
            </li>
          </ul>

          <div className="payment-info-container">
            <h3 className="payment-info-head">Personal Information</h3>
            <form className="payment-info-form">
              <div className="payment-input-group">
                <div>
                  <label htmlFor="move-in" className="payment-label">
                    Title
                  </label>
                  <select id="title-select" name='title'>
                    <option value='mr'>Mr</option>
                    <option value='mrs'>Ms.</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="Phone" className="payment-label">Phone</label>
                  <input type="text" name="phone"/>
                </div>
              </div>
              <div className="payment-input-group">
                <div>
                  <label htmlFor="move-in" className="payment-label">
                    First Name*
                  </label>
                  <input type="text" id="move-in" name='first_name' />
                </div>
                <div>
                  <label htmlFor="email" className="payment-label">
                    Email*
                  </label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
              <div className="payment-input-group">
                <div>
                  <label htmlFor="middle-name" className="payment-label">
                    Middle Name<span className="asterisk">*</span>
                  </label>
                  <input type="text" id="middle-name"
                  name='middle_name' />
                </div>
                <div>
                  <label htmlFor="move" className="payment-label">
                    Move in Date<span className="asterisk">*</span>
                  </label>
                  <input type="text" id="move" name='move_in_date'  />
                </div>
              </div>
              <div className="payment-input-group">
                <div>
                  <label htmlFor="last_name" className="payment-label">Last Name<span className="asterisk">*</span></label>
                  <input type="text" id="last_name" name='last_name'/>
                </div>
                <div>
                  <label htmlFor="lease-term" className="payment-label lease-label">Lease Term (Months)</label>
                  <input type="number" id="lease-term" name='lease_term' />
                </div>
              </div>
              <div className="payment-input-group">
                <div>
                  <label htmlFor="marital-status" className="payment-label">Marital Status</label>
                  <select id="marital-status" className="marital-select" name='marital_status' >
                    <option>Single</option>
                    <option>Married</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="preferred-name" className="payment-label">Preferred Name</label>
                  <input type="text" id="preferred-name" name='preferred_name' />
                </div>
              </div>

              <div>
                <h3 className="payment-info-head">Address Information</h3>
                <div className="payment-input-group">
                  <div>
                    <label htmlFor="country" className="payment-label country-select">
                      Country
                    </label>
                    <select id="country" name='country'>
                      <option>Nigeria</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="residency" className="payment-label">Residency from<span className="asterisk">*</span></label>
                    <input type="text" id="residency" name='residency_from' />
                  </div>
                </div>
                <div className="payment-input-group">
                  <div>
                    <label htmlFor="address" className="payment-label">
                      Address<span className="asterisk">*</span>
                    </label>
                    <input type="text" id="address" />
                  </div>
                  <div>
                    <label htmlFor="monthly-pay" className="payment-label">
                      Monthly Rent Payment<span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      id="monthly-pay"
                      name='monthly_rent' />
                  </div>
                </div>
                <div className="payment-input-group">
                  <div>
                    <label htmlFor="city" className="payment-label">
                      City<span className="asterisk">*</span>
                    </label>
                    <input type="text" id="city" name='city' />
                  </div>
                  <div>
                    <label htmlFor="reason" className="payment-label">
                      Reason for Moving<span className="asterisk">*</span>
                    </label>
                    <input type="text" id="reason"
                    name='reason_for_moving' />
                  </div>
                </div>
                <div className="payment-input-group">
                  <div>
                    <label htmlFor="apartment" className="payment-label">Apartment Community</label>
                    <input type="text" id="apartment" 
                    name='apartment_community' />
                  </div>
                </div>
              </div>
              
              
              <div>
                <h3 className="payment-info-head">Employment Information</h3>
                <div className="payment-input-group">
                  <div>
                    <label htmlFor="country2" className="payment-label country-select">
                      Country
                    </label>
                    <select id="country2" name='country2' >
                      <option>Nigeria</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="employer" className="payment-label">Employer<span className="asterisk">*</span></label>
                    <input type="text" id="employer" 
                    name='employer' />
                  </div>
                </div>
                <div className="payment-input-group">
                  <div>
                    <label htmlFor="employment-status" className="payment-label employment-select">
                      Employment Status<span className="asterisk">*</span>
                    </label>
                    <select id='employment-status'
                    name='employment_status' >
                      <option>Employed</option>
                      <option>Unemployed</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="company-add" className="payment-label">
                      Company’s Address <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      id="company-add"
                      name='company_address' />
                  </div>
                </div>
                <div className="payment-input-group">
                  <div>
                    <label htmlFor="job-title" className="payment-label">
                      Job Title<span className="asterisk">*</span>
                    </label>
                    <input type="text" id="job-title" 
                    name='job_title' />
                  </div>
                  <div>
                    <label htmlFor="city2" className="payment-label">
                      City<span className="asterisk">*</span>
                    </label>
                    <input type="text" id="city2" 
                    name='city2' />
                  </div>
                </div>
                <div className="payment-input-group">
                  <div>
                    <label htmlFor="history" className="payment-label">Employed since<span className="asterisk">*</span></label>
                    <input type="text" id="history" 
                    name='employed_since' />
                  </div>
                  <div>
                    <label htmlFor="employer-phone" className="payment-label">Employer's Phone<span className="asterisk">*</span></label>
                    <input type="text" id="employer-phone" 
                    name='employers_phone' />
                  </div>
                </div>
                <div className="payment-input-group">
                  <div>
                    <label htmlFor="income" className="payment-label">Monthly Income<span className="asterisk">*</span></label>
                    <input type="text" id="income" 
                    name='monthly_income' />
                  </div>
                  <div>
                    <label htmlFor="add-income" className="payment-label">Additional Income<span className="asterisk">*</span></label>
                    <input type="text" id="add-income" 
                    name='additional_income' />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="payment-info-head">Pet Information</h3>
                <div className="payment-radio-group">
                  <p>Do you have any Pet?<span className="asterisk">*</span></p>
                  <div className="radio-input">
                    <input type='radio' id="yes" name='pet' />
                    <label htmlFor="yes" className="payment-label">Yes</label>
                    <input type='radio' id="no"  name='pet'/>
                    <label htmlFor="no" className="payment-label">No</label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="payment-info-head">Vehicle Information</h3>
                <div className="payment-radio-group">
                  <p>Do you have any vehicles?<span className="asterisk">*</span></p>
                  <div className="radio-input">
                    <input type='radio' id="yes" name='vehicle'/>
                    <label htmlFor="yes" className="payment-label">Yes</label>
                    <input type='radio' id="no"  name='vehicle' />
                    <label htmlFor="no" className="payment-label">No</label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="payment-info-head">Agreement</h3>
                <input type='checkbox' id="checkbox2" name='agreement' className='input-checkbox'/>
                <label htmlFor="checkbox2" className='input-checkbox'>By signing this application I agree that the Information provided in this application is true and correct*
                    Use your Mouse or finger to sign in the boxes or Choose a script signature.
                </label>
              </div>

              <div className="lease-btn-container">
                <Button
                  text={"Save"}
                  style={{
                    background: "#0B0000",
                    borderRadius: "16px",
                    padding: "5px 20px",
                    color: "rgba(255, 255, 255, 0.9)",
                    fontFamily: "inherit",
                  }}
                />
                <Button
                  text={"Save & Continue"}
                  style={{
                    padding: "8px 20px",
                    background: "#FFC100",
                    borderRadius: "15px",
                    border: "none",
                    fontFamily: "inherit",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPersonalInfo;










