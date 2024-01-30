import styled from 'styled-components';

export const StyledInput = styled.input`
  color: #787878;
  background-color: #FFF;
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 5px 10px;
  height: 42px;
  box-shadow: none;
  font-size: 0.80rem;
  &:focus {
    border-color: #311c79;
    box-shadow: none !important;
  }

  &.sm {
    height: 40px;
  }

  &.md {
    height: 42px;
  }

  &.lg {
    height: 43px;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  color: #333;
  margin-bottom: 5px;
`;

export const StyledSelect = styled.select`
  color: #787878;
  background-color: #FFF;
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 5px 10px;
  height: 42px;
  box-shadow: none;
  font-size: 0.80rem;
  appearance: auto !important;
  &:focus {
    border-color: #311c79;
    box-shadow: none !important;
  }

  &.sm {
    height: 40px;
  }

  &.md {
    height: 42px;
  }

  &.lg {
    height: 43px;
  }
`;

export const CustomButton = styled.button`
  color: #ffffff;
  font-size: 0.80rem;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;

  &.btn-primary {
    background-color: #311c79;
    border: 1px solid #311c79;
    &:hover {
      background-color: #311c79;
    }
    &:acitve {
      background-color: #311c79;
    }
  }

  &.sm {
    padding: 2px 5px;
    font-size: 0.65rem;
  }

  &.md {
    padding: 8px 20px;
  }
  
  &.lg {
    width: 100%;
    padding: 8px 20px
  }

  &.btn-danger {
    background-color: #c01f2f;
    border: 1px solid #c01f2f;
    &:hover {
      background-color: #c01f2f;
    }
    &:acitve {
      background-color: #c01f2f;
    }
  }
`;


