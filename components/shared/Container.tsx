interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        w-full

        px-6
        sm:px-8
        lg:px-12
        xl:px-16

        ${className}
      `}
    >
      {children}
    </div>
  );
}