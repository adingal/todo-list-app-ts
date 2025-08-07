'use client'

import Header from '@/components/Header';
import Form from '@/components/Form';

export default function Home() {
  return (
    <>
      <Header />
      <main className='py-4 md:py-5 lg:py-6'>
        <div className='max-w-md mx-auto px-4 text-center'>
          <Form />
        </div>
      </main>
    </>
  );
}
