import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  LoginForm,
  LabelEl,
  InputEl,
  LoginBtn,
  CheckboxContainer,
  CheckBoxLabel,
  ErrMsg,
} from './styledComponents'

import './index.css'

const lightTheme =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkTheme =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: true,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = event => {
    this.setState({
      showPassword: !event.target.checked,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onClickLoginBtn = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      showPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoginContainer isLight={isDarkTheme}>
              <LoginForm onSubmit={this.onClickLoginBtn} isLight={isDarkTheme}>
                <img
                  className="website-logo-img"
                  src={isDarkTheme ? darkTheme : lightTheme}
                  alt="website logo"
                />
                <LabelEl htmlFor="username" isLight={isDarkTheme}>
                  USERNAME
                </LabelEl>
                <InputEl
                  onChange={this.onChangeUsername}
                  value={username}
                  id="username"
                  type="text"
                  placeholder="Username"
                  isLight={isDarkTheme}
                />
                <LabelEl htmlFor="password" isLight={isDarkTheme}>
                  PASSWORD
                </LabelEl>
                <InputEl
                  onChange={this.onChangePassword}
                  value={password}
                  id="password"
                  type={showPassword ? 'password' : 'text'}
                  placeholder="Password"
                  isLight={isDarkTheme}
                />
                <CheckboxContainer>
                  <input
                    onChange={this.onChangeShowPassword}
                    value={showPassword}
                    className="checkbox"
                    type="checkbox"
                    id="showPassword"
                  />
                  <CheckBoxLabel isLight={isDarkTheme} htmlFor="showPassword">
                    Show Password
                  </CheckBoxLabel>
                </CheckboxContainer>
                <LoginBtn type="submit">Login</LoginBtn>
                <ErrMsg>{showSubmitError ? errorMsg : null}</ErrMsg>
              </LoginForm>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
