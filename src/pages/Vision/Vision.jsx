import React from "react";
import { Link } from "react-router-dom";
import "../Vision/Vision.css";

export const Vision = () => {
  return (
    <div className="vision-container">
      <h1>Our Vision</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit
        ex in elit imperdiet, vitae pharetra orci congue. Donec id ante ac
        tellus molestie luctus. Quisque varius tincidunt sapien, et posuere nisl
        dignissim non. Ut vel sem quis velit euismod blandit in sed augue.
        Aliquam sed justo a nulla ultrices maximus. Praesent consectetur nisl
        vel justo vulputate, in ornare odio luctus. Nulla facilisi. Vestibulum
        faucibus enim eget purus gravida sollicitudin.
      </p>
      <p>
        Aenean luctus ex non leo varius dapibus. Maecenas vel suscipit eros.
        Aliquam accumsan velit vel tortor vulputate, ac consectetur nunc
        fermentum. Sed id lorem nec nisi pretium semper. Nam ac hendrerit ante.
        Vestibulum ac nibh nec mauris commodo lobortis quis ac felis. Mauris a
        ligula justo. Etiam at eros quis metus rutrum imperdiet. Suspendisse
        potenti. Sed gravida, quam a interdum tempor, arcu odio commodo mauris,
        ac molestie tellus eros vel massa.
      </p>
      <Link to="/" className="link-button">
        Back to Home
      </Link>
    </div>
  );
};
