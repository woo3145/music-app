import { AiFillGithub } from 'react-icons/ai';

export const Info = () => {
  return (
    <div className="flex items-center">
      <div className="relative group">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/woo3145/music-app"
        >
          <AiFillGithub size="36" />
        </a>
        <div className="hidden absolute text-sm justify-center py-1 px-2 w-20 group-hover:flex right-0 -bottom-8 bg-slate-800 text-white rounded-md">
          Github
        </div>
      </div>
    </div>
  );
};
