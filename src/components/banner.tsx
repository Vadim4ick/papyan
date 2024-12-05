import Image from "next/image";

const Banner = ({
  imageUrl,
  hight = "",
}: {
  imageUrl: string;
  hight: string;
}) => {
  return (
    <section className="bg-[#EBEFF3] lg:pt-[36px] lg:pb-[100px]">
      <div className="lg:px-[20px]">
        <div
          className={`w-full overflow-hidden lg:rounded-lg lg:container mx-auto lg:max-w-[1364px] ${hight}`}
        >
          <Image
            width={1324}
            height={727}
            src={imageUrl}
            alt={"altText"}
            className="h-full 
          w-full object-cover 
          transition-transform duration-300 group-hover:scale-105
          "
          />
        </div>
      </div>
    </section>
  );
};

export { Banner };
