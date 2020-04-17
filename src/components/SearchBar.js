import React from 'react';
import { Form, Button } from 'react-bootstrap';
const SearchBar = (props) => {

  return (
    <Form inline onSubmit={props.handleSubmit}>
      <Form.Group controlId="formInlineName">
        <Form.Control type="text" placeholder="search restaurant.." onChange={props.handleChange} value={props.search} />
      </Form.Group>
      <Button type="submit">🔍</Button>
    </Form>
  )
}

export default SearchBar