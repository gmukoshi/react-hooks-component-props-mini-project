import React from "react";

export default function Article({
  title,
  date = "January 1, 1970",
  preview,
  minutes,
}) {
  // Generate the emoji string
  let emojiDisplay = "";

  if (minutes < 30) {
    // For coffee cups: 1 cup per 5 minutes (rounded up)
    const cups = Math.ceil(minutes / 5);
    emojiDisplay = "☕️".repeat(cups);
  } else {
    // For bento boxes: 1 box per 10 minutes (rounded up)
    const bentos = Math.ceil(minutes / 10);
    emojiDisplay = "🍱".repeat(bentos);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojiDisplay} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}
