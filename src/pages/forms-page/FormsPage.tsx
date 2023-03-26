import React, { Component } from 'react';

import './FormsPage.css';

interface FormState {
  isShowData: boolean;
  name: string;
  email: string;
  date: string;
  selectedOption: string;
  isChecked: boolean;
  selectedFile: File | null;
}

class FormsPage extends Component<{}, FormState> {
  state = {
    name: '',
    email: '',
    date: 'not entered',
    selectedOption: 'option1',
    isChecked: false,
    selectedFile: null,
    isShowData: false,
  };

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (this.state.isShowData) {
      this.setState({ isShowData: false });
    }
    this.setState({ name: event.target.value });
  };

  handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (this.state.isShowData) {
      this.setState({ isShowData: false });
    }
    this.setState({ date: event.target.value });
  };

  handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (this.state.isShowData) {
      this.setState({ isShowData: false });
    }
    this.setState({ selectedOption: event.target.value });
  };

  handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (this.state.isShowData) {
      this.setState({ isShowData: false });
    }
    this.setState({ isChecked: event.target.checked });
  };

  handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (this.state.isShowData) {
      this.setState({ isShowData: false });
    }
    if (event.target.files !== null && event.target.files.length > 0) {
      this.setState({ selectedFile: event.target.files[0] });
    }
  };

  handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (this.state.isShowData) {
      this.setState({ isShowData: false });
    }
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Name:', this.state.name);
    console.log('Date:', this.state.date);
    console.log('Selected Option:', this.state.selectedOption);
    console.log('Is Checked:', this.state.isChecked);
    console.log('Selected File:', this.state.selectedFile);
    this.setState({ isShowData: true });
  };

  render() {
    const { name, date, selectedOption, isChecked, email, isShowData } = this.state;

    return (
      <div>
        <div className="form-wrapper">
          <form className="form" onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} required onChange={this.handleNameChange} />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={this.handleEmailChange}
              />
            </label>
            <br />
            <label>
              Date:
              <input type="date" value={date} onChange={this.handleDateChange} />
            </label>
            <br />
            <label>
              Select:
              <select value={selectedOption} onChange={this.handleOptionChange}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </label>
            <br />
            <label>
              Checkbox:
              <input type="checkbox" checked={isChecked} onChange={this.handleCheckboxChange} />
            </label>
            <br />
            <label>
              Upload Image:
              <input type="file" accept="image/*" onChange={this.handleFileChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>

        {isShowData && (
          <div className="form-content-wrapper">
            <div className="form-content">
              <div>Name: {name}</div>
              <div>Date: {date}</div>
              <div>Email: {email}</div>
              <div>isChecked: {isChecked ? 'yes' : 'no'}</div>
              <div>Option: {selectedOption}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FormsPage;
