const NoChat = () => {
  const authUser = localStorage.getItem("app-user");
  const authUser2 = JSON.parse(authUser);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ width: "100%" }}
    >
      <div className="fs-1">Welcome</div>
      <div>Hello {authUser2.name}</div>
    </div>
  );
};

export default NoChat;
