import { FC, useState, ReactNode } from 'react';
import { FaLightbulb, FaArrowsRotate, FaCircleCheck, FaO, FaCircleXmark } from 'react-icons/fa6';

const statusIcon: Record<string, ReactNode> = {
  '-1': <FaCircleXmark className="text-red-400" aria-label="Error" />,
  '2': <FaCircleCheck className="text-green-500" aria-label="Success" />,
  '1': (
    <FaArrowsRotate
      className="animate-spin text-blue-500 rotate-360 infinite duration-1000"
      aria-label="Loading"
    />
  ),
  '0': (
    <span className="text-yellow-500" aria-label="Initializing">
      <FaO />
    </span>
  ),
};
interface IStepQueue {
  condition: string;
  title: string;
}

const BootingStep: FC<IStepQueue> = ({ condition, title }) => {
  const Icon = statusIcon[condition];

  return (
    <div className="flex items-center">
      {Icon}
      <span className="mx-2">{title}</span>
    </div>
  );
};

const stepQueue: Array<IStepQueue> = [
  {
    condition: '2',
    title: 'Booting WebContainer',
  },
  {
    condition: '1',
    title: 'Installing dependencies',
  },
  {
    condition: '0',
    title: 'Running start command',
  },
];

const BootingWebContainer: FC = () => {
  const [steps] = useState<Array<IStepQueue>>(stepQueue);

  return (
    <div className="h-full w-full flex flex-col justify-center  items-center bg-[#202327]">
      <FaLightbulb className={`${true ? 'text-sky-400' : 'text-gray-400'} text-8xl my-4`} />
      <h2 className="mb-6">Installing dependencies</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <BootingStep key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default BootingWebContainer;
