import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

export default function Enhance(optionalStore, options) {
    return (BaseComponent) => {
        class EnhancedComponent extends Component {
            static contextTypes = {
                store: PropTypes.object,
            };

            static propTypes = {
                register: PropTypes.func.isRequired,
            };

            componentWillMount() {
                const { register } = this.props;
                const { store } = this.context;

                register({ ...options, store });
            }

            render() {
                const ConnectedComponent = connect(
                    options.mapStateToProps,
                    options.actions,
                    options.mergeProps,
                    options.options
                )(BaseComponent);

                return <ConnectedComponent {...this.props} />;
            }
        }

        return connect(
            null,
            { register: actions.register }
        )(EnhancedComponent);
    };
}
