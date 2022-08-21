interface Props {
  category: ICategory;
  onClick: () => void;
}
const CategoryCard = ({ category, onClick }: Props) => {
  return (
    <li
      onClick={onClick}
      className="w-28 h-28 flex items-center justify-center rounded-md relative cursor-pointer hover:-translate-y-1 duration-200"
    >
      <img
        src={category.thumbnailUrl}
        alt="thumbnail"
        className="absolute left-0 top-0 brightness-50 rounded-md"
      />
      <p className="absolute text-white">{category.name}</p>
    </li>
  );
};

export default CategoryCard;
