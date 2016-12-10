import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { connectDynamicStore } from '../../dist';
import store from './store';

const changeFruit = payload => ({ type: 'CHANGE_FRUIT', payload });

class FruitContainer extends Component {
    static propTypes = {
        changeFruit: PropTypes.func.isRequired,
        fruit: PropTypes.string,
    }

    constructor(...args) {
        super(...args);

        this.state = {
            fruit: 'Orange'
        };
    }

    render() {
        return (
            <div>
                <label htmlFor="fruit-input">Your fruit:</label>
                <input
                    type="text"
                    id="fruit-input"
                    onChange={e =>
                        this.setState({ fruit: e.target.value })
                    }
                />
                <button
                    onClick={() =>
                        this.props.changeFruit(this.state.fruit)
                    }
                >
                    Change
                </button>
                <div>Current fruit: {this.props.fruit}</div>
            </div>
        );
    }
}

const WrappedFruitContainer = connectDynamicStore(store, {
    name: 'componentStore',
    actions: {
        changeFruit
    },
    mapStateToProps: state => ({
        fruit: state.componentStore.fruit
    }),
    reducer: (state = { fruit: 'Orange' }, action) => {
        switch (action.type) {
        case 'CHANGE_FRUIT':
            return {
                ...state,
                fruit: action.payload
            };
        default:
            return state;
        }
    }
})(FruitContainer);

class Application extends Component { // eslint-disable-line react/no-multi-comp
    static propTypes = {
        state: PropTypes.object.isRequired, // eslint-disable-line
    };

    constructor(...args) {
        super(...args);

        this.state = {
            on: false
        };
    }

    render() {
        const { state } = this.props;

        return (
            <div>
                <button
                    onClick={() => {
                        this.setState({ on: !this.state.on });
                    }}
                >
                    Switch {this.state.on ? 'Off' : 'On'}
                </button>
                {
                    this.state.on
                        ? <WrappedFruitContainer />
                        : null
                }
                <br />
                <span>
                    Stringified state: <br />
                    {JSON.stringify(state)}
                </span>
            </div>
        );
    }
}

export default connect(
    state => ({ state })
)(Application);
