import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Drawer extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    component: PropTypes.elementType.isRequired,
  };

  open() {
    document.body.style.transform = 'translateX(-320px)';
  }

  close() {
    document.body.style.transform = 'translateX(0)';
  }

  componentDidMount() {
    document.body.style.transition = 'all 0.25s ease-out';
    if (this.props.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }

  shouldComponentUpdate(nextProps) {
    nextProps.isOpen ? this.open() : this.close();
    return true;
  }

  render() {
    const { component: Component } = this.props;
    return (
      <React.Fragment>
        <div className="drawer">
          <Component {...this.props} />
        </div>
        <style jsx>
          {`
            .drawer {
              position: fixed;
              width: 320px;
              right: -320px;
              top: 0;
              bottom: 0;
              max-width: 95%;
              z-index: 10;
              color: #333;
              background-color: #fff;
              border-left: none;
              box-shadow: 0 0px 36px 0 rgba(0, 0, 0, 0.1);
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}