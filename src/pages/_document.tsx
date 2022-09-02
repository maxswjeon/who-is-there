import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
        />
        <meta name="title" content="동방에 누구? - YCC 신촌" />
        <meta
          name="description"
          content="연세대학교 중앙 컴퓨터동아리 YCC 신촌 동아리방에 누가 있나요?"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portal.ycc.club" />
        <meta property="og:title" content="동방에 누구? - YCC 신촌" />
        <meta
          property="og:description"
          content="연세대학교 중앙 컴퓨터동아리 YCC 신촌 동아리방에 누가 있나요?"
        />
        <meta property="twitter:title" content="동방에 누구? - YCC 신촌" />
        <meta
          property="twitter:description"
          content="연세대학교 중앙 컴퓨터동아리 YCC 신촌 동아리방에 누가 있나요?"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
