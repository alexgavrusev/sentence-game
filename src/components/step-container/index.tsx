import { FC } from "react";
import { motion } from "framer-motion";
import { Container, Box } from "@chakra-ui/react";

type Props = {
  motionKey: number;
};

const StepContainer: FC<Props> = ({ motionKey, children }) => (
  <motion.div
    key={motionKey}
    variants={{
      initial: { y: 128, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -128, opacity: 0 },
    }}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ type: "spring", stiffness: 150, damping: 15 }}
    style={{ width: "100%" }}
  >
    <Container maxW="sm">
      <Box
        p={8}
        boxShadow="xl"
        borderRadius="lg"
        borderWidth={1}
        borderColor="gray.200"
        borderStyle="solid"
      >
        {children}
      </Box>
    </Container>
  </motion.div>
);

export default StepContainer;
