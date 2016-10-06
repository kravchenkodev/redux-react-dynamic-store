import React, { Component, PropTypes, createElement } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

export default function Enhance(store, options) {
    return (BaseComponent) => {
        class EnhancedComponent extends Component {
            static propTypes = {
                register: PropTypes.func.isRequired,
            };

            componentWillMount() {
                this.props.register({ ...options, store });
            }

            render() {
                const { register, ...rest } = this.props;

                const ConnectedComponent = connect(
                    options.mapStateToProps,
                    options.actions
                )(BaseComponent);

                return <ConnectedComponent {...rest} />
            }
        }

        return connect(
            null,
            { register: actions.register }
        )(EnhancedComponent);
    };
}
