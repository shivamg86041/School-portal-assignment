import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
      
      <div className="max-w-4xl mx-auto space-y-6 text-gray-800">
        <p className="text-lg">
          Welcome to AAFT Online, India’s first dedicated creative arts ed-tech venture. Our mission is to transform the way creative arts are learned and taught worldwide. Founded by the pioneers of AAFT, the renowned creators of Noida Film City, we are committed to delivering high-quality, industry-relevant education in the media and arts sectors.
        </p>
        
        <h3 className="text-2xl font-semibold mt-8">Our Vision</h3>
        <p className="text-lg">
          At AAFT Online, we aim to provide a global platform for creative individuals, enhancing their skills through interactive online programs. We envision a world where aspiring artists, media professionals, and creatives can access top-tier education no matter where they are. Our goal is to shape employable talent ready to thrive in the media and arts industries.
        </p>

        <h3 className="text-2xl font-semibold mt-8">Why Study With Us?</h3>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li><strong>One-on-One Mentoring:</strong> Receive personalized mentorship from experts throughout your course.</li>
          <li><strong>Industry-Focused Learning:</strong> Gain practical exposure through assignments and projects.</li>
          <li><strong>Expert-Curated Courses:</strong> Our courses are designed by academicians and industry veterans.</li>
          <li><strong>Global Networking:</strong> Interact and collaborate with fellow enthusiasts from across the world.</li>
          <li><strong>Up-to-Date Content:</strong> Learn the latest trends and developments in the creative industries.</li>
          <li><strong>Virtual Faculty Support:</strong> Access guidance from our dedicated faculty whenever you need it.</li>
          <li><strong>Alumni Network:</strong> Join the AAFT Alumni Association and open doors to new opportunities.</li>
          <li><strong>Placement Support:</strong> Benefit from our dedicated placement assistance to kickstart your career.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8">Our Group</h3>
        <p className="text-lg">
          AAFT, established in 1993, is India’s premier private film and media school, recognized globally for its excellence in creative arts education. The group has expanded into various institutes, making us a leader in media, arts, and creative education.
        </p>

        <h3 className="text-2xl font-semibold mt-8">Our Leadership</h3>
        <p className="text-lg">
          Under the visionary leadership of Sandeep Marwah, a pioneer in media and arts, AAFT has grown into an internationally recognized institution. Guided by his belief in the power of media to impact society, AAFT Online continues to deliver world-class education to shape the future of creative professionals.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
