import QuizCreation from '@/components/QuizCreation';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';
import React from 'react';



export const metadata = {
    title: "Quiz | Quizzzy",
    description: "Quiz yourself on anything!",
  };

  interface Props {
    searchParams: {
      topic?: string;
    };
  }

const QuizPage = (props: Props) => {
  return (
    <div>QuizPage</div>
  )
}

const Quiz = async ({ searchParams }: Props) => {
    const session = await getAuthSession();
    if (!session?.user) {
      redirect("/");
    }
    return <QuizCreation topic={searchParams.topic ?? ""} />;
  };

export default QuizPage;