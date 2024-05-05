import SignUpForm from '../../components/sign-up-form/SignUpForm';
import SignInForm from '../../components/sign-in-form/SignInForm';
import './authentication.style.scss'
import Header from "../../components/header_components/Header"
const Authentication = () => {

  return (
    <div>
      <Header/>
      <div className='authentication-container'>
      <SignInForm/>
      <SignUpForm/>
    </div>

    </div>
    
  )
}

export default Authentication