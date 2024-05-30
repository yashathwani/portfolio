import { useEffect, useState } from "react";
import "./Typing.css";
function Typing({ text, typingSpeed, deletingSpeed }) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (displayedText.length < text[textIndex].length) {
                    setDisplayedText((prev) => prev + text[textIndex].charAt(prev.length));
                } else {
                  setIsDeleting(true);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText((prev) => prev.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % text.length);
                }
            }
        };

        const timeout = setTimeout(()=>{
            handleTyping();
        }
            , isDeleting ? deletingSpeed:typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, textIndex, text, typingSpeed, deletingSpeed]);

    return (
        <div className="typing-effect">
            {displayedText}<p>|</p>
        </div>
    );
   
}

export default Typing;
