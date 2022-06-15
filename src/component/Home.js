import "../App.css";
import { Link } from "react-router-dom";
import image from "../health-check 1.png";
import image1 from "../cloud new modified.png";
import image2 from "../privacy modified.png";

const Home = (props) => {
  // const {showAlert} = props
  return (
    <>
      {/* New Describing Section Starts */}
      <div className="homeBody">
        <div className="homeContainer container1">
          <h2 className="DecribeHead">Note it & forget it iNotebook is here</h2>
          <p className="cloudText">Note down your notes, TODO list and
            access it from anywhere</p>
        </div>

        <div className="imageBody1 imgBody1">
          <img className="firstImg" src={image} alt="" />
        </div>

        <div className="imageBody2 imgDisplayNonePhone">
          <img className="secImg" src={image1} alt="" />
        </div>
        <div className="homeContainer conDisplayNonePhone">
          <h2 className="DecribeHead">Access your notes from any device</h2>
          <p className="cloudText">Stay connected with iNotebook, Save notes on cloud and access it from
            anywhere & from any device. </p>
        </div>
        
        <div className="homePhoneContainer">
          <h2 className="DecribeHead">Access your notes from any device</h2>
          <p className="cloudText">Stay connected with iNotebook, Save notes on cloud and access it from
            anywhere & from any device. </p>
        </div>
        <div className="imagePhoneBody2 imgPhoneBody">
          <img className="secImg" src={image1} alt="" />
        </div>

        <div className="homeContainer container3">
          <h2 className="DecribeHead">Access your notes from any device</h2>
          <p className="cloudText">Stay connected with iNotebook, Save notes on cloud and access it from
            anywhere & from any device. </p>
        </div>

        <div className="imageBody3">
          <img className="thirdImg" src={image2} alt="" />
        </div>
      </div>
      {/* New Describing Section Ends */}


      {/* CommentsSection Starts */}
      <div className="commentsBody">
        <div className="commentsSection">
          <div className="commentsContainer1 designBox">
            <h3>Sharwil</h3>
            <p>iNotebook is a very nice web based note application that I can access it from anywhere from my mobile or laptop</p>
          </div>

          <div className="commentsContainer2">
            <div className=" designBox">
              <h3>Kush</h3>
              <p>iNotebook is a very nice web based note application that I can access it from anywhere from my mobile or laptop</p>
            </div>
          </div>

          <div className="commentsContainer3">
            <div className=" designBox">
              <h3>Siddhesh</h3>
              <p>iNotebook is a very nice web based note application that I can access it from anywhere from my mobile or laptop</p>
            </div>
          </div>
          
           <div className="commentsContainer4">
            <div className=" designBox">
              <h3>Krishna</h3>
              <p>iNotebook is a very nice web based note application that I can access it from anywhere from my mobile or laptop</p>
            </div>
          </div>
        </div>
      </div>
      {/* CommentsSection Ends */}


      {/* CTA Section Starts */}
      <div className="ctaBody">
        <div className="ctaSection">
          <h2 className="CtaHeading">Create Your Notes With iNotebook</h2>
          <div className="homeSignUpContainer">
            <Link className="homeSignUp" to={"/signup"} role="button">Sign Up</Link>
          </div>
        </div>
        </div>
      {/* CTA Section Endss */}

      {/* Footer Section Starts */}
      <footer>
        <div className="footerSection">
        <i className="fa-regular fa-copyright footerText"> All Rights Reserved</i>
        </div>
        <div className="socialIcons">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-dribbble"></i>
        <i className="fa-brands fa-github"></i>
        </div>
      </footer>
      {/* Footer Section Ends */}



      {/* Old first image */}
      {/* <div className="homeBody">
        <div className="homeContainer">
          <div className="container maxiumMargin wrapbox">
            <h2 className="homeText">Note it & forget it iNotebook is here</h2>
            <p className="notesPara">Note down your notes, TODO list and
              access it from anywhere</p>
            <div className="gStbtn">
          <Link className="btn btn-primary button" to={"/signup"} role="button">Get Started</Link>
          </div>
        </div>
          <div className="container wrapboxImage">
            <img className="imagesize" src={image} alt="" />
          </div>
        </div>
        </div> */}
      {/* Writing image End */}

      {/* Cloud image Statrt */}


      {/* Cloud image End

      {/* Security image Start */}
      {/* <div className="homeContainer">
        <div className="container maxiumMargin wrapbox1">
          <h2 className="homeText1">Get access of your notes from
            anywhere and from any device</h2>
          <p className="cloudText">Stay connected with iNotebook, Save
            your notes on cloud and access it from
            anywhere & from any device. </p>
          <Link className="btn btn-primary button" to={"/signup"} role="button">Get Started</Link>
        </div>
        <div className="container wrapboxImage">
          <img className="imagesize1" src={image2} alt="" />
        </div>
      </div> */}
      {/* Security image End */}

      {/* Comments Section Start */}
      {/* <div className="commentsBody">
        <div className="commentsContainer">
          <div className="box">
            <h3 className="commentersName">Sharwil</h3>
            <p className="commentsPara">iNotebook is a very nice web based note application that I can access it from anywhere from my mobile or laptop</p>
          </div>

          <div className="box">
            <h3 className="commentersName">Siddhesh</h3>
            <p className="commentsPara">iNotebook is a very nice web based note application that I can access it from anywhere from my mobile or laptop</p>
          </div>

          <div className="box">
            <h3 className="commentersName">Kush</h3>
            <p className="commentsPara">iNotebook is a very nice web based note application that I can access it from anywhere from my mobile or laptop</p>
          </div>
        </div>
      </div> */}
      {/* Comments Section End */}

      {/* Subscribe Section Start */}
      {/* <div className="subscribeBody">
        <h2 className="getStartedHeading">Create your notes with iNotebook</h2>
        <Link className="btn btn-primary getbtn" to={"/signup"} role="button">Get Started</Link>
      </div> */}
      {/* Subscribe Section End */}

      {/* Footer Section Start */}
      {/* <footer>
        <div className="footer container">
          <div className="social-icon">
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new--v1.png" /></a>
            </div>

            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new--v1.png" /></a>
            </div>

            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/twitter-circled.png" /></a>
            </div>

            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" /></a>
            </div>

            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
            </div>

            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/dribbble.png" /></a>
            </div>
          </div>
          <p>Copyright © 2022 iNotebook. All rights reserved</p>
        </div>
      </footer> */}
      {/* Footer Section End */}
    </>
  );
};

export default Home;