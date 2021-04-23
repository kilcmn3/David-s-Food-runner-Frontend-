import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = (props) => {
  return (
    <Form inline onSubmit={props.handleSubmit}>
      <FormControl
        type='text'
        placeholder='Search'
        onChange={props.handleChange}
        value={props.search}
        className='mr-sm-2'
      />
      <Button type='submit' variant='outline-success'>
        Submit
      </Button>
    </Form>

    // <Container>
    //   <Row className='justify-content-md-center'>
    //     <Col></Col>
    //     <Col></Col>
    //     <Col>
    //       <Form inline>
    //         <Form.Group controlId='formInlineName'>
    //           <Form.Control
    //             type='text'
    //             placeholder='search restaurant..'

    //           />
    //         </Form.Group>
    //         <Button type='submit'>🔍</Button>
    //       </Form>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default SearchBar;
