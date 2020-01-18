import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "../Auxilary/Auxilary";
// Creatinhg a class factory so we are creating a stateless component but returning a class
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      err: null
    };
    componentWillMount() {
      this.reqInterceptors = axios.interceptors.request.use(req => {
        this.setState({ err: null });
        return req;
      });
      this.resInterceptors = axios.interceptors.response.use(
        res => res,
        err => {
          this.setState({ err: err });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptors);
      axios.interceptors.response.eject(this.resInterceptors);
    }

    errorConfirmedHandler = () => {
      this.setState({ err: null });
    };

    render() {
      return (
        <Auxiliary>
          <Modal show={this.state.err} modalClosed={this.errorConfirmedHandler}>
            {this.state.err ? this.state.err.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};

export default withErrorHandler;
