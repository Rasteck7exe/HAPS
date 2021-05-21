import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
// Screens
import App from "./App";
import Log1 from "./Admin";
import PCa from "./PCadmin";
import AdForm1 from "./adminform1";
import AdForm2 from "./adminform2";
import AdForm3 from "./adminform3";
import { Header, List, Nav, Li, Exit } from "../elements/baseRutas";

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function AuthExample() {
  return (
    <ProvideAuth>
      <Router>
        {/* <div> */}
        <Header>
          <Nav>
            <List>
              <Li>
                <Link
                  to="/public"
                  style={{
                    fontSize: "large",
                    fontWeight: "bold",
                    listStyle: 0,
                    color: "#fff",
                    textDecoration: 0,
                    justifySelf: "stretch",
                    alignSelf: "stretch",
                    // hover: true,
                  }}
                >
                  Registro de Hora
                </Link>
              </Li>
              <Li>
                <Link
                  to="/protected"
                  style={{
                    fontSize: "large",
                    fontWeight: "bold",
                    listStyle: 0,
                    color: "#fff",
                    textDecoration: 0,
                    justifySelf: "stretch",
                    alignSelf: "stretch",
                    // hover: true,
                  }}
                >
                  Iniciar como administrador
                </Link>
              </Li>
              <Li>
                <AuthButton />
              </Li>
            </List>
          </Nav>
        </Header>

        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/protected" exact>
            <ProtectedPage />
          </PrivateRoute>
          <PrivateRoute path="/protected/form1">
            <AdForm1 />
          </PrivateRoute>
          <PrivateRoute path="/protected/form2">
            <AdForm2 />
          </PrivateRoute>
          <PrivateRoute path="/protected/form3">
            <AdForm3 />
          </PrivateRoute>
        </Switch>
        {/* </div> */}
      </Router>
    </ProvideAuth>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signin = (cb) => {
    return fakeAuth.signin(() => {
      setUser("Admin");
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
};

const AuthButton = () => {
  var history = useHistory();
  var auth = useAuth();

  return auth.user ? (
    <Exit
      onClick={() => {
        auth.signout(() => history.push("/"));
      }}
    >
      Cerrar Sesión
    </Exit>
  ) : (
    <p>Eres administrador?, Tu sesión esta Cerrada</p>
  );
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  var auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const PublicPage = () => {
  return <App />;
};

const ProtectedPage = () => {
  return <PCa />;
};

const LoginPage = () => {
  var history = useHistory();
  var location = useLocation();
  var auth = useAuth();

  var { from } = location.state || { from: { pathname: "/" } };
  var login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return <Log1 NavLog={login} />;
};
