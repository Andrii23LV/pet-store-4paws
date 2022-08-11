import { AboutInfo } from "../../components/AboutInfo"
import GoogleMaps from "../../components/GoogleMaps"

export function AboutPage() {
  return (
    <>
      <AboutInfo />
      <section className="about-map">
        <div className="map-wrap">
          <h1>You could find us on map below</h1>
          <GoogleMaps />
        </div>
        <div className="map-address-description">
          <h2>Our address:</h2>
          <p>Lviv oblast, Lviv, Dzherelna Street <br/> Ukraine 79019</p>
          <p>Forum Lviv</p>
        </div>
      </section>
    </>
  )
}