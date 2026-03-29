import {motion} from 'framer-motion';

const MobileContainer = ({ children }) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2}}
    className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-80 min-h-screen bg-gray-100">
        {children}
      </div>
    </motion.div>
  );
};

export default MobileContainer;
