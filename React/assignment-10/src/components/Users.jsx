/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./Users.css";
import axios from "axios";
import Login from "./Login";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      users: [],
      singleUser: [],
      isShowtable: false,
      isShowMoreInfo: false,
      isRedirect: false,
    };
  }
  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      query: event.target.value,
    });
  };
  handleClick = () => {
    axios
      .get("https://api.github.com/search/users?", {
        params: {
          q: this.state.query,
        },
      })
      .then((res) => {
        this.setState({
          isShowtable: true,
          users: res.data.items,
          query: "",
        });
      })
      .catch((err) => console.log(err));
  };
  handleMoreinfo = (login) => {
    // axios
    //   .get(`https://api.github.com/users/${login}/repos`)
    //   .then((res) => {
    //     // console.log(res);
    //     this.setState({
    //       repo:res.data
    //     })
    //   })
    //   .catch((err) => console.log(err));
    // axios.get(`https://api.github.com/users/${login}/followers`)
    //   .then(res => {
    //     this.setState({
    //       followers:res.data
    //     })
    //   })
    // .catch(err => console.log(err))
    axios
      .get(`https://api.github.com/users/${login}`)
      .then((res) => {
        this.setState({
          isShowMoreInfo:true,
          singleUser: res.data
          
        })
      })
      .catch((err) => console.log(err));
  };
  handleRedirect = () => {
    this.setState({
      isRedirect: true,
    });
  }

  render() {
    console.log(this.state);
    if (this.state.isRedirect) {
      return <Login />;
    }
    return (
      <>
        <button className="redirect-button" onClick={this.handleRedirect}>Logout</button>
        <div className="users-container">
          <div className="users-input-div">
            <input
              className="users-input"
              type="text"
              value={this.state.query}
              placeholder="Search"
              onChange={this.handleChange}
            />
          </div>
          <button className="users-button" onClick={this.handleClick}>
            Search
          </button>
        </div>
        <div className="moreinfo-div">
          {this.state.isShowMoreInfo && (
            <table>
              <tr>
                <th>USERNAME</th>
                <th>REPO CREATED DATE</th>
                <th>PUBLIC REPOS</th>
                <th>FOLLOWERS</th>
              </tr>
              <tr>
                <td>{this.state.singleUser.name}</td>
                <td>{this.state.singleUser.created_at}</td>
                <td>{this.state.singleUser.public_repos}</td>
                <td>{this.state.singleUser.followers}</td>
              </tr>
            </table>
          )}
        </div>
        <div>
          {this.state.isShowtable && (
            <table>
              <tr>
                <th>USERNAME</th>
                <th>PROFILE PHOTO</th>
                <th>MORE INFORMATION</th>
              </tr>
              {this.state.users.map((item) => {
                return (
                  <tr>
                    <td>{item.login}</td>
                    <td>
                      <img src={item.avatar_url} alt="Photo" />
                    </td>
                    <td>
                      <button onClick={() => this.handleMoreinfo(item.login)}>
                        More info
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          )}
        </div>
      </>
    );
  }
}
