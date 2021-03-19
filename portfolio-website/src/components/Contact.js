import React,{Component} from "react";
import "../styles/contact.css";

class Contact extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section  className="contact py-5 bg-dark" id="contact">
                <div id="Contact" className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1><span style={{color:"#fff"}}>Get in </span><span style={{color:"#03aad7"}}>touch</span></h1>
                            <hr/>
                        </div>
                        <div className="col-md-6">
                            <div className="address">
                                
                            <h5>Address:</h5>
                            <ul className="list-unstyled">
                                <li> Poland, Slaskie</li>
                                <li> PO Box 42-500</li>
                            </ul>
                            </div>
                            <div className="email">
                            <h5>Email:</h5>
                            <ul className="list-unstyled">
                                <li> koznem24@gmail.com</li>
                                <li> nematullo.kozimov@student.wsb.edu.pl</li>
                            </ul>
                            </div>
                            <div className="phone">
                                <h5>Phone:</h5>
                                <ul className="list-unstyled">
                                <li> +48 789 215 805</li>
                            </ul>
                            </div>
                            <hr/>
                            <div className="social">
                            <ul className="list-inline list-unstyled">
                                <li className="list-inline-item">
                                    <a href="#"><i className="fa fa-facebook-square fa-2x"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><i className="fa fa-google-plus-square fa-2x"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><i className="fa fa-youtube-play fa-2x"></i></a>
                                </li>
                            </ul>
                             </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                {/* Needs Control */}
                                            <input id="Full Name" name="Full Name" placeholder="Full Name" className="form-control" type="text"/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                {/* Needs Control */}
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                 {/* Needs Control */}
                                                <input id="Mobile No." name="Mobile No." placeholder="Mobile No." className="form-control" required="required" type="text"/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                     {/* Needs Control */}
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Choose ...</option>
                                                        <option> New Buyer</option>
                                                        <option> Auction</option>
                                                        <option> Complaint</option>
                                                        <option> Feedback</option>
                                                    </select>
                                            </div>
                                            <div className="form-group col-md-12">
                                                     {/* Needs Control */}
                                                    <textarea id="comment" name="comment" cols="40" rows="5" placeholder="Your Message"className="form-control"></textarea>
                                            </div>
                                        </div>
                                        
                                        <div className="form-row">
                                            <button type="button" className="btn btn-danger">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </section>
        );
    }
}
export default Contact;