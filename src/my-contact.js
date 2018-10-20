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

class MyContact extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

        .card {
          text-align: center;
        }

        form{
        width:100%;
        max-width: 900px;
        margin:20px auto;

      }
      input, textarea{
        width: 900px;
        max-width: 100%;
        resize: none;
      }
      textarea{
        height: 200px;
      }
      label{
        text-align: left;
        font-weight: 400;
      }
      form button{
        background: #4A96AD;
        font-weight: bold;
        text-transform: uppercase;
        padding: 20px 30px;
        font-size: 18px;
        border:none;
        color:#fff;
      }
      form p{
        text-align: left;

      }
      .container.contact{
        min-height: 100vh;
      }


      </style>

      <div class="card">
        <h1>I’m currently available for freelance work.</h1>
        <p>If you have a project that you want to get started, or if you want my help to accomplish something you can contact me on this platform:</p>
      </div>


        <form method="post">
          <input type="hidden" name="form-name" value="contact" />
            <p>
            <label>Your Name: <input type="text" name="name"/></label>
            </p>
            <p>
            <label>Your Email: <input type="email" name="email"/></label>
            </p>
            <p>
            <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
            <button type="submit">Send</button>
            </p>
          </form>
    `;
  }
}

window.customElements.define('my-contact', MyContact);
