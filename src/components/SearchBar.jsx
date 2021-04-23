import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import * as requests from '../containers/requests';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    requests
      .searchRestaurants(search)
      .then((response) => response.json())
      .then((datas) => this.setState({ datas, search: '' }));
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormControl
        type='text'
        placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
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
