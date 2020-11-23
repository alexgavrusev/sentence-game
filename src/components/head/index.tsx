import { FC } from "react";
import NextHead from "next/head";

const Head: FC = () => (
  <NextHead>
    <title>Sentence game</title>
    <meta name="author" content="gavrusev.dev" />
    <meta name="description" content="A coding challenge" />
  </NextHead>
);

export default Head;
