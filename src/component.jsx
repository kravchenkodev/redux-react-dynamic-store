import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

export default function Enhance(options) {
    return (BaseComponent) => {
        class EnhancedComponent extends Component {
            static propTypes = {
                register: PropTypes.func.isRequired,
                unregister: PropTypes.func.isRequired,
            };

            componentWillMount() {
                this.props.register(options);
            }

            componentWillUnmount() {
                this.props.unregister(options);
            }

            render() {
                const { register, unregister, update, ...rest } = this.props

                return <BaseComponent {...rest}/>;
            }
        }

        return connect(
            null,
            {
                register: actions.register,
                unregister: actions.unregister,
                update: actions.update,
                ...options.actions
            }
        )(EnhancedComponent);
    };
}
