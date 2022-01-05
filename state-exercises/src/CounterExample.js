import React from 'react';

class CountingParent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            actionCount: 0,
        };

        this.handleAction = this.handleAction.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }
    handleAction(event) {
        console.log('Child did:', event);

        this.setState({
            actionCount: this.state.actionCount + 1
        })
    }

    resetCount() {
        this.setState({
            actionCount: 0
        })
    }
    render() {
        return(
            <div>
            <Child onAction={this.handleAction}/>
            <button  onClick={this.resetCount}>Reset</button>
            <p>Clicked {this.state.actionCount}</p>
            </div>
        );
    }
}

function Child({ onAction }) {
    return(
        <button onClick={onAction}>
            Click Me!
        </button>
    );
}

function CounterExample() {
    return(
        <div>
            <CountingParent/>
            <CountingParent/>
            <CountingParent/>
        </div>
    );
}

export default CounterExample;