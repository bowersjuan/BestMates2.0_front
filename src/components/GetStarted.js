import "./GetStarted.css";

export default function GetStarted() {
  return (
    <div>
      <div className="wrapper">
        <img
          className="BeforeScroll"
          id="slide"
          src="https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="roommates"
        />
        <p
          className="AfterScroll "
          style={{
            transition: "all ease 20s",
            zIndex: "1",
            fontSize: "201px",
            fontWeight: "900",
            textAlign: "Left",
          }}>
          We're the generation that's tired of annoying roommates!
        </p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/4394970/pexels-photo-4394970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="roommates"
        />
        <p
          style={{
            zIndex: "1",
            fontSize: "201px",
            fontWeight: "900",
            textAlign: "right",
          }}>
          We want true best friends and compatible roommates
        </p>
        <p style={{ zIndex: "1", fontSize: "201px", fontWeight: "900" }}>
          Call us BestMates
        </p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="roommates"
        />
        <p
          style={{
            transition: "all ease 20s",
            zIndex: "1",
            fontSize: "201px",
            fontWeight: "900",
            textAlign: "Left",
          }}>
          Hello
        </p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/7142963/pexels-photo-7142963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="roommates"
        />
        <p
          style={{
            transition: "all ease 20s",
            zIndex: "1",
            fontSize: "201px",
            fontWeight: "900",
            textAlign: "Right",
          }}>
          Hello
        </p>
      </div>
    </div>
  );
}
