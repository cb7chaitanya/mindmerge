import React, { useState, useEffect } from 'react';
import { Card } from "flowbite-react";

const ScrollAnimate = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('targetElement').offsetTop;
      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
    <div
      id="targetElement"
      className="flex mt-20"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 2s ease, transform 2s ease',
      }}
    >
      <Card className="mr-2 mb-4 max-w-sm" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Explore Mind Merge
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Where Every Topic Finds Its Place
        </p>
      </Card>
      <Card className="mr-2 mb-4 max-w-sm" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Our Mission
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        To Merge Different Ideas, Perspectives, and Topics in One Place
        </p>
      </Card>
    </div>
    <div
    id="targetElement"
    className="flex mt-4"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 2s ease, transform 2s ease',
    }}
  >
    <Card className="mr-2 mb-4 max-w-sm" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Dive into Diversity
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Discover Our Wide Range of Featured Topics
        </p>
      </Card>
    <Card className="mr-2 mb-4 max-w-sm" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        People's stories
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Inspiring Stories from Around the World
      </p>
    </Card>
  </div>
    <div
    id="targetElement"
    className="flex mt-4"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 2s ease, transform 2s ease',
    }}
  >
    <Card className="mr-2 mb-4 max-w-sm" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Join Our Community
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Sign Up for Exclusive Access to Premium Content
      </p>
    </Card>
    <Card className="mr-2 mb-4 max-w-sm" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Engage with us
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Have a Story to Share? We'd Love to Hear from You!
      </p>
    </Card>
  </div>
  </div>
  );
};

export default ScrollAnimate;
