import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GenerateTask(props) {  
  const {name, days, index , removeTask} = props;

  return (
    <Container>
          {
            // tasks.map((name, index) => (
              <Row>
                <Col xs={4} style={{ border: '2px solid blue' }}>
                  <div>
                    {name}
                  </div>
                </Col>

                <Col xs={7}>
                  {
                    Array.from({ length: days }, (_, index) => (
                      <span key={index}>Item {index + 1}</span>
                    ))
                  }
                </Col>
                <Col>
                  <button onClick={()=> removeTask(index)}>
                    X
                  </button>
                </Col>
              </Row>
            // ))
          }
    </Container>
  )
}

export default GenerateTask