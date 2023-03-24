import { NextSeo } from 'next-seo';
import { setConfig } from 'next/config';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

console.log('ver 4');

export default function Home({ title, description, image, code }: any) {
  const router = useRouter();

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

    // alert(userAgent);

    const isAndroid = userAgent.match(/Android/i);
    const isIOS = userAgent.match(/iPhone|iPad|iPod/i);
    const isDesktop = !isAndroid && !isIOS;

    if (isAndroid) {
      openAndroid();
    } else if (isDesktop) {
      location.href = `there://${path}?${code}`;
    }
  }, []);

  const Index = () => {
    return (
      <>
        <NextSeo
          title={title}
          description={description}
          openGraph={{
            type: 'website',
            title,
            description,
            images: [
              {
                url: `/${image}`,
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

export async function getServerSideProps({ query }: any) {
  console.log(query);
  const title = query.title;
  const description = query.description;
  const image = query.image;
  const code = query.code;

  return {
    props: {
      title,
      description,
      image,
      code,
    },
  };
}
