const Register = () => {
  return (
    <div className="content">
      <title>Register</title>
      <div className="box">
        <form>
          <h1>Register</h1>
          <input type="text" name="" placeholder="Email"></input>
          <input type="password" name="" placeholder="Password"></input>

          <button className="button-submit">Register</button>
          <button className="button-submit">
            <a href="./Login">Login Here</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
