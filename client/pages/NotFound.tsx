import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] container flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-primary mb-3">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Page not found</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
