import React from "react";

import Phrase from "./components/Phrase";
import { EmptyBlock } from "./components/EmptyBlock";

import "./App.css";

const adjectivesArr = [
    "абсолютный",
    "адский",
    "азартный",
    "активный",
    "ангельский",
    "астрономический",
    "баснословный",
    "безбожный",
    "безбрежный",
    "безвозвратный",
    "безграничный",
    "бездонный",
    "бездушный",
    "безжалостный",
    "замечательно",
    "замечательный",
    "записной",
    "запредельный",
    "заядлый",
    "звериный",
    "зверский",
    "зеленый",
    "злой",
    "злостный",
    "значительный",
    "неоспоримый",
    "неотразимый",
    "неоценимый",
    "непередаваемый"
];

const nounsArr = [
    "лгун",
    "день",
    "конь",
    "олень",
    "человек",
    "программист",
    "ребёнок",
    "конец",
    "город",
    "дурак"
];

function App() {
    const [phrases, setPhrases] = React.useState([]);

    /* Функция генерации рандомных словосочетаний */
    const handleClickGenerate = () => {
        const firstAdj = Math.floor(Math.random() * adjectivesArr.length);
        const secondAdj = Math.floor(Math.random() * adjectivesArr.length);
        const nouns = Math.floor(Math.random() * nounsArr.length);

        setPhrases((prev) => [
            `${adjectivesArr[firstAdj]} ${adjectivesArr[secondAdj]} ${nounsArr[nouns]}`,
            ...prev,
        ]);
    };

    /* Функция очистки массива */
    const handleClickClear = () => {
        setPhrases([]);
    }

    return (
        <>
            <div className="wrapper">
                {phrases.length !== 0 ? (
                    <div className="list">
                        {phrases.map((phrase, index) => (
                            <div key={index} className="block">
                                <Phrase text={phrase} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <EmptyBlock />
                )}

                <button className="btn btn_generate" onClick={handleClickGenerate}>Сгенерировать</button>
                <button className="btn btn_clear" onClick={handleClickClear}>Очистить</button>
            </div>
        </>
    )
}

export default App;