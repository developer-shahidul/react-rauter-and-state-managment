//

const Link = ({ route }) => {
  //   console.log(route);
  const { path, label } = route;
  return (
    <li className="md:mr-10 px-4  hover:bg-amber-400 ">
      <a href={path}>{label}</a>
    </li>
  );
};

export default Link;
