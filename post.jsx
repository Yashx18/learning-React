// Style CSS
const style = {
  width: "100%",
  borderColor: "grey",
  borderRadius: 5,
  display: "flex",
  color: "black",
};

const userInfo = {
  fontSize: 11,
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
};

// Post Component
export function PostComponent({ name, follower, subtitle, clockImg, content }) {
  return (
    <div
      style={{
        padding: 10,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        width: 420,
        backgroundColor: "#7f8c8d",
      }}
    >
      {/* Image section */}
      <div style={style}>
        <img
          src="https://i.pinimg.com/736x/cc/ca/9b/ccca9b6ae3a94c94a3e5a623ca5784b8.jpg"
          style={{
            height: 60,
            width: 60,
            borderRadius: 50,
            border: "1px solid #2c3e50",
          }}
        />
        <div
          style={{
            marginLeft: 10,
            textAlign: "left",
          }}
        >
          <b>{name}</b>
          <div style={userInfo}>{follower}</div>
          <div style={userInfo}>
            <span>{subtitle}</span>
            <img
              src={clockImg}
              alt="clock icon"
              style={{
                height: 12,
                width: 12,
                marginLeft: 2,
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          color: "black",
          textAlign: "left",
        }}
      >
        {content}
      </div>
    </div>
  );
}
