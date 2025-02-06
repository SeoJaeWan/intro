'use client';
import { useEffect } from 'react';

const HomeTemplate = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return; // 보안 체크
      console.log(event.data.text);
      console.log(Object.keys(event.data));
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleNewTab = () => {
    const newWindow = window.open('http://119.201.242.142:3003', '_blank');

    if (newWindow) {
      // 새 창이 로드될 때 메시지를 보냄
      const sendMessage = () => {
        newWindow.postMessage({ text: 'hello' }, '*');
      };

      newWindow.onload = sendMessage; // 창이 완전히 로드된 후 메시지 전송
    }
  };

  return (
    <div>
      <button style={{ color: 'black' }} onClick={handleNewTab}>
        test
      </button>
      {/* <Hero />
      <About />
      <More />
      <Introduce /> */}
    </div>
  );
};

export default HomeTemplate;
