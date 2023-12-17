import { styled } from 'styled-components'
import { fontSize } from '../styles/fontSize'
import { palette } from '../styles/palette'

export const StyledInput = styled.input`
  padding: 5px 10px;
  margin: 2px;
  width: calc(100% - 4px);
  color: ${palette.input.textColor};
  background-color: ${palette.input.backgroundColor};
  border: 0;
  border-radius: 8px;
  font-size: ${fontSize.input};
  box-sizing: border-box;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: 1px solid ${palette.input.focusOutlineColor};
  }
  &:read-only {
    background-color: ${palette.input.disabledBackgroundColor};
  }
  &:read-only:focus {
    outline: none;
  }
`

export const StyledSelect = styled.select`
  padding: 5px 10px;
  margin: 2px;
  width: calc(100% - 4px);
  color: ${palette.input.textColor};
  background-color: ${palette.input.backgroundColor};
  border: 0;
  border-radius: 8px;
  font-size: ${fontSize.input};
  &:focus {
    outline: 1px solid ${palette.input.focusOutlineColor};
  }
  &:focus > option:checked {
    background: ${palette.input.selectedOptionBackgroundColor} !important;
  }
`

export const StyledLabel = styled.label`
    font-size: ${fontSize.label};
    margin: 6px 8px -2px;
color: ${palette.input.labelTextColor};
`
