import styled from 'styled-components'
import variables from '../variables'

const fontSize = '2.5rem'
const width = '7.5rem'
const fontFamily = variables.fontFamily

const color = props => {
  if (props.error) return 'red'
  return 'black'
}

const backgroundColor = props => {
  if (props.active) return '#f2f2f2'
  return 'white'
}

const PlusStyle = styled.div`
  background-color: ${backgroundColor};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  display: flex;
  flex-direction: column;
  align-items: end;
  width: ${width};
  margin: 1rem 1rem;
  padding: 1rem;

  input {
    background-color: ${backgroundColor};
    font-family: ${fontFamily};
    font-size: ${fontSize};
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-top: 2px solid ${color};
    box-sizing: border-box;
    text-align: right;
    width: 100%;
    line-height: 1.8;
    color: ${color}
  }
`

export default PlusStyle