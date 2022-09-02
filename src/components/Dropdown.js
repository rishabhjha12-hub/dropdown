import { buildQueries } from "@testing-library/react";
import React from "react";

const mystyles={
    body:{
        backgroundColor:'blue',
        height:'50%',
        width:'30%',
        margin:'auto',
        padding:"10%"
    }
}
export class Dropdown extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }
  

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={mystyles.body}>
        <label>
          <div style={{fontSize:'1.5rem',color:'white'}}>
            Should you use a Dropdown
          </div>
          <select value={this.state.value} onChange={this.handleChange} style={{padding:"0.8rem",width:'20rem'}}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}