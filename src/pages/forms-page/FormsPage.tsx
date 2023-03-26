import React, { Component, FormEvent } from 'react';

import './FormsPage.css';

interface FormState {
  formData: FormData;
  isShowData: boolean;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

class FormsPage extends Component<{}, FormState> {
  state: FormState = {
    formData: {
      firstName: '',
      lastName: '',
      email: '',
    },
    isShowData: false,
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.setState(() => ({
      isShowData: true,
    }));
  };

  render() {
    const { formData, isShowData } = this.state;

    return (
      <div>
        <div className="form-wrapper">
          <form className="form" onSubmit={this.handleSubmit}>
            <label className="form__input">
              First Name:
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={this.handleInputChange}
              />
            </label>
            <label className="form__input">
              Last Name:
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={this.handleInputChange}
              />
            </label>
            <label className="form__input">
              Email:
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={this.handleInputChange}
              />
            </label>
            <div className="form__actions">
              <button className="form__button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>

        {isShowData && (
          <div className="form-content">
            <div>Firstname: {formData.firstName}</div>
            <div>Lastname: {formData.lastName}</div>
            <div>Email: {formData.email}</div>
          </div>
        )}
      </div>
    );
  }
}

export default FormsPage;
