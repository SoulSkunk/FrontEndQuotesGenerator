import { useState, useEffect } from "react";
import "../styles/Home.css";
import allQuotesCard from "../json/AllQuotesCard.json"; //import le back

function Home() {
  //contient theme.value selected dans l'input
  const [selectedTheme, setSelectedTheme] = useState();

  //stock les données de la bdd pour ensuite pourvoir afficher
  const [citations, setCitations] = useState([]);

  //stock de l'id
  const [quotes_id, setQuotesid] = useState();

  useEffect(() => {
    //Theme change
    console.log("Selected Theme:", selectedTheme);
  }, [selectedTheme]);
  useEffect(() => {
    //Fonction qui appel la route côté back pour recup les donnée de la bdd
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => {
        //stock
        setCitations(data);
      }) //error
      .catch((error) =>
        console.error("Erreur lors de la récupération des citations:", error)
      );
  }, []);

  // Fonction qui appel la route côté back pour récupérer les données return de l'api
  function getCitationByCategory() {
    fetch(`http://localhost:3001/category/${selectedTheme}`)
      .then((response) => response.json())
      .then((data) => {
        setCitations([...citations, data.quote]);
        console.log(data);
        console.log("Citation reçue :", data.quote);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête GET :", error);
      });
  }

  //function delete
  function handleDelete(id) {
    // setQuotesid(id.quotes_id);
    fetch(`http://localhost:3001/quotes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setCitations(citations.filter((citation) => citation._id !== id)); // Mettre à jour l'état local en excluant la citation supprimée
        console.log(data);
        console.log("Citation deleted");
      })
      .catch((error) => {
        console.error("Erreur lors de la requête DELETE :", error);
      });
  }

  //Function qui ajoute les emojis et la couleur
  function getEmojiAndColor(category) {
    const thisTheme = selectData.find((item) => item.theme === category);
    return {
      emoji: thisTheme ? thisTheme.emoji : "",
      color: thisTheme ? thisTheme.color : "",
    };
  }

  // selectTheme contient ce que l'utilisateur à choisi, il faut envoyer ca au back
  const selectData = [
    { theme: "age", emoji: "👵", color: "#8A2BE2" },
    { theme: "alone", emoji: "😔", color: "#708090" },
    { theme: "amazing", emoji: "😲", color: "#FFD700" },
    { theme: "anger", emoji: "😠", color: "#FF4500" },
    { theme: "architecture", emoji: "🏰", color: "#CD5C5C" },
    { theme: "art", emoji: "🎨", color: "#FF69B4" },
    { theme: "attitude", emoji: "😏", color: "#2E8B57" },
    { theme: "beauty", emoji: "💄", color: "#FF1493" },
    { theme: "best", emoji: "🥇", color: "#FFD700" },
    { theme: "birthday", emoji: "🎂", color: "#FF6347" },
    { theme: "business", emoji: "💼", color: "#4682B4" },
    { theme: "car", emoji: "🚗", color: "#008080" },
    { theme: "change", emoji: "🔄", color: "#8FBC8F" },
    { theme: "communication", emoji: "📞", color: "#1E90FF" },
    { theme: "computers", emoji: "💻", color: "#00CED1" },
    { theme: "cool", emoji: "😎", color: "#87CEEB" },
    { theme: "courage", emoji: "🦸‍♂️", color: "#FF8C00" },
    { theme: "dad", emoji: "👨", color: "#556B2F" },
    { theme: "dating", emoji: "💑", color: "#FF1493" },
    { theme: "death", emoji: "💀", color: "#696969" },
    { theme: "design", emoji: "🎨", color: "#FF69B4" },
    { theme: "dreams", emoji: "💭", color: "#9932CC" },
    { theme: "education", emoji: "🎓", color: "#2E8B57" },
    { theme: "environmental", emoji: "🌳", color: "#3CB371" },
    { theme: "equality", emoji: "⚖️", color: "#7B68EE" },
    { theme: "experience", emoji: "🌍", color: "#A0522D" },
    { theme: "failure", emoji: "🚫", color: "#FF6347" },
    { theme: "faith", emoji: "🙏", color: "#FFD700" },
    { theme: "family", emoji: "👨‍👩‍👧‍👦", color: "#556B2F" },
    { theme: "famous", emoji: "🌟", color: "#FFD700" },
    { theme: "fear", emoji: "😨", color: "#8B4513" },
    { theme: "fitness", emoji: "🏋️‍♂️", color: "#008000" },
    { theme: "food", emoji: "🍔", color: "#FF6347" },
    { theme: "forgiveness", emoji: "🤝", color: "#32CD32" },
    { theme: "freedom", emoji: "🗽", color: "#4169E1" },
    { theme: "friendship", emoji: "🤝", color: "#FFD700" },
    { theme: "funny", emoji: "😄", color: "#FFD700" },
    { theme: "future", emoji: "🔮", color: "#9932CC" },
    { theme: "god", emoji: "🙏", color: "#FFD700" },
    { theme: "good", emoji: "👍", color: "#00FF00" },
    { theme: "government", emoji: "🏛️", color: "#696969" },
    { theme: "graduation", emoji: "🎓", color: "#2E8B57" },
    { theme: "great", emoji: "🚀", color: "#FFD700" },
    { theme: "happiness", emoji: "😃", color: "#FFD700" },
    { theme: "health", emoji: "🏥", color: "#32CD32" },
    { theme: "history", emoji: "📜", color: "#A52A2A" },
    { theme: "home", emoji: "🏠", color: "#008080" },
    { theme: "hope", emoji: "🤞", color: "#00BFFF" },
    { theme: "humor", emoji: "😄", color: "#FFD700" },
    { theme: "imagination", emoji: "🎨", color: "#FF69B4" },
    { theme: "inspirational", emoji: "🌈", color: "#FFD700" },
    { theme: "intelligence", emoji: "🧠", color: "#9370DB" },
    { theme: "jealousy", emoji: "😒", color: "#FF4500" },
    { theme: "knowledge", emoji: "📚", color: "#9932CC" },
    { theme: "leadership", emoji: "👔", color: "#4169E1" },
    { theme: "learning", emoji: "📚", color: "#9932CC" },
    { theme: "legal", emoji: "⚖️", color: "#7B68EE" },
    { theme: "life", emoji: "🌱", color: "#00FF00" },
    { theme: "love", emoji: "❤️", color: "#FF1493" },
    { theme: "marriage", emoji: "💍", color: "#FF1493" },
    { theme: "medical", emoji: "👨‍⚕️", color: "#32CD32" },
    { theme: "men", emoji: "👨", color: "#556B2F" },
    { theme: "mom", emoji: "👩", color: "#556B2F" },
    { theme: "money", emoji: "💰", color: "#FFD700" },
    { theme: "morning", emoji: "🌄", color: "#FFD700" },
    { theme: "movies", emoji: "🎬", color: "#FF6347" },
    { theme: "success", emoji: "🏆", color: "#FFD700" },
  ];
  return (
    <>
      <div id="quotesCard">
        <h1>Inspirez-moi 🧘</h1>
        <h2>Random quotes generator</h2>

        {/* Input Select pour le thème */}
        <div className="input_area">
          <label htmlFor="themeSelect" className="form-label">
            Choisissez un thème
          </label>
          <select
            id="themeSelect"
            className="form-select"
            value={selectedTheme}
            // au changement de l'input on stocke la valeur choisi dans selectTheme
            onChange={(e) => setSelectedTheme(e.target.value)}
          >
            <option value="" disabled>
              Choisissez un thème
            </option>
            {/* .map sur selectData qui contient les theme */}
            {selectData.map((item, index) => (
              <option key={index} value={item.theme}>
                {item.theme}
              </option>
            ))}
          </select>
          {/* CTA add new quote */}
          <button className="cta" onClick={getCitationByCategory}>
            Ajouter une citation +
          </button>
        </div>

        <div className="area_quotes">
          <div>
            <ul className="card_quotes">
              {citations.map((citation) => (
                <li
                  style={{
                    backgroundColor: getEmojiAndColor(citation.category).color,
                  }}
                  className="quotes_items"
                  key={citation._id}
                >
                  <button
                    onClick={() => handleDelete(citation._id)}
                    className="btn_delete"
                  >
                    X
                  </button>
                  <div className="quote_details">
                    <p className="txt_emoji">
                      {getEmojiAndColor(citation.category).emoji}
                    </p>

                    <p className="txt_quote">{citation.quote}</p>
                    <p className="txt_author"> {citation.author}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
