import React from "react";
import axios from "axios";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        axios.post('http://localhost:5000/login', Object.fromEntries(formData))
            .then((response => console.log(response)))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <>
                <h1>Connectez-vous</h1>
                <form onSubmit={this.handleSubmit} method="POST">
                    <div>
                        <label htmlFor="email">Adresse mail</label>
                        <input type="text" id="email" name="email" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={this.handleChange} />
                    </div>
                    <button type="submit">Se connecter</button>
                </form>
            </>
        )
    }
}
export default Login;