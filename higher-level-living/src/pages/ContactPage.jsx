import React from "react";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  return (
    <div>
      <main>
        <div>
          <h3>Contact</h3>
          <h1>Let's Talk...</h1>
          <form action="https://formspree.io/f/xvolpebe" method="post">
            <div>
              <label for="name">Name: </label>
              <input type="text" id="name" name="name" />
            </div>
            <div class="form-item">
              <label for="email">Email: </label>
              <input type="text" id="email" name="email" />
            </div>
            <div>
              <label for="message">Message: </label>
              <textarea type="text" id="message" name="message" />
            </div>
            <div>
              <button class="navbutt" type="submit">
                SEND
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
