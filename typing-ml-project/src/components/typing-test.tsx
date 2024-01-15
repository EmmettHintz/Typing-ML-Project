import React, { useState, useEffect, useRef } from "react";

export default function TypingTest() {
  const [text, setText] = useState("Sample Text for Typing Test");
  const [userInput, setUserInput] = useState("");
  const [timer, setTimer] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [wordsCorrect, setWordsCorrect] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [consistency, setConsistency] = useState(0);
  const [correct, setCorrect] = useState(true);
  const [incorrect, setIncorrect] = useState(false);

  const MAX_CHARS_PER_LINE = 50;

  const words = text.split(" ");

  const textDisplayRef = useRef(null);

  useEffect(() => {
    // Focus the element when the component mounts
    if (textDisplayRef.current) {
      textDisplayRef.current.focus();
    }
  }, []);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Handle user input
  const handleKeyPress = (event: any) => {
    if (!isRunning) {
      // Start the test on the first key press
      setIsRunning(true);
      setTimer(30); // Reset timer if needed
    }

    // handle key press logic
    if (event.key === " ") {
      event.preventDefault(); // Prevents the default spacebar action (scrolling)
      setCurrentWordIndex(currentWordIndex + 1);
      setUserInput("");
    } else {
      setUserInput(userInput + event.key);
    }
  };

  // Render the text with highlighting
  const renderText = () => {
    const words = text.split(" ");
    return words.map((word, index) => {
      let className = "";
      if (index === currentWordIndex) {
        const isCorrect = userInput.trim() === word;
        className = isCorrect ? "text-green-400" : "text-red-400";
      }
      return (
        <span key={index} className={className}>
          {word}{" "}
        </span>
      );
    });
  };

  useEffect(() => {
    // Generate initial text when the component mounts
    generateText();
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsRunning(false);
      // Calculate WPM and Accuracy here
      const wordsTyped = userInput.trim().split(/\s+/);
      const correctWords = wordsTyped.filter(
        (word, index) => word === text.split(/\s+/)[index]
      ).length;
      const timeInMinutes = 0.5; // 30 seconds in minutes
      setWpm(Math.round((correctWords / timeInMinutes) * 100) / 100);

      // Add accuracy calculation here
    }
    return () => clearInterval(interval);
  }, [isRunning, timer, userInput, text]);

  const handleInputChange = (event: any) => {
    if (!isRunning) return;
    const input = event.target.value;
    setUserInput(input);
  };

  function generateText(wordCount = 300) {
    const wordBag = [
      "the",
      "of",
      "and",
      "a",
      "to",
      "in",
      "is",
      "you",
      "that",
      "it",
      "he",
      "was",
      "for",
      "on",
      "are",
      "as",
      "with",
      "his",
      "they",
      "at",
      "be",
      "this",
      "have",
      "friend",
      "happy",
      "sky",
      "beautiful",
      "run",
      "walk",
      "think",
      "dream",
      "light",
      "dark",
      "day",
      "night",
      "sun",
      "moon",
      "love",
      "hope",
      "peace",
      "chaos",
      "life",
      "death",
      "world",
      "heart",
      "mind",
      "soul",
      "joy",
      "sad",
      "angry",
      "calm",
      "storm",
      "sea",
      "mountain",
      "river",
      "stream",
      "forest",
      "tree",
      "leaf",
      "flower",
      "grass",
      "bird",
      "fish",
      "animal",
      "dog",
      "cat",
      "mouse",
      "elephant",
      "lion",
      "tiger",
      "bear",
      "wolf",
      "fox",
      "rabbit",
      "snake",
      "insect",
      "butterfly",
      "bee",
      "ant",
      "spider",
      "city",
      "town",
      "village",
      "country",
      "world",
      "planet",
      "universe",
      "star",
      "galaxy",
      "space",
      "time",
      "moon",
      "water",
      "fire",
      "earth",
      "air",
      "magic",
      "mystery",
      "adventure",
      "journey",
      "quest",
      "battle",
      "war",
      "peace",
      "king",
      "queen",
      "prince",
      "princess",
      "wizard",
      "witch",
      "dragon",
      "monster",
      "hero",
      "villain",
      "legend",
      "myth",
      "fairy",
      "tale",
      "story",
      "book",
      "novel",
      "poem",
      "song",
      "dance",
      "art",
      "painting",
      "sculpture",
      "music",
      "theater",
      "film",
      "movie",
      "video",
      "apple",
      "banana",
      "orange",
      "grape",
      "strawberry",
      "melon",
      "pineapple",
      "kiwi",
      "peach",
      "pear",
      "cherry",
      "plum",
      "watermelon",
      "mango",
      "lemon",
      "lime",
      "coconut",
      "berry",
      "vegetable",
      "carrot",
      "broccoli",
      "cucumber",
      "tomato",
      "potato",
      "onion",
      "pepper",
      "lettuce",
      "spinach",
      "garlic",
      "eggplant",
      "zucchini",
      "celery",
      "cabbage",
      "mushroom",
      "avocado",
      "peanut",
      "almond",
      "walnut",
      "cashew",
      "pistachio",
      "honey",
      "bread",
      "butter",
      "cheese",
      "milk",
      "yogurt",
      "egg",
      "chicken",
      "beef",
      "pork",
      "fish",
      "shrimp",
      "lobster",
      "crab",
      "rice",
      "pasta",
      "noodle",
      "soup",
      "sandwich",
      "pizza",
      "burger",
      "fries",
      "cookie",
      "cake",
      "pie",
      "chocolate",
      "ice cream",
      "coffee",
      "tea",
      "juice",
      "soda",
      "water",
      "glass",
      "cup",
      "plate",
      "fork",
      "knife",
      "spoon",
      "napkin",
      "table",
      "chair",
      "bed",
      "couch",
      "desk",
      "bookshelf",
      "lamp",
      "clock",
      "mirror",
      "window",
      "door",
      "car",
      "bicycle",
      "bus",
      "train",
      "plane",
      "ship",
      "boat",
      "subway",
      "taxi",
      "walk",
      "run",
      "swim",
      "jump",
      "dance",
      "sing",
      "laugh",
      "cry",
      "smile",
      "frown",
      "whisper",
      "shout",
      "listen",
      "speak",
      "read",
      "write",
      "learn",
      "teach",
      "study",
      "work",
      "play",
      "create",
      "explore",
      "discover",
      "travel",
      "journey",
      "adventure",
      "dream",
      "imagine",
      "plan",
      "organize",
      "achieve",
      "succeed",
      "fail",
      "try",
      "risk",
      "explore",
      "wonder",
      "ponder",
      "reflect",
      "remember",
      "forget",
      "forgive",
      "apologize",
      "understand",
      "empathize",
      "forgive",
      "appreciate",
      "value",
      "cherish",
      "admire",
      "respect",
      "hate",
      "dislike",
      "argue",
      "fight",
      "compete",
      "cooperate",
      "support",
      "encourage",
      "inspire",
      "motivate",
      "challenge",
      "celebrate",
      "party",
      "holiday",
      "celebration",
      "tradition",
      "culture",
      "heritage",
      "family",
      "friendship",
      "relationship",
      "marriage",
      "parent",
      "child",
      "sibling",
      "cousin",
      "uncle",
      "aunt",
      "grandparent",
      "neighbor",
      "stranger",
      "community",
      "society",
      "culture",
      "artistic",
      "creative",
      "scientific",
      "technological",
      "innovative",
      "historic",
      "ancient",
      "modern",
      "traditional",
      "contemporary",
      "digital",
      "analog",
      "abstract",
      "realistic",
      "fantasy",
      "fiction",
      "nonfiction",
      "history",
      "science",
      "mathematics",
      "language",
      "communication",
      "expression",
      "emotion",
      "perception",
      "sensation",
    ];

    let text = "";

    for (let i = 0; i < wordCount; i++) {
      const randomIndex = Math.floor(Math.random() * wordBag.length);
      text += wordBag[randomIndex] + " ";
    }

    setText(text);
  }

  const startTest = () => {
    setIsRunning(true);
    setWpm(0);
    setAccuracy(0);
    setConsistency(0);
    setTimer(30);
    setUserInput("");
    setWordsCorrect(0);
    setCorrect(false);
    setIncorrect(false);
    generateText();
    // Focus the text display element
    if (textDisplayRef.current) {
      textDisplayRef.current.focus();
    }
  };

  return (
    <div>
      {text && (
        <div
          className="text-display border-transparent outline-none"
          tabIndex={0}
          onKeyDown={handleKeyPress}
          autoFocus
        >
          {renderText()}
        </div>
      )}

      {isRunning && <p>Timer: {timer}</p>}

      {!isRunning && timer === 0 && (
        <div className="results">
          <p>WPM: {wpm}</p>
          <p>Accuracy: {accuracy}%</p>
          <p>Consistency: {consistency}%</p>
        </div>
      )}

      {!isRunning && (
        <button onClick={startTest} className="start-button">
          Start Test
        </button>
      )}
    </div>
  );
}
