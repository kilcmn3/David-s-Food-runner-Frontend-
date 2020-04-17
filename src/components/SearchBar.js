import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const SearchBar = (props) => {

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Form inline onSubmit={props.handleSubmit}>
          <Form.Group controlId="formInlineName">
            <Form.Control type="text" placeholder="search restaurant.." onChange={props.handleChange} value={props.search} />
          </Form.Group>
          <Button type="submit">🔍</Button>
        </Form>
      </Row>
    </Container>
  )
}

export default SearchBar