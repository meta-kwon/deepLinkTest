import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

console.log('ver 5');

export default function Home() {
  const router = useRouter();

  const path = 'metavity';
  const param = 'dhLAheDvH6pE6Bu9d2vYXv';
  const intentUri = `intent://${path}?${param}#Intent;scheme=there_v1;package=com.metacamp.metathere;end`;

  function openAndroid(code: string) {
    const path = 'metavity';
    const param = 'dhLAheDvH6pE6Bu9d2vYXv';
    const intentUri = `intent://${path}?${code}#Intent;scheme=there_v1;package=com.metacamp.metathere;end`;
    location.href = intentUri;
  }

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const { code } = router.query;

      const userAgent = navigator.userAgent;

      // alert(userAgent);

      const isAndroid = userAgent.match(/Android/i);
      const isIOS = userAgent.match(/iPhone|iPad|iPod/i);
      const isDesktop = !isAndroid && !isIOS;

      if (isAndroid) {
        openAndroid(code as string);
      } else if (isDesktop) {
        location.href = `there://${path}?${code}`;
      }
    }
  }, [router.query]);

  const Index = () => {
    return (
      <NextSeo
        title="there"
        description="세상의 모든 사람들을 연결하는 새로운 가상 세계"
        openGraph={{
          type: 'website',
          title: 'there',
          description: '세상의 모든 사람들을 연결하는 새로운 가상 세계',
          images: [
            {
              url: `/there.png`,
            },
          ],
        }}
      />
    );
  };

  return <Index />;
}
