import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const CONTAINER = styled.div`
  background: #f7f9fa;
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  @media (min-width: 786px) {
    width: 60%;
  }
  label {
    color: #24b9b6;
    font-size: 1.2em;
    font-weight: 400;
  }
  .error {
    border: 2px solid #ff6565;
  }
  .error-message {
    color: #ff6565;
    padding: 0.5em 0.2em;
    height: 1em;
    position: absolute;
    font-size: 0.8em;
  }
  h1 {
    color: #24b9b6;
    padding-top: 0.5em;
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
  @media (min-width: 786px) {
    width: 50%;
  }
`;

export const BUTTON = styled(Button)`
  background: #1863ab;
  border: none;
  font-size: 1.2em;
  font-weight: 400;
  margin-left: 40px;
  &:hover {
    background: #1d3461;
  }
`;

export const INPUT = styled(Button)`
  background: #1863ab;
  border: none;
  font-size: 1.2em;
  font-weight: 400;
  margin-left: 40px;
  &:hover {
    background: #1d3461;
  }
`;
