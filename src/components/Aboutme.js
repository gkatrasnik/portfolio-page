import * as React from "react";
import { Container } from "react-bootstrap";

const Aboutme = () => {
  return (
    <Container className="mb-5 pb-5 ">
      <h1 className="text-center mb-4 custom-scroll" id="aboutme">
        About me
      </h1>
      <div className="mx-auto my-3 custom-width">
        <p>
          I am Gašper Katrašnik and I live in Kranj, Slovenia. Technology and
          sports have been my passion since I can remember. When I was 11, me
          and few of my friends stared cycling in a local club. Eventually I
          became pretty good. I loved traveling the world and racing bikes. Fast
          forward to 2016, I signed my first professional contract and cycling
          became my job for the next 6 years. During this time, I also studied
          Mechatronics and learned programming. I first met programming when I
          was 14 years old, when I created my first "hello world" in Visual
          Basic. In the years that followed, I was on and off with programming,
          until 2020 when the covid crisis hit. I had all the time in the world,
          so I decided to commit and learn programming for real. A friend of
          mine suggested me "Odin Project", open source web developement
          curriculum and it took me about a year to complete it. In this time I
          learned a lot and created many interesting projects. Few of them are
          presented in the section below.
        </p>
      </div>
    </Container>
  );
};

export default Aboutme;
