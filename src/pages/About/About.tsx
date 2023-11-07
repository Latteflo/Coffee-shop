import { FC } from "react"
import "../../index.css"
import "./about.css"

const About: FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="text-section-about">
          <h2>Our History</h2>
          <p>
            From a humble vendor to the bustling cafes we operate today, our
            journey has been nothing short of a miracle. Founded in 2022, we
            initially aimed to bring artisanal coffee to a small community of
            enthusiasts. To our surprise and delight, the community grew
            exponentially, and so did we. Today, we serve thousands of customers
            who consider our cafes a 'second home', and we're committed to
            keeping it that way.
          </p>
        </div>
        <div className="image-section">
          <video src="../../assets/video/hand.mp4" autoPlay muted loop></video>
        </div>
      </div>

      <div className="container reverse">
        <div className="text-section-about">
          <h2>Our Mission</h2>
          <p>
            Our mission is to redefine the coffee experience by prioritizing
            quality, sustainability, and customer happiness. We source our beans
            from sustainable farms, ensuring that we support both the
            environment and the hardworking people behind them. Each cup we
            serve is a meticulous craft of love and an unforgettable experience.
            We don't just serve coffee; we create moments and build a community.
          </p>
        </div>
        <div className="image-section">
        <video src="../../assets/video/pouring-coffee.mp4" autoPlay muted loop></video>
        </div>
      </div>
    </div>
  )
}

export default About
