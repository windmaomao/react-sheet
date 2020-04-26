import styled from 'styled-components'

const color = props => {
  if (props.error) return 'red'
  return 'black'
}

const backgroundColor = props => {
  if (props.active) return '#fafafa'
  return 'white'
}

const PlusStyle = styled.div`
  background-color: ${backgroundColor};
  font-family: Times New Rome;
  font-size: 35px;
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 90px;
  margin: 2rem 1rem;
  padding: 1rem;

  input {
    background-color: ${backgroundColor};
    font-family: Times New Rome;
    font-size: 35px;
    border-left: none;
    border-right: none;
    border-bottom: 1px dashed #aaa;
    border-top: 2px solid ${color};
    box-sizing: border-box;
    text-align: right;
    width: 80px;
    height: 60px;
  }
`

export default PlusStyle