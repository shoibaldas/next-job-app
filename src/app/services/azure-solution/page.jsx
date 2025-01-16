import React from 'react';
import Link from 'next/link';

const WebDevelopment = () => {
  return (
    <div>
      <h1>Web Development Services</h1>
      <p>We provide cutting-edge web development services tailored to your needs.</p>
      <Link href="/services">
        <a>Back to Services</a>
      </Link>
    </div>
  );
};

export default WebDevelopment;
