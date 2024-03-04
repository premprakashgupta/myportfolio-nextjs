"use client"
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {};

function Page({}: Props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setloading] = useState(false);


  const handleSubmit = async () => {
    try {
      if(username==="" || email==="" || message==="")
      {
        toast('All Field is required');
        return false;
      }
      setloading(true);
      const lastEmailSentTime = localStorage.getItem('lastEmailSentTime');
      const currentTime = new Date().getTime();

      if (lastEmailSentTime && currentTime - parseInt(lastEmailSentTime) < 10 * 60 * 1000) {
        toast('You can only send an email once every 10 minutes.');
        return
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, message }),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message to the user)
        toast('Email sent successfully!');
        localStorage.setItem('lastEmailSentTime', new Date().getTime().toString());
      } else {
        toast('Failed to send email:', await response.json());
        // Handle error (e.g., show an error message to the user)
      }
    } catch (error: any) {
      toast('An unexpected error occurred:', error);
      // Handle unexpected errors
    } finally {
      setEmail('');
      setMessage('');
      setUsername('');
      setloading(false);
    }
  };

  return (
    <div className={cn('min-h-screen flex items-center justify-center')}>
      <div className={cn('bg-gray-100 p-8 rounded-md shadow-md w-96')}>
        <h2 className={cn('text-3xl font-semibold mb-6')}>Contact Me</h2>

        {/* Username Input */}
        <div className={cn('mb-4')}>
          <label className={cn('block text-sm font-medium text-gray-600')}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={cn('mt-1 p-2 w-full border rounded-md')}
            placeholder="Enter your username"
          />
        </div>

        {/* Email Input */}
        <div className={cn('mb-4')}>
          <label className={cn('block text-sm font-medium text-gray-600')}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn('mt-1 p-2 w-full border rounded-md')}
            placeholder="Enter your email"
          />
        </div>

        {/* Message Input */}
        <div className={cn('mb-6')}>
          <label className={cn('block text-sm font-medium text-gray-600')}>Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={cn('mt-1 p-2 w-full border rounded-md')}
            placeholder="Write your message here"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <Button className={cn('w-full')} onClick={handleSubmit} disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </Button>
      </div>
    </div>
  );
}

export default Page;
