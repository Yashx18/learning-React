import { useState, useEffect } from "react";
import { PostComponent } from "../post";
import "./App.css";

function App() {
  let [counterVisible, setCounterVisible] = useState(true);
  useEffect(() => {
    // setInterval(() => {
    //   setCounterVisible((c) => !c);
    // }, 5000);
  }, []);

  return (
    <div>
      <ProfileCard
        name="Ken Yeager"
        title="Still I Rise"
        profileImg="https://i.pinimg.com/736x/3b/33/47/3b3347c6e29f5b364d7b671b6a799943.jpg"
        backgroundImg="https://i.pinimg.com/736x/be/18/01/be1801f7a656759668e85467e21695a8.jpg"
        profileViewers="41,982"
        postImpressions="1,124"
      />
      <br />
      <Comp />
      <br />
      <PostComponent
        name="Berserker"
        follower="10,000"
        subtitle="12m"
        clockImg="https://img.icons8.com/?size=100&id=82767&format=png&color=000000"
        content="Want to know how to win big ? How these students made over $5000 in bounties?"
      />
      <br />
      <PostComponent
        name="Berserker"
        follower="10,000"
        subtitle="12m"
        clockImg="https://img.icons8.com/?size=100&id=82767&format=png&color=000000"
        content="Want to know how to win big ? How these students made over $5000 in bounties?"
      />
    </div>
  );
}

// Styling for Profile Card
const statsText = {
  fontSize: 14,
  color: "grey",
};
const stats = {
  fontSize: 14,
  color: "blue",
  fontWeight: 500,
};

const statsLine = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "90%",
};

// Profile Card Component
function ProfileCard(props) {
  return (
    <div
      style={{
        width: 220,
        borderRadius: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e3e1e1",
        color: "black",
      }}
    >
      {/* BackGround */}
      <div
        style={{
          width: "100%",
        }}
      >
        <img
          src={props.backgroundImg}
          alt="Background Image"
          style={{
            height: 80,
            width: "100%",
            borderRadius: "5px 5px 0 0 ",
          }}
        />
      </div>

      {/* Profile */}
      <div
        style={{
          borderBottom: "1.5px solid grey",
          width: "100%",
          padding: "45px 0 25px",
          position: "relative",
        }}
      >
        {/* Profile Image Section */}
        <img
          src={props.profileImg}
          style={{
            height: 70,
            width: 70,
            borderRadius: 60,
            border: "2px solid white",
            position: "absolute",
            top: "-45px",
            right: "32%",
            left: "32%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 2,
            }}
          >
            {props.name}
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            {props.title}
          </span>
        </div>
      </div>

      {/* Profile Stats */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 0 20px",
        }}
      >
        <div style={statsLine}>
          <span style={statsText}>Profile viewers</span>
          <span style={stats}>{props.profileViewers}</span>
        </div>
        <div style={statsLine}>
          <span style={statsText}>Post Impressions</span>
          <span style={stats}>{props.postImpressions}</span>
        </div>
      </div>
    </div>
  );
}

// Mounting
function Counter() {
  const [count, setCount] = useState(0);

  // mounting, re-rendering , unmounting

  // Hooking into the Lifecycle Events of React

  console.log("Counter");

  // useEffect hook makes sure that no matter how many times the code re-renders, the code in useEffect hook run only one at the Mounting.

  useEffect(function () {
    // let clock = setInterval(() => {
    //   setCount((count) => count + 1);
    // }, 1000);
    // console.log('on mount');
    // This is the cleanup code that runs when the component unmounts.
    // return function () {
    //   clearInterval(clock);
    //   console.log('on unmount');
    // };
  }, []); // Empty Array '[]' is dependency array.

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

// Learning about the useState Hook
function Comp() {
  const [isVisible, setIsVisible] = useState(true);
  function toggle() {
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <button onClick={toggle}>Click me</button>

      {isVisible ? <p>The message is being rendered</p> : null}
    </div>
  );
}

export default App;
