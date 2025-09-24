//

const Link = ({ route }) => {
  //   console.log(route);
  const { path, label } = route;
  return (
    <li className="mr-10">
      <a href={path}>{label}</a>
    </li>
  );
};

export default Link;
