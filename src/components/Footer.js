import { MDBContainer, MDBFooter } from "mdbreact";

function Footer(props) {
    return (
        <MDBFooter className="foot pt-2">
        <div className="footer-copyright text-center py-2">
          <MDBContainer fluid>
            <div hidden="hidden">test</div>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
}

export default Footer;