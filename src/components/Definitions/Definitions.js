import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, category, Dark }) => {
  return (
    <div className="meanings">
      <div className="audio">
        {meanings[0] && word && category === "en" && (
          <audio
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
            controls
          >
            Your Browser does not support audio element.
          </audio>
        )}
      </div>
      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: Dark ? "white" : "#282c34",
                  color: Dark ? "black" : "white",
                }}
              >
                <b>{def.definition}</b>
                {def.example && (
                  <div>
                    <b>Example : </b>
                    {def.example}
                  </div>
                )}
                {def.synonyms && (
                  <div>
                    <b>Synonyms : </b>
                    {def.synonyms + ", "}
                  </div>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
