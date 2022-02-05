import React from "react";

import ListOfComments from './components/ListOfComments';
import AddComment from './components/AddComment';

function App() {
    // Сохраняем список всех комментариев, которые приходят через форму
    const [comments, setComments] = React.useState([]);

    // Отлавливаем изменения стейта с комментариями
    React.useEffect(() => {
        setComments([...JSON.parse(localStorage.getItem("comments"))]);
    }, []);

    // Сохраняем список комментариев
    React.useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    // Выводим список комментариев и блок с возможностью оставить новый комментарий
    return <div>
        <ListOfComments comments={comments} />
        <AddComment setComments={setComments} comments={comments} />
    </div>

}

export default App;