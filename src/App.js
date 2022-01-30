import './App.css';
import AutosuggestInput from './autosuggest-input/pages/autosuggestInput';
import BackToTop from './back-to-top/pages/backToTop';
import McqQuiz from './mcq-quiz/pages/McqQuiz';
import PasswordChecker from './password-checker/pages/PasswordChecker';
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
      <McqQuiz />
    </>
  );
}

export default App;
