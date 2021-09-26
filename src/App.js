import './App.css';
import AutosuggestInput from './autosuggest-input/pages/autosuggestInput';
import BackToTop from './back-to-top/pages/backToTop';
import PasswordChecker from './password-checker/pages/PasswordChecker';
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
      <BackToTop />
    </>
  );
}

export default App;
