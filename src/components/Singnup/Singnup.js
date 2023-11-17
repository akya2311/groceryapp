import { Component } from 'react'
//import Cookies from 'js-cookie'
//import {Redirect} from 'react-router-dom'

import './Singnup.css'

class Singnup extends Component {
    state = {
        name: '',
        address: '',
        mobile: '',
        username: '',
        password: '',
        showSubmitError: false,
        errorMsg: '',
    }

    /* onChangeUsername = event => {
       this.setState({username: event.target.value})
     }
   
     onChangePassword = event => {
       this.setState({password: event.target.value})
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
   
     submitForm = async event => {
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
     }*/

    renderPasswordField = () => {
        const { password } = this.state
        return (
            <>
                <label className="input-label" htmlFor="password">
                    PASSWORD
                </label>
                <input
                    type="password"
                    id="password"
                    className="password-input-field"
                    value={password}
                    onChange={this.onChangePassword}
                />
            </>
        )
    }

    renderUsernameField = () => {
        const { username } = this.state
        return (
            <>
                <label className="input-label" htmlFor="username">
                    USERNAME
                </label>
                <input
                    type="text"
                    id="username"
                    className="username-input-field"
                    value={username}
                    onChange={this.onChangeUsername}
                />
            </>
        )
    }

    render() {
        const { showSubmitError, errorMsg, name, username, mobile, address } = this.state
        /*const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
          return <Redirect to="/" />
        }*/
        return (
            <div className="login-form-container background-img-mobile">
                <div className="login-container">
                    <form className="form-container background-img-desktop" onSubmit={this.submitForm}>
                    <img
                        src="https://res.cloudinary.com/dkobk5oao/image/upload/v1633608363/Frame_274_mqin4h.png"
                            className="login-website-logo-desktop-image"
                            alt="website logo"
                        />
                        <h1 className="logo-heading">Kirana Market</h1>
                        <h1 className="login-heading">Singnup</h1>
                        <div className="input-container">
                            <label className="input-label" htmlFor="username">
                                NAME
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="username-input-field"
                                value={name}
                                onChange={this.onChangeUsername}
                            />
                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor="username">
                             ADDRESS
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="username-input-field"
                                value={address}
                                onChange={this.onChangeUsername}
                            />
                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor="username">
                                MOBILE NUMBER
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="username-input-field"
                                value={mobile}
                                onChange={this.onChangeUsername}
                            />
                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor="username">
                                USERNAME
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="username-input-field"
                                value={username}
                                onChange={this.onChangeUsername}
                            />
                        </div>

                        <div className="input-container">{this.renderPasswordField()}</div>
                        <button type="submit" className="login-button">
                            Singnup
                        </button>
                        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                    </form>
                </div>
            </div>
        )
    }
}

export default Singnup
