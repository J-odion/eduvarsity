
import Sidebar from './Sidebar';
import Header from './Header';
import ProgressOverview from './ProgressOverview';
import OverallSummary from './OverallSummary';
import ContinueLearning from './ContinueLearning';
import WeeklyGoals from './WeeklyGoals';
import NextDeadline from './NextDeadline';
import NextBadge from './NextBadge';

const Dashboard = () => {
  return (
    <div className="flex w-full justify-between flex-col md:flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <div className="flex flex-col lg:flex-row w-full justify-between gap-4 flex-1 p-4">
          <div className='flex flex-1 flex-col gap-4'>
          <ProgressOverview />
          <div className=" hidden lg:flex">
          <OverallSummary />
          </div>
          <ContinueLearning />
          </div>
          <div className='flex flex-0.5 flex-col gap-4'>
          <WeeklyGoals />
          <NextDeadline />
          <NextBadge />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
