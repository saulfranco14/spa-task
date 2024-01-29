import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MainContainer from "@/app/components/MainContainer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo List App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContainer />
    </div>
  );
}
