import React, { Component } from "react";

class NmtEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nmtSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    nmtHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.nmtSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            nmtSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    nmtHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.nmtSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.nmtSelectCheckBox.includes("Apple")}
              onChange={this.nmtHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.nmtSelectCheckBox.includes("Banana")}
              onChange={this.nmtHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.nmtSelectCheckBox.includes("Orange")}
              onChange={this.nmtHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.nmtHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NmtEventForm4;