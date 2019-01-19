import React, { Component } from 'react';
import '../App.css';

class HomeScreen extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="\coding_cougs.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Coding Cougs Programming Club</h1>
        </header>
        <p className="App-intro">
          <strong>Description</strong>
          <p>Coding Cougs is a club that fosters a culture of learning within the
          CS community of the Tri-Cities region. Our mission is to create an environment
          that will encourage the innovation of skills that will build a better tomorrow 
          in today's evolving society.</p>

          <strong>Category</strong>
          <p>Academic</p>

          <strong>Organization Name</strong>
          <p>Coding Cougs</p>

          <strong>Organization Type</strong>
          <p>Student Club or Organization (RSO)</p>

          <strong>Organization Email</strong>
          <p>jerar.farah@wsu.edu</p>

          <strong>List three goals your organization wishes to accomplish.</strong>
          <p>We would like to accomplish three different things: <br/>
            <ul>
              <li>One being that we would like to organize talk and events that are led by students, faculty and community guests.</li>
              <li>Another goal would be to transition this RSO in to an ACM (association of computing Machinery) student chapter.</li>
              <li>Finally, we would like to accomplish is a bridge between WSU Tri-Cities and the surrounding computer science community that surrounds the Tri-Cities.</li>
            </ul>
          </p>

          <strong>What role does your organization play in the student experience on the WSU Tri-Cities campus?</strong>
          <p>The role of our organization is to grant student ideas a place to be thought, planned, and created.</p>

          <strong>What can members expect to learn from your organization?</strong>
          <p>Our members can learn many great things. Our primary focus is developing coding styles and skills. We will learn how to take sketch book ideas and turn them into actual functional projects/products.</p>
        </p>
      </div>
    );
  }
}

export default HomeScreen;