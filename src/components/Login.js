const Login = () => {
  return (
    <div className="bg-purple-200 flex-1 flex items-center justify-center">
      <form className="flex flex-col w-1/2 bg-slate-500 p-5 h-[500px]">
        <label for="nm">Name</label>
        <input type="text" id="nm" placeholder="name" />
        <label for="pass">Password</label>
        <input type="password" id="pass" placeholder="password" />
      </form>
    </div>
  )
}

export default Login
