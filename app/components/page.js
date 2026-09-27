import Image from "next/image";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">

        {/* Left Image */}
        <div className="left">
          <Image
            src="/building.jpg"   // put your image in /public folder
            alt="SKMT Building"
            width={350}
            height={250}
            className="image"
          />
        </div>

        {/* Right Links */}
        <div className="right">
          
          <div className="column">
            <a href="#">Vision & Mission</a>
            <a href="#">Our Story</a>
            <a href="#">Our Leadership</a>
            <a href="#">Our Quality Policy</a>
          </div>

          <div className="column">
            <a href="#">Projects of SKMT</a>
            <a href="#">Awards and Recognitions</a>
            <a href="#">Facts and Statistics</a>
            <a href="#">Healthcare Environmental Sustainability</a>
          </div>

          <div className="column">
            <a href="#">Publications</a>
            <a href="#">Latest Events</a>
            <a href="#">Latest News</a>
            <a href="#">Our IT Services</a>
          </div>

        </div>
      </div>
    </div>
  );
}