const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-[1364px] mx-auto px-[20px] ${className}`}>
      {children}
    </div>
  );
};

export { Container };
