import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import projImg1 from "../assets/img/shoponline.JPG";
import projImg2 from "../assets/img/react.JPG";
import projImg3 from "../assets/img/vacation.JPG";
import projImg4 from "../assets/img/echo.JPG";
import projImg5 from "../assets/img/MOV.JPG";
import projImg6 from "../assets/img/BOOK.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import yeshtery from "../assets/img/yeshtery.JPG";
import film from "../assets/img/film.jpg";
import menu from "../assets/img/menu.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


function Projects() {

    const projects = [
        {
            title: "Movie Star",
            description: <h5><a href="https://movie-app-orpin-ten.vercel.app/" target={"_blank"}>Visit</a></h5>,
            imgUrl: projImg5,
        },
        {
            title: "E-commerce Shop",
            description: <h5><a href="https://shoping-online.netlify.app/" target={"_blank"}>Visit</a></h5>,
            imgUrl: projImg1,
        },
        {
            title: "Best Movies",
            description: <h5><a href="https://cinemaa-store.netlify.app/" target={"_blank"}>Visit</a></h5>,
            imgUrl: film,
        },
        {
            title: "Yeshtery",
            description: <h5><a href="https://yeshtery-app-commerce.vercel.app/" target={"_blank"}>Visit</a></h5>,
            imgUrl: yeshtery,
        },
        {
            title: "E-commerce Shoping",
            description: <h5><a href="https://shoping-app-seven.vercel.app/" target={"_blank"}>Visit</a></h5>,
            imgUrl: projImg2,
        },
        {
            title: "vacation",
            description: <h5><a href="https://vacation-with-we.netlify.app/" target={"_blank"}>Visit</a></h5>,
            imgUrl: projImg3,
        },
        {
            title: "Echo Services",
            description: <h5><a href="https://echo-for-you.netlify.app/" target={"_blank"}>Visit</a></h5>,
            imgUrl: projImg4,
        },

        {
            title: "My Portfolio",
            description: <h5><a href="https://books-shop-ten.vercel.app/" target={"_blank"}>Visit</a></h5>,
            imgUrl: projImg6,
        },
        {
            title: "Menu App",
            description: <h5><a href="https://menu-app-beta.vercel.app/" target={"_blank"}>Visit</a></h5>,
            imgUrl: menu,
        },
    ];

    return (
        <section className="project" id="Projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                                    <h2>Projects</h2>

                                    <p>These are some of my projects that I created to suit the needs of the company and clients.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="colorSharp"></img>
        </section>
    )
}


export default Projects;