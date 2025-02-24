import { Button } from "../ui/button";

export const Header = () => {
  return (
    <section className="w-full h-full p-2 rounded-xl bg-secondary/20 relative overflow-hidden">
      <div className="absolute -top-[100px] -left-[100px] w-[300] h-[300] bg-white/50 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="w-full h-[78vh] bg-primary rounded-xl relative overflow-hidden p-2">
        <div className="absolute -top-[30vh] left-1/2 transform -translate-x-1/2 rotate-45 w-20 h-[150vh] bg-white/5 blur-xl pointer-events-none select-none" />
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-extrabold text-white text-4xl text-center leading-[50px]">
            Train Your Brain Faster <br /> With Quizer
          </h1>
          <p className="text-gray-400 font-extralight mt-2 text-center">
            With quizer you can read your favorite programming language blog and
            learn in the same page
          </p>
          <Button variant="secondary" size="lg" className="mt-5">
            Let&apos;s Try
          </Button>
        </div>
      </div>
    </section>
  );
};
