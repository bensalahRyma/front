import { Controller, useFormContext } from 'react-hook-form';
import { Input, Checkbox, Button } from 'rizzui';
import cn from '@/utils/class-names';
import FormGroup from '@/app/shared/form-group';
import { PiEnvelopeSimple } from 'react-icons/pi';
import { useState } from 'react';
import WidgetCard from '@/components/cards/widget-card';

interface FormSenderInfoProps {
  className?: string;
}
interface QuestionProps {
    question: string;
  }
  

  const Question1: React.FC<QuestionProps> = ({ question }) => {
    const [answer, setAnswer] = useState<string>('');
  
    // Gérer le changement de réponse
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAnswer(e.target.value);
    };
  
    return (
        <div className="flex mb-4">
        <div className="w-1/2 pr-4">
          <label className="mb-1 font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">{question}</label>
        </div>
        <div className="w-1/2">
          <input
            type="text"
            value={answer}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
      </div>
    );
  };
  
export default function Question2({ className }: FormSenderInfoProps) {
    const questions: string[] = [
        ' Were all items declared "not received" not scanned at the warehouse?',
        "Is there at least one item that has been declared (not received) that was scanned at the warehous?",
        'If package less than 250gr, ask question in logistic chain (+notifficaiton), is the item very light',
        'Did the returned packaged match initially(more or less) the weight of the items returned?',
    
      ];
    
  return (
    <WidgetCard
    title="Questions"
    // description={}
    titleClassName="font-normal text-gray-500 text-sm sm:text-sm 2xl:text-base font-inter"
    descriptionClassName="text-xl font-semibold text-gray-900 mt-1.5 font-lexend 2xl:text-2xl"
    className={className}
  >
   <div className="mt-5">
   {questions.map((question, index) => (
      <Question1 key={index} question={question} />
    ))}

   </div>
  

   <Button rounded="pill" className="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</Button>
  </WidgetCard>

  );
}
