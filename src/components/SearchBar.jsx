import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = (props) => {
  const { handleSubmit, handleChange, search } = props;

  return (
    <Form inline onSubmit={(e) => handleSubmit(e)}>
      <FormControl
        type='text'
        placeholder='Search'
        onChange={(e) => handleChange(e)}
        value={search}
        className='mr-sm-2'
      />
      <Button type='submit' variant='outline-success'>
        Submit
      </Button>
    </Form>
  );
};

export default SearchBar;
