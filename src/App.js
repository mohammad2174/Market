
import Header from './components/header/header.component';
import { Route , Switch, Redirect } from 'react-router-dom';
import { auth , createUserProfileDocument } from './firebase/firebase.utils';
import { Component , lazy  , Suspense} from 'react';
import { setCurrentUser } from './redux/user/user.action';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selecrors'
import { createStructuredSelector } from 'reselect'
// import { selectCollcetionsForPreview } from './redux/shop/shop-selectors'
import { GlobalStyle } from './global.styles'
import ErrorBoundery from './components/error-boundry/error-boundry.component';


const HomePage = lazy(() => import('./components/pages/homepage/homePage.component'))
const ShopPage = lazy(() => import('./components/pages/shop/shop.component'))
const CheckoutPage = lazy(() => import('./components/pages/checkout/checkout.component'))
const SignInAndSignUp = lazy(() => import('./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle></GlobalStyle>
        <Header />
        <Switch>
        <ErrorBoundery>
          <Suspense fallback={<div>...</div>}>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/checkout' component={CheckoutPage}></Route>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUp />}></Route>
          </Suspense>
        </ErrorBoundery>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
})

export default connect(mapStateToProps ,mapDispatchToProps)(App);
