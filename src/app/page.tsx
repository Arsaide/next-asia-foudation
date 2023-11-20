import styles from './page.module.css'
import Image from "next/image";
import Banner from "@/component/Main/Banner/Banner";
import WhoWeAre from "@/component/Main/WhoWeAre/WhoWeAre";
import Highlights from "@/component/Main/Highlights/Highlights";
import WhereWeWork from "@/component/Main/WhereWeWork/WhereWeWork";
import MainCards from "@/component/Main/MainCards/MainCards";

export default function Home() {
  return (
    <>
        <Banner/>
        <WhoWeAre />
        <Highlights />
        <WhereWeWork />
        <MainCards />
    </>
  )
}
