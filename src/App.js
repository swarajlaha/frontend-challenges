import './App.css';
import AutosuggestInput from './autosuggest-input/pages/autosuggestInput';
import BackToTop from './back-to-top/pages/backToTop';
import CountryCapital from './country-capital/pages/CountryCapital';
import ExpandingLadder from './expanding-ladder/pages/ExpandingLadder';
import GenerateActivity from './generate-activity/pages/GenerateActivity';
import McqQuiz from './mcq-quiz/pages/McqQuiz';
import OnlineUsers from './online-users-usecontext.js/pages/OnlineUsers';
import PasswordChecker from './password-checker/pages/PasswordChecker';
import RenderNestedObject from './render-nested-object/pages/RenderNestedObject';
import RenderRobots from './render-robots/pages/RenderRobots';
import ScrollAndFix from './scroll-and-fix/pages/ScrollAndFix';
import SmartTextarea from './smart-textarea/pages/SmartTextarea';
import ToggleSidebar from './toggle-sidebar/pages/ToggleSidebar';

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
      <OnlineUsers />
    </>
  );
}

export default App;
