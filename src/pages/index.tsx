import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

console.log('ver 3');

export default function Home() {
  const path = 'metavity';
  const param = 'dhLAheDvH6pE6Bu9d2vYXv';
  const intentUri = `intent://${path}?${param}#Intent;scheme=there_v1;package=com.metacamp.metathere;end`;

  function openAndroid() {
    const path = 'metavity';
    const param = 'dhLAheDvH6pE6Bu9d2vYXv';
    const intentUri = `intent://${path}?${param}#Intent;scheme=there_v1;package=com.metacamp.metathere;end`;
    location.href = intentUri;

    alert(`${intentUri}/초대코드: dhLAheDvH6pE6Bu9d2vYXv`);
    location.href = intentUri;
  }

  useEffect(() => {
    const userAgent = navigator.userAgent;

    console.log(userAgent);

    const isAndroid = userAgent.match(/Android/i);
    const isIOS = userAgent.match(/iPhone|iPad|iPod/i);
    const isDesktop = !isAndroid && !isIOS;

    if (isAndroid) {
      openAndroid();
    } else if (isDesktop) {
      location.href = `Dev://kwon/백업/there.exe --url="${`there_v1://${path}?${param}`}"`;
    }
  }, []);

  const Index = () => {
    return (
      <>
        <NextSeo
          title="WIT"
          description="메타비티 WIT 환영합니다."
          openGraph={{
            type: 'website',
            title: 'WIT',
            description: '메타비티 WIT 환영합니다.',
            images: [
              {
                url: '/wit.png',
                width: 800,
                height: 400,
              },
            ],
          }}
        />
      </>
    );
  };

  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          flex: 'display',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Index />
      </div>
    </>
  );
}
