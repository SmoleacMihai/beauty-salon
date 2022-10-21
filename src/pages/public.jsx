import { useNavigate } from "react-router-dom";

const PublicPage = () => {
  const goTo = useNavigate();

  const handleClick = () => {
    goTo("/login");
  }

  return (
    <>
      <h1>This is public content</h1>
      <button onClick={handleClick}>Log in</button>
    </>
  );
}

export default PublicPage;