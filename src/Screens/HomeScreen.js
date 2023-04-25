import React from "react";
import Header from "../components/Header";
import "./HomeScreen.css";
import { Button } from "bootstrap";
import ContinueWatching from "../components/ContinueWatching";

export function HomeScreen() {
  return (
    <div>
      <div className="home-body">
        <Header />

        <div className="video-container">
          <video
            id="myVideo"
            autoPlay
            muted
            loop
            src="https://player.vimeo.com/external/447634055.sd.mp4?s=f51e1d13aa81af9f02a663ee379ef5bfeefe3709&profile_id=164&oauth2_token_id=57447761"
            // src="https://player.vimeo.com/external/214504055.sd.mp4?s=e879e761715f2cd38af0baec842455562b85153f&profile_id=164&oauth2_token_id=57447761"
          />
          <div className="titlebar">
            <span>badge</span>
            <h2>#1 Movies Today</h2>
            <div className="textbox1">
              {" "}
              A flight attendant and jjsdsdss dsjjjdshk xnkjcj sndsjcdjkcjdkcckd
              cjdjjmdlmkkjcsndndsnfdnkkl
            </div>
            <div>
              <button>button</button>
              <button> More info</button>
            </div>
          </div>
          <div className="maturity-box">U/A 16+</div>
        </div>
        <ContinueWatching />
        <div>made in India</div>
        <div>Featured for Kv</div>
        <div> Sci-Fi Thrillers</div>
      </div>
    </div>
  );
}
