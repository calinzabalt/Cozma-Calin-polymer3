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
import './polymer-carousel.js';

class MyWork extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

    polymer-carousel{
      /* height: 300px; */
      width: 100%;
      contain: content;
    }
    polymer-carousel::after{
      display: block;
      content: '';
      padding-top: 75%;
    }
    polymer-carousel img{
      position: absolute;
      height: 100%;
      width: 100%;
    }


  .align {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .gallery {
        margin: 20px;
        border: 1px solid #ccc;
        display: inline-block;
        max-width: 330px;


    }

    .gallery:hover {
        border: 1px solid #777;
    }

    .gallery img {
        width: 100%;
        height: auto;

    }

    .desc {
        padding: 15px;
        text-align: center;
    }

    .video{
      text-align: center;
    }

    .video-padding{
      padding: 20px;
      display: inline-block;
    }

    iframe{
      width: 500px;
      height: 300px;
  }

    @media screen and (max-width: 780px) {
    iframe {
        max-width: 100% !important;
        width: auto !important;
        height: auto !important;
    }
}

  </style>

      <polymer-carousel>
            <img data-src="/images/Screenshot from 2018-08-06 22-34-46.png" alt="img1">
            <img data-src="/images/Screenshot from 2018-08-06 22-37-42.png" alt="img1">
            <img data-src="/images/Screenshot from 2018-08-06 22-39-16.png" alt="img1">
            <img data-src="/images/Screenshot from 2018-08-28 10-43-23.png" alt="img1">
      </polymer-carousel>

        <div class="align">
      <div class="gallery">
        <a target="_blank" href="/images/web-design/0071.jpg">
          <img src="/images/web-design/0071.jpg" alt="TzbT">
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="/images/web-design/0073.png">
          <img src="/images/web-design/0073.png" alt="TzbT">
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="/images/web-design/grass.jpg">
          <img src="/images/web-design/grass.jpg" alt="TzbT">
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="/images/web-design/league of zabalt.png">
          <img src="/images/web-design/league of zabalt.png" alt="TzbT">
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="/images/web-design/mastercalin.png">
          <img src="/images/web-design/mastercalin.png" alt="TzbT">
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="/images/web-design/planeta.jpg">
          <img src="/images/web-design/planeta.jpg" alt="TzbT">
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="/images/web-design/remastered zabalt.jpg">
          <img src="/images/web-design/remastered zabalt.jpg" alt="TzbT">
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>
      </div>

      <div class="video">

        <div class="video-padding">
          <iframe title="videos" src="https://www.youtube.com/embed/1qNz8LDjG_I" frameBorder="0" allowFullScreen></iframe>
        </div>

          <div class="video-padding">
          <iframe title="videos" src="https://www.youtube.com/embed/srrh_u1nMG0" frameBorder="0" allowFullScreen></iframe>
          </div>

          <div class="video-padding">
          <iframe title="videos" src="https://www.youtube.com/embed/XZppMeWxCuk" frameBorder="0" allowFullScreen ></iframe>
          </div>

          <div class="video-padding">
          <iframe title="videos" src="https://www.youtube.com/embed/olyZHJrjrh8" frameBorder="0" allowFullScreen></iframe>
          </div>
      </div>

    `;
  }
}

window.customElements.define('my-work', MyWork);
