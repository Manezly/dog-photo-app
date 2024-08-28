import React from 'react';

type ContentContainerProps = {
  children: React.ReactNode;
};

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return (
    <main className='flex h-full justify-center pt-10'>
      <div className='flex max-w-[1020px] w-full flex-col lg:px-0 px-4'>
        {children}
      </div>
    </main>
  );
};

export default ContentContainer;
