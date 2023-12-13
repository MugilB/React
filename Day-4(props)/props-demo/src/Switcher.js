import React from "react";

class Switcher extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            isOn: false,
        }
    }

    handleToggle = () =>{
        this.setState((prevState)=> ({
            isOn: !prevState.isOn,
        }));
    };

    render()
    {
        return(
            <div>
                <button onClick={this.handleToggle}>
                    {this.state.isOn ? 'ON':'OFF'}
                </button>
            </div>
        );
    }
}

export default Switcher;