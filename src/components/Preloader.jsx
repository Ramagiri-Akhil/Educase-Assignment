import { LoaderCircle } from 'lucide-react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <LoaderCircle className="w-8 h-20 text-blue-600 animate-spin size-24" />
    </div>
  )
}

export default Preloader