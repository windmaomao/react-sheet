import styled from 'styled-components'

const ScoreStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  color: white;
  padding: 1rem;
  font-size: 1.25rem;
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .error {
      color: coral;
    }
  }
`

export default ScoreStyle

