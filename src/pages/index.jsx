import Image from 'next/image';
import React from 'react';

const dummyData = [
  {
    title: '美しい山の風景',
    image:
      'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUU3JTg0JUExJUU2JTk2JTk5JUUzJTgxJUFFJUU3JTk0JUJCJUU1JTgzJThGfGVufDB8fDB8fHww',
  },
  {
    title: '広がる青い海',
    image:
      'https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '都会の夜景',
    image:
      'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'かわいらしい子猫',
    image:
      'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUU3JTg0JUExJUU2JTk2JTk5JUUzJTgxJUFFJUU3JTk0JUJCJUU1JTgzJThGfGVufDB8fDB8fHww',
  },
  {
    title: '美味しそうな料理',
    image:
      'https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
export default function Page() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
        flexDirection: 'column',
      }}
    >
      <h1
        style={{
          padding: 40,
          background: 'lightblue',
        }}
      >
        ホゲhogehoge
      </h1>
      <div
        style={{
          display: 'flex',

          flexDirection: 'column',
          gap: 40,
          background: 'red',
          alignItems: 'center',
        }}
      >
        {dummyData.map((item) => {
          return (
            <div
              key={item.title}
              style={{
                display: 'flex',
                width: 360,
                justifyContent: 'space-between',
                background: 'green',
                alignItems: 'center',
              }}
            >
              <p>{item.title}</p>
              <img src={item.image} alt={item.title} width={100} height={100} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
