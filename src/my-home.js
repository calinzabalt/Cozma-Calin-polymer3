/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyHome extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">


:host {
  display: block;
  padding: 10px;
}

.intro {
    background:url('./images/seo-2394237.jpg') left bottom no-repeat fixed;
    height:600px;width:100%;
}

.overlay {
    background-color:rgba(0, 0, 0, 0.6);width:100%;height:100%;display:flex;flex-flow:column wrap;align-items:center;justify-content:center;
    text-shadow: black 0.3em 0.3em 0.3em;
}

.intro h3 {
    color:white;
    font-size: 50px;
    font-family: 'Product sans', 'Roboto','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    font-weight: 800;
}

.intro h2 {
  color:white;
    font-size:50px;
    font-family: 'Product sans', 'Roboto', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    font-weight: 800;
}

.card {
  max-width: 300px;
  height: auto;
  text-align: center;
  justify-content: center;
  display: inline-block;

}

.centerlize {
  background-image: url("/images/11_026.jpg");
  background-position: 0% 25%;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  margin-top: 50px;
  height: 380px;
  margin-bottom: 20px;
}

.centerlize h1{
  color: white;
  font-size: 50px;
  padding-top: 40px;
  margin-left: 40px;
}

.centerlize p {
  margin: 25px;
}

.centerlize h2 {
  margin: 25px;
}

.centerlize button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 20px;
    cursor: pointer;
}

.cards{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.cards button {
    background-color: #F57C00;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
}

</style>

  <div class="intro">
    <div class="overlay">
      <h2>Hi! my name is Călin and I'm a</h2>
      <h3>"Front-End Developer"</h3>
    </div>
  </div>

  <div class="centerlize">
    <h1>About me!</h1>
    <p>My name is Cozma Viorel Călin, I’m a highly motivated developer from Romania. I have a passion for web development and I love to create websites from scratch.</p>
    <h2>Down below you can see more information about how I work.</h2>
    <a href="./contact"><button>Contact</button></a>
    </div>

<div class="cards">
      <div class="card">
        <img src="/images/responsive-2044932_1280.png" alt="card" style="width:100%">
        <h1>Responsive Design</h1>
        <p>My goals are to focus on aspect, content, speed and a fully responsive website that run on every device..</p>
        <a href="./work"><button>Portofolio</button></a>
      </div>

      <div class="card">
        <img src="/images/analysis-blackboard-board-355952.jpg" alt="card" style="width:100%">
        <h1>Solutions</h1>
        <p>I will try to resolve your problems and provide new solutions for a better and competitive website.</p>
        <a href="./work"><button>Portofolio</button></a>
      </div>

      <div class="card">
        <img src="/images/react-seeklogo.com.svg" alt="card" style="height:207px; width:100%">
        <h1>How I do the work</h1>
        <p>For a front-end website I use programming languages like: Javascript (React.js, Vue.js and Polymer).</p>
        <a href="./work"><button>Portofolio</button></a>
      </div>
</div>


    `;
  }
}

window.customElements.define('my-home', MyHome);
