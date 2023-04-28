import CreateMusic from "./components/CreateMusic";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import HomeMain from "./components/HomeMain";
import ShareUrStream from "./components/ShareUrStream";
import Shop from "./components/Shop";


export default function Home() {

  return (
    <main className="flex flex-col">
      <HomeMain/>
      <CreateMusic/>
      <ShareUrStream/>
      <Shop/>
      <GetStarted/>
      
    </main>
  )
}
