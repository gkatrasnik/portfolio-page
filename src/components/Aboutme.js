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
          My Name is Gašper Katrašnik and I live in Kranj, Slovenia. Technology
          and bikes have been my passion since I can remember. When I was 11, me
          and few of my friends stared cycling in a local club. Eventually I
          became pretty good. I loved traveling the world and winning races.
          Fast forward to 2016, I signed my first professional contract and
          cycling became my job for 6 years. During this time, I studied
          Mechatronics and learned programming. I first met computer programming
          when I was 14 years old, when I created my first "hello world" in
          Visual Basic. In later years I was on and off with programming, until
          2021 when the covid crisis hit. I had all the time in the world, so I
          decided to commit and learn programming for real. A friend of mine
          suggested me "Odin Project", open source web developement curriculum
          and it took me about a year to complete it. I learned a lot and
          created many interesting projects. You can find few of them in section
          below.
        </p>
      </div>
    </Container>
  );
};

export default Aboutme;
