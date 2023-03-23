export default function Home() {
  const packageName = 'com.metacamp.metathere';
  const scheme = 'myapp://path';
  const androidMarketUrl = 'market://details?id=' + packageName + '&hl=ko';

  function openAndroid() {
    const path = 'metavity';
    const param = 'dhLAheDvH6pE6Bu9d2vYXv';
    const intentUri = `intent://${path}?${param}#Intent;scheme=there_v1;package=com.metacamp.metathere;end`;
    location.href = intentUri;

    alert(`${intentUri}/초대코드: dhLAheDvH6pE6Bu9d2vYXv`);
    location.href = intentUri;
  }

  function goStore() {
    const startTime = +new Date();

    setTimeout(function () {
      const now = +new Date();
      if (now - startTime < 1000) {
        let marketUrl = '';

        marketUrl = androidMarketUrl;

        location.href = marketUrl;
      }
    }, 500);

    openAndroid();
  }

  // // Intent 생성
  // let intent = null;
  // if (navigator.userAgent.match(/Android/i)) {
  //   intent = Intent('android.intent.action.VIEW');
  //   intent.addCategory('android.intent.category.BROWSABLE');
  //   intent.setData(Uri.parse(scheme));
  //   intent.setPackage(packageName);
  // }

  // // Intent 실행
  // if (intent !== null && intent.resolveActivity(packageManager) !== null) {
  //   // 해당 어플이 설치되어 있을 때
  //   location.href = 'intent://com.metacamp.metathere';
  //   // startActivity(intent);
  // } else {
  //   // 해당 어플이 설치되어 있지 않을 때
  //   location.href = storeUrl;
  // }

  function checkInstallApp() {
    function clearTimers() {
      clearInterval(check);
      clearTimeout(timer);
    }

    function isHideWeb() {
      if (document.hidden) {
        clearTimers();
      }
    }
    const check = setInterval(isHideWeb, 200);

    const timer = setTimeout(function () {
      redirectStore();
    }, 500);
  }

  const redirectStore = () => {
    const ua = navigator.userAgent.toLowerCase();

    console.log(ua);
    console.log(ua.indexOf('android'));

    if (window.confirm('스토어로 이동하시겠습니까?')) {
      location.href =
        'https://play.google.com/store/apps/details?id=com.metacamp.metathere&hl=ko';
    }
  };

  const testClick = () => {
    const url = 'com.metacamp.metathere';
    alert(url);
    location.href = url;

    checkInstallApp();
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
        <button style={{ width: 700, height: 700 }} onClick={openAndroid}>
          실행
        </button>
      </div>
    </>
  );
}
