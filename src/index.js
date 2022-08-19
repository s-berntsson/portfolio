import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import TriangleNav from './routes/TriangleNav';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App /> }>
            <Route index element={ <TriangleNav /> } />
            <Route path="about" element={<h1>ABOUT</h1> } />
            <Route path="art-gallery" element={<h1>ART GALLERY</h1> } />
            <Route path="projects" element={<h1>PROJECTS</h1> } />
          </Route>
        </Routes>
      </BrowserRouter>

    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
