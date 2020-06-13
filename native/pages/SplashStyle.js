import styled from 'styled-components'

const SplashStyle = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: #F5FCFF;
`

export default SplashStyle

const TextStyle = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
`

const SubTextStyle = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5px;
`

const BackgroundStyle = styled.Image`
  bottom: 0;
  flex: 1;
  align-self: stretch;
  width: 100%;
`

export { TextStyle, SubTextStyle, BackgroundStyle }
