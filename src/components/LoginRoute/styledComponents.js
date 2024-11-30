import styled from 'styled-components'

export const LoginContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-radius:12px;
padding:13px;
color:${props => (props.isLight ? ' #f9f9f9' : ' #0f0f0f')};
background-color${props => (props.isLight ? ' #0f0f0f' : ' #f9f9f9')};
height:100vh;

`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  padding: 15px;
  border-radius: 12px;
  background-color: ${props => (props.isLight ? ' #1e293b' : '  #EFEEEE')};
  width: 90vw;

  @media (min-width: 768px) {
    width: 40%;
    height: 75%;
    padding: 40px;
  }
`

export const LabelEl = styled.label`
  color: ${props => (props.isLight ? ' #f9f9f9' : ' #0f0f0f')};
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  padding-top: 20px;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const InputEl = styled.input`
  width: 100%; /* Full width */
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  font-size: 18px;
  border: 2px solid ${props => (props.isLight ? '#444' : '#ccc')};
  background-color: ${props => (props.isLight ? '#1e293b' : ' #f9f9f9')};
  color: ${props => (props.isLight ? '#fff' : '#000')};
  outline: 1px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 8px; /* Add margin if needed */
  cursor: pointer;
`

export const CheckBoxLabel = styled.label`
  color: ${props => (props.isLight ? ' #f9f9f9' : ' #0f0f0f')};
  font-weight: 400;
  font-size: 17px;
  margin-left: 8px; /* Space between checkbox and label */
  cursor: pointer;
`

export const LoginBtn = styled.button`
  width: 80vw;
  color: #ffffff;
  background-color: #4f46e5;
  border-radius: 5px;
  padding: 11px;
  margin-top: 14px;
  outline: none;
  border: none;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 100%;
  }
`
export const ErrMsg = styled.p`
  color: #ff0000;
  font-size: 14px;
  text-align: left;
  width: 100%;
  padding-top: 0px;
`
