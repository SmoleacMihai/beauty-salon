import { useNavigate } from "react-router-dom";

const PublicPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  }

  return (
    <>
      <h1>This is public content</h1>
      <button onClick={handleClick}>Log in</button>
    </>
  );
}

export default PublicPage;