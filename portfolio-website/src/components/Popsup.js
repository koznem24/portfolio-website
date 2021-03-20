import React,{Component} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Popsup extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Popup trigger={this.props.popup} position="right center">
                 <div>Popup content here !!</div>
            </Popup>
        );
    }
}

export default Popsup;