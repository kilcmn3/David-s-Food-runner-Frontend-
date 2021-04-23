import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import * as requests from '../containers/requests';

const SearchBar = (props) => {
  const { handleSubmit, handleChange, search } = props;

  return (
    <Form inline onSubmit={(e) => handleSubmit(e)}>
      <FormControl
        type='text'
        placeholder='Search'
        onChange={(e) => handleChange(e.target.value)}
        value={search}
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
