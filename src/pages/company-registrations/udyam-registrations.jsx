import Head from 'next/head'
import Layout from "../../components/layout";
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Services() {

  const steps = [
    {
      heading: "Obtain DSC ",
      description: "The first step in the procedure is to obtain a Digital Signature Certificate (DSC) for the directors. You can get digital signatures by visiting the official website of MCA. A list of certifying authorities is available in it."
    },
    {
      heading: "Apply DIN",
      description: "All the directors must apply for Director Identification Number(DIN)."
    },
    {
      heading: "Name Approval",
      description: "You must select a unique name for your private limited company. It must end with Private Limited at the end of your company name, Reserve your company name via the SPICe+ form. "
    },
    {
      heading: "Incorporation of a Company",
      description: "File MoA and AoA. List these documents in the SPICe forms with all the signatures from the directors on them.."
    },
    {
      heading: "Apply PAN & TAN",
      description: "File PAN & TAN through SPICe+ form."
    },
    {
      heading: "Issuance of Certificate",
      description: "After the verification, ROC issues the certificate of incorporation with the PAN & TAN allotment."
    },

  ];

  return (
    <Layout>

      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
          </div>
          <div className="col-lg-6">
            <h5 className="text-crr">Start Your Business</h5>
            <h1 className="display-3 fw-bold lh-sm mb-3">Udyam Registrations.</h1>
            <p className="lead">We are We are engrossed in providing high quality and reliable consultancy services for company registration.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>  What is Udyam Registration?</h2>
        <p>

          Udyam Registration is a government registration to provide a recognition certificate to micro, small and medium enterprises. The certificate contains a Unique Identification Number that helps leverage government reservations for other government plans.
        </p>  <p>
          Udyam registration was primarily called Udyog Aadhar registration and was launched by the Ministry of Micro, Small & Medium Enterprise as of 1st July 2020.
        </p>  <p>
          It is a hassle-free procedure of online registration, and all you need to do is attach a few necessary documents to complete the registration.
        </p>

        <h2>   Importance of Udyam Registration Certificate </h2>
        <p>


          Udyam Registration Certificate is the recognition certificate given to the enterprise. That contains a QR code that helps to access information related to enterprises.

        </p>
        <h2>
          Characteristics of Udyam Registration </h2>


        <ul>

          <li>The procedure is online-based.
          </li><li>Minimum requirement of documents like Aadhar and PAN card
          </li><li>The registration is possible only once
          </li><li>All the activities related to the enterprise should be mentioned under one Udyam Registration number, preferably if it is involved in many activities instead of one.

          </li>
          <li>The renewal of Old Udyog Aadhar cards to New Udyam registration is done by verifying the Aadhar/PAN card numbers.
          </li>
        </ul>



        <h2>
          Eligibility </h2>

        <p>

          Any new or existing enterprise can have Udyam registration based on investment and turnover declared by the government.
        </p>

        <h2>Mandatory requirements</h2>
        <ul>
          <li>
            <strong>Minimum of two members </strong>and a maximum of 200 according to the statutory requirement of the Companies Act 2013.
          </li>
          <li>
            Each of the company directors should have a DIN(director identification number).
          </li>
          <li>
            Among the directors, one should stay in India for not less than 182 days in the previous calendar year
          </li>
          <li>
            The name of the private limited company should vary from other PLC names. </li>
          <li>
            Certificates by the professionals associated with private limited companies. Such as chartered accountant, secretary cost, accountant, etc
          </li>
          <li>
            The company's principal address.
          </li>
        </ul>

        <h2>Advantages of private limited companies</h2>
        <ul>
          <li>The private limited company is a separate legal entity which means shareholders are not responsible for the company's assets and liabilities.
          </li><li>Shareholders' liability is limited and responsible for the shares held by them. They do not have the personal risk of paying debts out of their assets.
          </li><li>As the company is a separate legal entity, it is not affected by the death or cession of a member from a company. It can continue its existence until it dissolves legally.
          </li><li>No minimum capital is required as the company can register with the amount of 10000 as a total of authorized share capital.
          </li><li>A Private Limited company can raise funds from venture capital or Angel markets.
          </li><li>A private limited company's shares can easily be transferable by a shareholder to any other person.
          </li><li>100% FDI is allowed in a private limited company which means foreign investors can invest in the private limited companies directly.
          </li>
        </ul>
        <h2>
          Types of enterprises under registration
        </h2>
        <ul>

          <li>Micro Enterprises – Businesses investments less than INR 1Cr; turnover between INR 1 Cr and a maximum of INR 5 Cr.
          </li><li>Small Enterprises – Business investments less than INR 1Cr; turnover between INR 10 Cr and a maximum of INR 50 Cr.
          </li><li>Medium Enterprises – Business investments less than INR 5Cr; turnover between INR 50 Cr and a maximum of INR 250 Cr.

          </li>
        </ul>

        <h2>
          Documents required for Private Limited Company Registration </h2>
        <ul>
          <li>ID proof PAN card and passport of Indian and foreign directors
          </li><li>
            Address proof
            <ul>
              <li>ration card or
              </li><li>aadhar card or
              </li><li>driving license or
              </li><li>	voter ID
              </li>
            </ul>
          </li><li>	Residential proof
            <ul>
              <li>bank statement
              </li><li>	electricity
              </li><li>utility bill
              </li>
            </ul>
          </li><li>	Certified rental agreement
          </li><li>	NOC from the landlord
          </li><li>	Copy of sale deed or property deed
          </li>
        </ul>

      </div>


      <div className="container">

        <h2>The Procedure of Private Limited Company Registration</h2>
        {steps.map((step, index) => (

          <div className="row py-2">
            <div className="col-md-1 text-muted display-6">
              <span>{(index + 1).toString().padStart(2, '0')}</span></div>

            <div className="col-md-11">

              <h6>{step.heading}</h6>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

    </Layout>
  )
}
