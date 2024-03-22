import { Component } from "react";
import { RiLockPasswordFill } from "react-icons/ri";

import CreatePassword from "../CreatePassword";

import PasswordContainer from "../PasswordContainer";

import "./index.css";

class PasswordManager extends Component {
  state = { passwordsList: [] };

  addPassword = (password) => {
    this.setState((prevState) => ({
      passwordsList: [...prevState.passwordsList, password],
    }));
  };

  deletePassword = (id) => {
    this.setState((prevState) => ({
      passwordsList: prevState.passwordsList.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { passwordsList } = this.state;
    return (
      <div className="app-container">
        <div className="app-responsive-container">
          <div className="title-container">
            <RiLockPasswordFill size={35} color="#ffffff" />
            <p className="app-title">Password Saver</p>
          </div>

          <CreatePassword addPassword={this.addPassword} />
          <PasswordContainer
            passwordsList={passwordsList}
            deletePassword={this.deletePassword}
          />
        </div>
      </div>
    );
  }
}

export default PasswordManager;
