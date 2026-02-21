import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
        The Daily Print
      </h1>
      <p className="mb-10 max-w-md text-center text-lg text-muted-foreground">
        A new woodcut every day. Bold lines, powerful stories.
      </p>
      <Link
        to="/aod"
        className="rounded-md bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground transition-opacity hover:opacity-80"
      >
        App of the Day →
      </Link>
    </div>
  );
};

export default Index;
