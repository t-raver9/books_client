import { Link } from "react-router-dom";

interface Props {
  content: string;
  destination: string;
}

const MenuItem = ({ content, destination }: Props) => {
  return (
    <Link to={destination}>
      <div style={{ height: "5vh" }}>{content}</div>
    </Link>
  );
};

export default MenuItem;
