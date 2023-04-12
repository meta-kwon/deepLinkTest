import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import querystring from 'querystring';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const { sid, context } = router.query;

      if (!sid && !context) {
        alert(`You can't access There.`);
        return;
      }

      const fallbackUrl = 'null';

      const userAgent = navigator.userAgent;

      const isAndroid = userAgent.match(/Android/i);
      const isIOS = userAgent.match(/iPhone|iPad|iPod/i);
      const isMac = userAgent.match(/Mac/i);

      const params = decodeURIComponent(querystring.stringify(router.query));

      if (isAndroid) {
        location.href = `intent://n?${params}#Intent;scheme=thereopen;package=com.metacamp.metathere;end`;
      } else if (isIOS) {
        location.href = `thereopen://n?${params}`;
      } else if (isMac) {
        location.href = `thereopen://n?${params}`;
      } else {
        location.href = `thereopen1://n?${params}`;
      }
    }
  }, [router.query]);

  return (
    <>
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
    </>
  );
}
