import { NextSeo } from 'next-seo';

console.log('ver 1');

export default function Home() {
  const path = 'metavity';
  const param = 'dhLAheDvH6pE6Bu9d2vYXv';
  const intentUri = `intent://${path}?${param}#Intent;scheme=there_v1;package=com.metacamp.metathere;end`;

  const Index = () => {
    return (
      <>
        <NextSeo
          title="WIT"
          description="메타비티 WIT 환영합니다."
          additionalLinkTags={[
            {
              rel: 'alternate',
              href: intentUri,
            },
          ]}
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
