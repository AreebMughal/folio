import Script from 'next/script';
import React from 'react';
import { GTAG } from '../../constants';

const Scripts = React.memo(() => {
  return (
    <>
      <Script strategy="afterInteractive" id="gtag-config">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTAG}');
        `}
      </Script>
      <Script strategy="lazyOnload" id="chaport-config">
        {`
            setTimeout(() => {
                (function(w,d,v3){
                  w.chaportConfig = {
                  appId : '686a8c717c5fd502fcee1fc8'
                  };

                  if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)})(window, document);
            }, 1500);
        `}
      </Script>
    </>
  );
});

Scripts.displayName = 'Scripts';

export default Scripts;
