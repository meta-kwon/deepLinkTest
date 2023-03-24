import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

console.log('ver 4');

export default function Home() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const ogTitle = `${decodeURIComponent(router.query.title as string)}`;
  const ogDescription = `${decodeURIComponent(
    router.query.description as string
  )}`;
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

      setTitle(decodeURIComponent(title as string));
      setDescription(decodeURIComponent(description as string));
      setImage(decodeURIComponent(image as string));

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

export async function getStaticProps(context: any) {
  const { params } = context;
  // const { title, description, image, code } = params;

  console.log(context, params);

  return {
    props: {
      title: 1,
      description: 1,
      imageUrl: 1,
    },
  };
}
