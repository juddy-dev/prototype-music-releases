//CSS
import "styles/NotFound.scss"; 

export default function NotFound() {

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  
  //STATES

  //FUNCTIONS

  return (
    <>
  
      <h1>Uh-Oh...</h1>
      <p className="zoom-area">Look like you're lost, the page you are looking for not available!</p>
  
      <div className="page-wrapper">
        <div className="disk-wrapper">
          <div className="light-left"></div>
          <div className="light-right"></div>
          <div className="disk">
            <div className="half-circle-top"></div>
            <div className="half-circle-bottom"></div>
            <div className="separator"></div>
            <div className="inner-circle">
              <span>4</span>
              <div className="dot"></div>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>  
      <div className="link-container">
        <a href="/">Return Home</a>
      </div>
    </>
  );  
};