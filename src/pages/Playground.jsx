import React from "react";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const Playground = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className="mt-28 flex justify-center flex-col gap-10 items-center">
      <h1>Playground</h1>
      {/* <button className="btn">Button</button> */}

      <div className="flex gap-10 items-center">
        {isLoading ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : (
          <p>Clicked</p>
        )}

        <Button
          onClick={() => setIsLoading(!isLoading)}
          // className="dark:bg-blue-950 dark:text-white"
          // variant="secondary"
          className="bg-primary"
        >
          Button
        </Button>
      </div>

      <ThemeToggle />
    </div>
  );
};

export default Playground;
