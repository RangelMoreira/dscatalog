import './styles.scss';
import { ReactComponent as AuthImage } from 'core/assets/images/auth.svg';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';

const Auth = () => (
  <div className="auth-container">
    <div className="auth-info">
      <h1 className="auth-info-title">
        Divulgue seus produtos <br />
        no DS Catalog
      </h1>
      <p className="auth-info-subtitle">
        Faça parte do nosso catálogo de divulgação e <br />
        aumente a venda dos seus produtos.
      </p>
      <AuthImage />
    </div>
    <div className="auth-content">
      <Switch>
        <Route path="/admin/auth/login">
          <Login/>
        </Route>
        <Route path="/admin/auth/register">
          <h1>Cadastro</h1>
        </Route>
        <Route path="/admin/auth/recover">
          <h1>Recuperação</h1>
        </Route>
      </Switch>
    </div>
  </div>
);

export default Auth;