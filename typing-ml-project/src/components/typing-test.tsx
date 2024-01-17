import React, { useState, useEffect, useRef } from "react";
import { transpileModule } from "typescript";

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

  const MAX_CHARS_PER_LINE = 35;
  const MAX_WORDS_PER_LINE = 5;
  const LINES_TO_DISPLAY = 3;

  const averageWordLength =
    text.split(" ").reduce((acc, word) => acc + word.length, 0) /
    text.split(" ").length;
  const wordsPerLine = Math.floor(MAX_CHARS_PER_LINE / averageWordLength);

  const words = text.split(" ");

  const textDisplayRef = useRef(null);

  useEffect(() => {
    // Focus the element when the component mounts
    if (textDisplayRef.current) {
      textDisplayRef.current.focus();
    }
  }, []);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const [currentCharPosition, setCurrentCharPosition] = useState(0);

  // Handle user input
  const handleKeyPress = (event: any) => {
    if (!isRunning) {
      setIsRunning(true);
      setTimer(30);
    }
    if (event.key === " ") {
      // Prevent space from moving the page down
      event.preventDefault();
      // Move to the next word and reset chararcter position
      setCurrentWordIndex(currentWordIndex + 1);
      setUserInput("");
    } else {
      setUserInput(userInput + event.key);
    }
  };

  const renderText = () => {
    const lines = []; // This will hold all the lines of text
    let currentLine = ""; // This holds the text for the current line
    let charCount = 0; // This keeps track of the number of characters in the current line
    let visibleStartIndex = 0; // This determines the index of the first visible line

    // Split the entire text into words and iterate through them
    text.split(" ").forEach((word, index) => {
      // Check if adding the next word would exceed the max characters per line
      if (charCount + word.length > MAX_CHARS_PER_LINE) {
        lines.push(currentLine); // If so, push the current line to the lines array
        currentLine = word + " "; // Start a new line with the current word
        charCount = word.length + 1; // Reset the character count for the new line
      } else {
        currentLine += word + " "; // If not, add the word to the current line
        charCount += word.length + 1; // Update the character count
      }

      // If the current word index matches the index being processed
      // and we've filled at least two lines, update the start index for visibility
      if (index === currentWordIndex && lines.length >= 2) {
        visibleStartIndex = lines.length - 2;
      }
    });

     // When the currentWordIndex reaches the end of the second line, shuffle the rows
  if (currentLineComplete()) { // You will need to define currentLineComplete()
    shuffleRows(); // You will need to define shuffleRows()
    addNewLine(); // You will need to define addNewLine()
  }

    // If there's text in the current line that hasn't been added to lines, add it
    if (currentLine) {
      lines.push(currentLine);
    }

    /// Determine the current character index within the current word
    const currentCharIndex = userInput.length;

    // Map the visible lines to JSX paragraphs
    return lines
      .slice(visibleStartIndex, visibleStartIndex + LINES_TO_DISPLAY)
      .map((line, lineIndex) => {
        const wordsInLine = line.split(" "); // Split the current line into words
        return (
          <p key={lineIndex} className="whitespace-pre-wrap">
            {wordsInLine.map((word, wordIndex) => {
              // Calculate the global index of the current word
              const actualIndex = words.findIndex(
                (w, i) =>
                  i >= wordIndex + visibleStartIndex * wordsPerLine &&
                  w === word
              );
              let className = "inline"; // Default style for all words
              let displayWord = word; // Default display

              // Check if the word is the current word user is typing
              if (actualIndex === currentWordIndex) {
                // Style for the current word
                className +=
                  userInput === word ? " text-green-500" : " text-red-500";

                // Insert the cursor within the current word at the correct position
                const beforeCursor = word.slice(0, currentCharIndex);
                const afterCursor = word.slice(currentCharIndex);
                const displayWord = (
                  <>
                    <span className={className}>{beforeCursor}</span>
                    <span className="cursor">|</span>
                    {afterCursor}
                  </>
                );
              } else if (actualIndex < currentWordIndex) {
                // If the word has been typed, style it as such
                className += " text-gray-500";
              }

              return (
                <span
                  key={wordIndex}
                  className={`mr-1 inline-block ${className}`}
                >
                  {displayWord}&nbsp;
                  {/* Ensure there is a space after each word */}
                </span>
              );
            })}
          </p>
        );
      });
  };

  // This function will check iuf the current line typing is complete
  function currentLineComplete() {
    return true;
    // Logic to determine if the user has completed typing the second line
  }

  // This function will handle the logic of shuffling the rows up
  function shuffleRows() {
    // Logic to shuffle the rows up
  }

  // This function will add a new line as the third row
  function addNewLine() {
    // Logic to add a new line
  }

  // This function would return the lines that need to be displayed
  function getDisplayedLines() {

  }

  
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
      {isRunning && <p>Timer: {timer}</p>}
      {text && (
        <div
          className="text-display border-transparent p-4 text-center outline-none"
          tabIndex={0}
          onKeyDown={handleKeyPress}
          autoFocus
        >
          {renderText()}
        </div>
      )}

      {!isRunning && timer === 0 && (
        <div className="results">
          <p>WPM: {wpm}</p>
          <p>Accuracy: {accuracy}%</p>
          <p>Consistency: {consistency}%</p>
        </div>
      )}

      {!isRunning && (
        <button onClick={startTest} className="start-button">
          begin test
        </button>
      )}
    </div>
  );
}
