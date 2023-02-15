import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { setCurrentUser } from '../../redux/user/user.action';
import { connect } from 'react-redux';
import axios from 'axios'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password: ''
        };

      }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;
        // try{
        //   await auth.signInWithEmailAndPassword(email, password);
        //   this.setState({email: '', password:''})
        // }catch(error) {
        //   console.log(error);
        // }
        axios.post(`http://localhost/reactMarketPhp/login.php?_ijt=p3bql5fkvi7siegcb2mcbhegn4&email=${email}&password=${password}`)
        .then(response => {
            console.log(response.data);
            if(response.status === 200) {
              this.setState({
                email : '',
                password: ''
              })
              this.props.setCurrentUser({
                currentUser: {
                  id: response.data.id,
                  email: response.data.email,
                  display_name: response.data.display_name
                }
              })
            }
        })
        .catch(err => console.log(err))
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value});
      }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account!</h2>
                  <span>Sign In with Your Email and Password!</span>
                    <form onSubmit={this.handleSubmit}>
                      <FormInput handleChange={this.handleChange} label='email' name='email' type='email' value={this.state.email} required />

                      <FormInput handleChange={this.handleChange} label='password' name='password' type='password' value={this.state.password} required />

                      <div className='buttons'>
                      <CustomButton type='submit' value='Submit Form'>SIGN IN</CustomButton>

                      <CustomButton isGoogleSignIn onClick={signInWithGoogle}>SIGN IN With Google</CustomButton>
                      </div>
                    </form>
            </div>
        )
    }
}

// export default SignIn;
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(SignIn);