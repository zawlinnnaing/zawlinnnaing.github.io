import * as React from "react";
import { Link, navigate } from "gatsby";

// markup
const NotFoundPage = () => {
  React.useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return (
    <main>
      <title>Not found</title>
      <p>
        Redirecting to <Link to="/">home page</Link>...
      </p>
    </main>
  );
};

export default NotFoundPage;
