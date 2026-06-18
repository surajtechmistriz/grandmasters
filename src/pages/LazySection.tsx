import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  height?: string;
}

export default function LazySection({
  children,
  height = "600px",
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  return (
    <div ref={ref}>
      {inView ? children : <div style={{ minHeight: height }} />}
    </div>
  );
}