import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;
    if (loading) {
      return <Spinner />;
    }
    return (
      <Fragment>
        <Link exact to="/" className="btn btn-light">
          Back to Search
        </Link>
      </Fragment>
    );
  }
}

export default User;
