import LandingPage from '../screens/landingpage/LandingPage';
import LoginOptions from '../screens/loginoptions/LoginOptions';
import SignIn from '../screens/signIn/SignIn'
import SignUp from '../screens/signUp/SignUp'
import Home from '../screens/home/Home'
import MenuPage from '../screens/menupage/MenuPage'
import CartPage from '../screens/cartpage/CartPage'
import ProfilePage from '../screens/profilepage/ProfilePage'

export default {
  Landing: {
    landingPage: {
      routeName: 'landingPage',
      component: LandingPage,
    },
  },
  Login: {
    loginOptions: {
      routeName: 'loginOptions',
      component: LoginOptions,
    },
    SignIn: {
      routeName: 'signIn',
      component: SignIn,
    },
    SignUp: {
      routeName: 'signUp',
      component: SignUp,
    }
  },

  Home: {
    home: {
      routeName: 'Home',
      component: Home,
    }
  },
  Menu: {
    menu: {
      routeName: 'Menu',
      component: MenuPage,
    }
  },
  Cart: {
    cart: {
      routeName: 'Cart',
      component: CartPage,
    }
  },
  Profile: {
    profile: {
      routeName: 'Profile',
      component: ProfilePage,
    }
  }
};
