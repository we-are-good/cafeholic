import PostProvider from "./context/PostContext";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <PostProvider>
        <Router />
      </PostProvider>
    </>
  );
}

export default App;
