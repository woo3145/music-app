import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${text}`);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiOutlineSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          className="block px-4 py-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          type="search"
          required
          value={text}
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
};
export default SearchBar;
