import styled from 'styled-components'

const color = props => {
  if (props.error) return 'red'
  return 'black'
}

const PlusStyle = styled.div`
  font-family: Times New Rome;
  font-size: 35px;
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 120px;
  margin: 2rem 1rem;

  input {
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

  .__last {
    display: flex;
    flex-direction: row;
  }
`

export default PlusStyle