import React from 'react';
import { LucidePencil } from 'lucide-react'; // Import Lucid icon

const Page: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#E6DACE] via-[#D1BCAE] to-[#B79F97] min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">My POV Blog Is Coming Soon!</h1>
        <p className="text-lg md:text-xl mb-8">
          Get ready for insights, stories, and my point of view on various topics. It&apos;s going to be an exciting journey!
        </p>
        <LucidePencil className="text-6xl md:text-8xl text-white mb-8" />

        {/* You can add a countdown timer or any other elements here */}
        {/* <CountdownTimer /> */}

        {/* Optionally, you can add a newsletter signup form */}
        {/* <NewsletterSignupForm /> */}
      </div>
    </div>
  );
};

export default Page;
