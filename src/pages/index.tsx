import { NextSeo } from 'next-seo';
import { setConfig } from 'next/config';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

console.log('ver 4');

export default function Home() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [canonicalUrl, setCanonicalUrl] = useState('');
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
    if (Object.keys(router.query).length > 0) {
      console.log(router.query);
      const { title, description, image, code } = router.query;

      setTitle(title as string);
      setDescription(description as string);
      setImage(image as string);

      setCanonicalUrl(
        `https://deep-link-test.vercel.app/?title=${title}&description=${description}&image=${image}&code=${code}`
      );

      const userAgent = navigator.userAgent;

      // alert(userAgent);

      const isAndroid = userAgent.match(/Android/i);
      const isIOS = userAgent.match(/iPhone|iPad|iPod/i);
      const isDesktop = !isAndroid && !isIOS;

      if (isAndroid) {
        openAndroid();
      } else if (isDesktop) {
        location.href = `there://${path}?${code}`;
      }
    }
  }, [router.query]);

  const Index = () => {
    return (
      <>
        <NextSeo
          title="메타캠프"
          description="메타캠프입니다"
          openGraph={{
            type: 'website',
            title: title,
            description: description,
            images: [
              {
                url: `/wit.png`,
                width: 800,
                height: 400,
              },
            ],
            url: canonicalUrl,
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
