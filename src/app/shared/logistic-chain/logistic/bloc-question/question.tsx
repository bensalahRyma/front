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
  
export default function Question({ className }: FormSenderInfoProps) {
    const questions: string[] = [
        'Does the customer claim to have received most of the order?',
        "Does the customer have a good track record, less than 30% rate of return and no refund request superior to 100€?",
        'Was the package damaged according to the customer?',
        'Does the package lost/returned contain a luxury items - price higher than 200€? (Answer <<No>> if the transaction doesnt concern a return)',
        'Amount higher than XXX€?',
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
