import { motion, useSpring, useTransform, animate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedNumberProps {
  value: number;
  trend?: boolean;
  className?: string;
}

const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value);
};

export function AnimatedNumber({ value, trend = false, className = "" }: AnimatedNumberProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => formatNumber(Math.round(latest)));

  useEffect(() => {
    const controls = animate(count, value, {
      type: "tween",
      duration: 2,
      ease: "easeOut"
    });

    return controls.stop;
  }, [value, count]);

  return (
    <motion.span className={className}>
      {rounded}
    </motion.span>
  );
}