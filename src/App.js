// import { ThemeContext, ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { InputBox } from './components/inputBox';
import { CarListContextProvider } from './context/carListContext';
import { addCarButton } from './components/addCarButton';

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     background: {
//       default: '#131924',
//     } 
//   }
// })

function App() {
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
        <CarListContextProvider> 

          <div className='input-container'>
            <InputBox />
            <AddCarButton />
          </div>

        
        </CarListContextProvider>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
