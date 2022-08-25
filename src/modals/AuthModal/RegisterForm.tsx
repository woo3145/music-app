const RegisterForm = () => {
  return (
    <div className="w-full">
      <form className="flex flex-col">
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700 text-sm">
            이메일
          </span>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1 block w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "
          />
        </label>
        <label className="block mt-2">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700 text-sm">
            패스워드
          </span>
          <input
            type="password"
            placeholder="password"
            className="mt-1 block w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "
          />
        </label>
        <div className="text-center py-2 bg-blue-900 mt-4 text-white rounded-md font-semibold cursor-pointer">
          회원가입
        </div>
      </form>

      <div className="text-center py-4 text-sm">Or</div>

      <div className="flex gap-4 justify-between">
        <div className="text-center w-full border text-sm py-2 font-semibold">
          구글로 로그인
        </div>
        <div className="text-center w-full border text-sm py-2 font-semibold">
          네이버로 로그인
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
