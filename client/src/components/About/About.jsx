import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Row>
          <Col lg={4} md={6} xs={12}>
            <h1 className="about-main">About Online Tutoring Web</h1>
            
            <div className='d-flex'>
              <div><p className="about-info">Online Tutoring web is a community for students who want to get extra help and reach full potential without spending hundreds of dollars on tutoring costs just to get help with homework</p>
                <br />
              </div>
              <div>
                            
                <p className="about-info"> COVID 19 has changed how we get homework help and how our life have evolved in 21st century. People have been used to
                learning at home and getting help for many homefwork projects from home. We all know that its too costly to hire a tutor to work on projects people 
                really need help with causing more stressful disagreements and much lower academic grades than what people would have 
                without getting help. Our goal is to make sure its much affortable for our students. 
                </p>
                <br />
              </div>
            </div>
            
  
          </Col>

          
          
          <Col lg={4} md={6} xs={12}>
            <h2 className='about-point'>Who Created Online Tutoring Web</h2>
            <br />
            <p className="about-info">Safa, Ozi, Hakan and Mohammed has built online tutoring web. This was built as per Capstone project</p>
            <br />
          </Col>
         
          <Col lg={4} md={6} xs={12}>
            <h2 className='about-point'>Job Opportunities</h2>
            <br />
            <p className="about-info">
            We currently do not have job opportunities available yet.
            </p>
          </Col>
      </Row>
    </Container>
    
  
  )
}

export default About