import './App.css';
import AutosuggestInput from './autosuggest-input/pages/autosuggestInput';
import BackToTop from './back-to-top/pages/backToTop';
import CountryCapital from './country-capital/pages/CountryCapital';
import ExpandingLadder from './expanding-ladder/pages/ExpandingLadder';
import FetchUsers from './fetch-users/pages/FetchUsers';
import GenerateActivity from './generate-activity/pages/GenerateActivity';
import McqQuiz from './mcq-quiz/pages/McqQuiz';
import OnlineUsers from './online-users-usecontext.js/pages/OnlineUsers';
import PasswordChecker from './password-checker/pages/PasswordChecker';
import PopUp from './pop-up/pages/PopUp';
import RenderNestedObject from './render-nested-object/pages/RenderNestedObject';
import RenderRobots from './render-robots/pages/RenderRobots';
import ScrollAndFix from './scroll-and-fix/pages/ScrollAndFix';
import SmartTextarea from './smart-textarea/pages/SmartTextarea';
import ToDoList from './to-do-list/pages/ToDoList';
import ToggleSidebar from './toggle-sidebar/pages/ToggleSidebar';
import Newsletter from './newsletter-card/pages/Newsletter'

function App() {
  return (
    <>
      { /** Password checker */ }
      {/* <PasswordChecker /> */}

      {/** Smart textarea */}
      {/* <SmartTextarea /> */}

      {/** Toggle sidebar */}
      {/* <ToggleSidebar /> */}

      { /** Autosuggest Input */ }
      {/* <AutosuggestInput /> */}

      { /** Back to top button */}
      {/* <BackToTop /> */}

      { /** Scroll and fix */}
      {/* <ScrollAndFix /> */}

      { /** MCQ quiz */}
      {/* <McqQuiz /> */}

      {/** Country capital */}
      {/* <CountryCapital /> */}

      {/** Render Nested Object */}
      {/* <RenderNestedObject /> */}

      {/** Render Robots */}
      {/* <RenderRobots /> */}

      {/** Generate Activity */}
      {/* <GenerateActivity /> */}

      {/** Expanding Ladder */}
      {/* <ExpandingLadder /> */}
      {/* <OnlineUsers /> */}

      {/** To Do List */}
      {/* <ToDoList /> */}

      {/** Pop Up */}
      {/* <PopUp /> */}

      {/** Fetch Users */}
      {/* <FetchUsers /> */}

      <Newsletter />
    </>
  );
}

export default App;
