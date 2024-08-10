type Heading = {
  title?: string | undefined;
  sub?: string | undefined;
};

export const Heading = ({ title, sub }: Heading) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <h1 className=" lg:text-[40px] font-semibold w-full font-cal text-[35px] leading-9">
        {title}
      </h1>
      <p className="font-medium text-neutral-500">{sub}</p>
    </div>
  );
};
