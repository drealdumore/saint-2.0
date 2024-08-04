type Heading = {
  title?: string | undefined;
  sub?: string | undefined;
};

export const Heading = ({ title, sub }: Heading) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <h1 className="text-2xl font-semibold w-full font-cal text-[40px]">
        {title}
      </h1>
      <p className="font-medium">{sub}</p>
    </div>
  );
};
