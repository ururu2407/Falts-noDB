import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { FullPost } from "./pages/FullPost/FullPost";
import { CreatePost } from "./pages/CreatePost/CreatePost";
import { FirstVisit } from "./pages/FirstVisit/FirstVisit";
import { UserPosts } from "./pages/UserPosts/UserPosts";
import { EditPost } from "./pages/EditPost/EditPost";
function App() {
  const location = useLocation();
  const { pathname } = location;
  // Перевіряємо, чи користувач першій сторінці
  const firstPage = pathname === "/Falts-noDB/" || pathname === "/Falts-noDB";
  return (
    <>
      {/* Використовуємо компоненти маршрутизації для відображення відповідних компонентів для кожного шляху */}
      <Routes>
        {/* Компонент для першого відвідування */}
        <Route path="/Falts-noDB/" element={<FirstVisit />} />
        {/* Головна сторінка */}
        <Route path="/Falts-noDB/home" element={<Home />} />
        {/* Сторінка з постами користувача */}
        <Route path="/Falts-noDB/userPosts" element={<UserPosts />} />
        {/* Повний пост */}
        <Route path="/Falts-noDB/post/:id" element={<FullPost />} />
        {/* Сторінка для створення нового поста */}
        <Route path="/Falts-noDB/write" element={<CreatePost />} />
        {/* Сторінка для редагування існуючого поста */}
        <Route path="/Falts-noDB/edit/post/:id" element={<EditPost />} />
      </Routes>
      {/* Відображаємо підвал, якщо користувач не першій сторінці */}
      {!firstPage && <footer />}
    </>
  );
}

export default App;
