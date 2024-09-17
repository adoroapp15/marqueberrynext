import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';
import appData from "@data/app.json";
import { Formik } from 'formik';

const Contact = () => {
  const faqData = {
    "title": "Client’s FAQ",
    "subtitle": "Solving Business Problems <br>is An Everyday",
    "items": [
        {
            "title": "Secure Management and Workforce?",
            "text": "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
        },
        {
            "title": "Logistics Workforce on Track?",
            "text": "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
        },
        {
            "title": "Online Courses & Certification?",
            "text": "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
        },
        {
            "title": "Figures and data representative of an organization's?",
            "text": "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
        }
    ]
  }

  return (
    <Layouts>
        <PageBanner pageTitle={"Contact Us"} pageDesc={"Have ideas for your business? Let’s build something awesome together."} />

        {/* Marque Berry | a meme company Contact Info */}
        <section className="onovo-section gap-top-140">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">

                        {/* Heading */}
                        <div className="onovo-text gap-bottom-40">
                            <h4>Send Us A Message</h4>
                            Then let us know about it and we can see what we can do to help
                        </div>

                        {/* Form */}
                        <div className="onovo-form">
                        <Formik
                            initialValues = {{ address: '', full_name: '', mobileNo: '', message: '' }}
                            // validate = { values => {
                            //     const errors = {};
                            //     if (!values.address) {
                            //         errors.address = 'Required';
                            //     } else if (
                            //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.address)
                            //     ) {
                            //         errors.address = 'Invalid email address';
                            //     }
                            //     return errors;
                            // }}
                            // onSubmit = {( values, { setSubmitting } ) => {
                            //     console.log("Form submitted with values: ", values);
                            //     // const form = document.getElementById("contactForm");
                            //     // const status = document.getElementById("contactFormStatus");
                            //     // const data = new FormData();

                            //     // data.append('full_name', values.full_name);
                            //     // data.append('mobileNo', values.mobileNo);
                            //     // data.append('address', values.address);
                            //     // data.append('message', values.message);

                            //     fetch('https://backend-seven-gules.vercel.app/mail/contact', {
                            //         method: 'POST',
                            //         body: JSON.stringify({
                            //             full_name: values.full_name,
                            //             address: values.address,
                            //             mobileNo: values.mobileNo,
                            //             message: values.message,
                            //         }),
                            //         headers: {
                            //             'Accept': 'application/json'
                            //         }
                            //     })       .then(response => response.json())
                            //     .then(data => {
                            //         if (data.success) {
                            //             alert("Thanks for your submission!");
                            //         } else {
                            //             alert("Oops! There was a problem.");
                            //         }
                            //     })
                            //     .catch(error => {
                            //         alert("Oops! There was a problem submitting your form");
                            //     })
                            //     .finally(() => setSubmitting(false));
                            // }}
                            onSubmit = {(values, { setSubmitting }) => {
                                console.log("Submitting form with values:", values);
                            
                                fetch('https://backend-seven-gules.vercel.app/mail/contact', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        full_name: values.name,
                                        address: values.email,
                                        mobileNo: values.tel,
                                        message: values.message,
                                    }),
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Accept': 'application/json',
                                    }
                                })
                                .then(response => response.json())
                                .then(data => {
                                    if (data.status==200) {
                                        console.log("Form submission successful:", data);  // Log success
                                        alert("Thanks for your submission!");
                                    } else {
                                        console.log("Form submission failed:", data);  // Log failure
                                        alert("Oops! There was a problem.");
                                    }
                                })
                                .catch(error => {
                                    console.error("Form submission error:", error);  // Log errors
                                    alert("Oops! There was a problem submitting your form");
                                })
                                .finally(() => setSubmitting(false));
                            }}
                            
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                            <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL} className="cform" method="post">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Full Name" 
                                              type="text" 
                                              name="name" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.name}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Email Address" 
                                              type="email" 
                                              name="email" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.email}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Phone Number" 
                                              type="tel" 
                                              name="tel" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.tel}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <textarea 
                                              placeholder="Message" 
                                              name="message"
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.message}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <button type="submit" className="onovo-btn onovo-hover-btn">
                                                <span>Send Message</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>

                                <div className="form-status alert-success" id="contactFormStatus" />
                            </form>
                            )}
                            </Formik>
                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">

                        {/* Contact Info */}
                        <div className="onovo-contact-info onovo-text-white">
                            <ul>
                                <li>
                                    <h5>Contact Info</h5>
                                    <a href="tel:89206 32128, 074007 05595" className="onovo-lnk lnk--white" target="_blank">89206 32128, 074007 05595</a><br/>
                                    <a href="mailto:info@marqueberry.com" className="onovo-lnk lnk--white" target="_blank">info@marqueberry.com</a>
                            
                                    <div className="onovo-social-1 onovo-social-active" style={{"marginTop": "10px"}}>
                                        <ul>
                                            {appData.social.map((item, key) => (
                                            <li key={`contact-social-item-${key}`}>
                                                <a href={item.link} target="_blank" className="onovo-social-link onovo-hover-2" title={item.title}>
                                                    <i className={`icon ${item.icon}`} />
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <h5>Gurgaon</h5>
                                    <div>
                                    608, Tower 1, DLF Corporate greens,<br/>sector 74A,
                                    Gurugram, Haryana 122004</div>
                                </li>
                                <li>
                                    <h5>Jaipur</h5>
                                   <div>SDC green park, Jaipur<br/>Rajasthan,302002 India</div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Marque Berry | a meme company Faq */}
        
      
    </Layouts>
  );
};
export default Contact;
