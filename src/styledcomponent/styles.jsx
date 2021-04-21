import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const CONTAINER = styled.div`
  background: #F7F9FA;
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  @media(min-width: 786px) {
    width: 60%;
  }
  label {
    color: #24B9B6;
    font-size: 1.2em;
    font-weight: 400;
  }
  .error {
    border: 2px solid #FF6565;
  }
  .error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }
  h1 {
    color: #24B9B6;
    padding-top: .5em;
  }
  .form-group {
    margin-bottom: 2.5em;
  }
`;

export const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;
  @media(min-width: 786px) {
    width: 50%;
  }
`;

export const BUTTON = styled(Button)`
  background: #1863AB;
  border: none;
  font-size: 1.2em;
  font-weight: 400;
  margin-left: 40px;
  &:hover {
    background: #1D3461;
  }
`;