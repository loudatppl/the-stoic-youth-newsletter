import React from "react";
import stoic from "../assets/images/stoic.jpg";

const Hero = () => {
  return (
    <section className="md:px-[20rem] mt-20">
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center mb-6">
          <h2 className="text-4xl text-dblack font-rob">What is Stoicism?</h2>
        </div>
        <div>
          <p className="font-rob text-md text-dblack">
            Imagine there's a special kind of wisdom that's perfect for folks
            like us, who live in the real world with all its ups and downs. This
            wisdom is called Stoicism, and it's like a toolkit that can make us
            tougher, happier, kinder, and wiser. In other words, it helps us
            become better people, better youth, and better at whatever we want
            to do in the future.
            <br />
            <br />
            Stoicism has been a secret weapon for some of the coolest people
            throughout history. Kings and leaders, artists and thinkers who've
            left their mark. Think about Marcus Aurelius, a king who was super
            wise, or Frederick the Great, who was like a boss in how he handled
            things.
            <br />
            <br />
            So, in simple words, Stoicism is like a timeless treasure chest of
            ideas that can help us handle life's challenges in a really cool and
            strong way. It's a way of thinking that helps us be the best
            versions of ourselves, no matter what life throws our way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
