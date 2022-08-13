import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "../MailchimpForm/MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <span style={{ color: "rgb(225 25 198)", fontSize: "40px", fontFamily: "cursive", }}>M</span>
                        <span style={{ color: "#a23ec5", fontSize: "40px", fontFamily: "cursive", }}>A</span>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/mohamed-abdo-13a527211" rel="noreferrer" target={"_blank"}><img src={navIcon1} alt=""></img></a>
                            <a href="https://www.facebook.com/MohameAsr/" rel="noreferrer" target={"_blank"}><img src={navIcon2} alt=""></img></a>
                            <a href="https://www.instagram.com/m7md_3bdo_3sr/" rel="noreferrer" target={"_blank"}><img src={navIcon3} alt=""></img></a>

                        </div>
                        <p>Copyright 2022. All Rights Reserved <span style={{ color: "#ff8484" }}>Mohamed Abdo</span></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;