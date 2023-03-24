import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

console.log('ver 4');

export default function Home() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const ogTitle = `${router.query.title}`;
  const ogDescription = `${router.query.description}`;
  const ogUrl = `${router.query.image}`;
  console.log(ogTitle, ogDescription);
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
      const { title, description, image, code } = router.query;

      setTitle(title as string);
      setDescription(description as string);
      setImage(image as string);

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
        {ogTitle && (
          <NextSeo
            title={ogTitle}
            description={ogDescription}
            openGraph={{
              type: 'website',
              title: ogTitle,
              description: ogDescription,
              images: [
                {
                  url: `${ogUrl}`,
                  width: 800,
                  height: 400,
                },
              ],
            }}
          />
        )}
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
