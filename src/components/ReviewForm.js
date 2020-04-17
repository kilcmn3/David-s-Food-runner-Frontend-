import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ReviewForm = (props) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col></Col>
        <Col>
          <Form inline onSubmit={props.handleSubmit}>
            <Form.Group controlId="formInlineName">
              <Form.Control value={props.comment} type="text" onChange={props.handleChange} placeholder="write your commnets here.." />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container >
  )
}

export default ReviewForm