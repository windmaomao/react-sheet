import styled from 'styled-components'

const fontSize = '40px'
const width = '120px'

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
  font-family: Times New Rome;
  font-size: ${fontSize};
  display: flex;
  flex-direction: column;
  align-items: end;
  width: ${width};
  margin: 2rem 1rem;
  padding: 1rem;

  input {
    background-color: ${backgroundColor};
    font-family: Times New Rome;
    font-size: ${fontSize};
    border-left: none;
    border-right: none;
    border-bottom: 1px dashed #aaa;
    border-top: 2px solid black;
    box-sizing: border-box;
    text-align: right;
    width: 100%;
    line-height: 1.8;
    color: ${color}
  }
`

export default PlusStyle