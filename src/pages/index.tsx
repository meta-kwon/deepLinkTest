import { NextSeo } from 'next-seo';

export default function Home() {
  const path = 'metavity';
  const param = 'dhLAheDvH6pE6Bu9d2vYXv';
  const intentUri = `intent://${path}?${param}#Intent;scheme=there_v1;package=com.metacamp.metathere;end`;
  // function openAndroid() {
  //   location.href = intentUri;

  //   alert(`${intentUri}/초대코드: dhLAheDvH6pE6Bu9d2vYXv`);
  //   location.href = intentUri;
  // }

  const Index = () => {
    return (
      <>
        <NextSeo
          title="WIT"
          description="메타비티 WIT 환영합니다."
          additionalLinkTags={[
            {
              rel: 'alternate',
              href: `there_v1://${path}?${param}`,
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
