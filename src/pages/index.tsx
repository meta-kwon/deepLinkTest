export default function Home() {
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
    const url = 'file:///data/data/there';
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
        <button style={{ width: 700, height: 700 }} onClick={testClick}>
          실행
        </button>
      </div>
    </>
  );
}
