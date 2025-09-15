//

const Link = ({ route }) => {
  const { name, path } = route;
  return (
    <li className="mr-6 px-6 hover:bg-yellow-500">
      <a href={path}>{name}</a>
    </li>
  );
};

export default Link;
