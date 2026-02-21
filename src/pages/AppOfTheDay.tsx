import { Link } from "react-router-dom";
import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";

const AppOfTheDay = () => {
  const today = new Date();
  const dayOfMonth = today.getDate();
  const isEven = dayOfMonth % 2 === 0;

  const currentImage = isEven ? image1 : image2;
  const label = isEven ? "Image 1" : "Image 2";

  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-4 py-12">
      <Link
        to="/"
        className="mb-8 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back
      </Link>
      <h1 className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
        App of the Day
      </h1>
      <p className="mb-8 text-muted-foreground">
        {today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        {" · "}Showing {label} (day {dayOfMonth} is {isEven ? "even" : "odd"})
      </p>
      <img
        src={currentImage}
        alt={label}
        className="w-full max-w-3xl rounded-lg border border-border shadow-2xl"
      />
    </div>
  );
};

export default AppOfTheDay;
