import { MDBContainer, MDBFooter } from "mdbreact";

function Footer(props) {
    return (
        <MDBFooter className="foot pt-2">
        <div className="footer-copyright text-center py-2">
          <MDBContainer fluid>
                    <div className="foot-text">Katie Pestotnik </div>
                    <div className="foot-text">Email: <a className="foot-text-hover" href="mailto:katie.pestotnik@gmail.com">Katie.Pestotnik@gmail.com</a></div>
                    <div className="foot-text">Phone: 720-936-6073</div>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
}

export default Footer;