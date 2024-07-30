import React, { useState } from 'react';

/*FontAwesome Icons*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

/*Answer State*/
const ShortAnswer = ({ data, index }) => {
    const [showHint, setShowHint] = useState(false);
    const [submittedAnswer, setSubmittedAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [incorrectIndicator, setIncorrectIndicator] = useState(false);

    // Toggle Hint Feature
    const toggleHint = () => {
        setShowHint(!showHint);
    };

    // Handle Question Submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        
        // Transform correct answers and submitted answer for comparison
        const correctAnswers = data.correct_answers.map(answer => answer.toLowerCase().trim()); // Array of correct answers
        const cleanedSubmittedAnswer = submittedAnswer.toLowerCase().trim(); // Cleaned submitted answer for comparison

        // Check if the submitted answer is correct
        const isSubmittedCorrect = correctAnswers.includes(cleanedSubmittedAnswer);
        setIsCorrect(isSubmittedCorrect);

        if (isSubmittedCorrect) {
            setShowHint(false); // Hide hint if answer is correct
        } else {
            setIncorrectIndicator(true); // Incorrect indicator
            setTimeout(() => {
                setIncorrectIndicator(false); // Reset after 0.5 seconds
            }, 500);
        }
    };

    // Check if hint is available
    const hasHint = data.hint && data.hint.trim() !== '';

    // Component
    return (
        <form className={`challenge_question ${isCorrect ? 'challenge_question-correct' : ''} ${incorrectIndicator ? 'challenge_question-incorrect' : ''}`} onSubmit={handleSubmit}>
            <h3 className="challenge_question_number">Question {index}</h3>

            <label className="challenge_question_label" htmlFor={`q${index}`}>
                <p dangerouslySetInnerHTML={{ __html: data.question }} />
            </label>

            <div className="challenge_question_submission">
                <input 
                    className={`challenge_question_submission_text ${isCorrect ? 'challenge_question_submission_text-correct' : ''} ${incorrectIndicator ? 'shake' : ''}`} 
                    type="text" 
                    id={`q${index}`}
                    name={`q${index}`}
                    placeholder={data.placeholder}
                    autoComplete="off"
                    disabled={isCorrect} // Add disabled attribute when isCorrect is true
                    readOnly={isCorrect} // Add readonly attribute when isCorrect is true
                    value={submittedAnswer}
                    data-bwignore
                    data-lpignore="true"
                    data-form-type="other"
                    data-1p-ignore
                    onChange={(e) => setSubmittedAnswer(e.target.value)}
                />
                {isCorrect ? (
                    <button type="button" className="challenge_question_submission_button challenge_question_submission_button-correct" title="Correct" tabIndex="-1">Correct!</button>
                ) : (
                    <>
                        <button type="submit" className="challenge_question_submission_button challenge_question_submission_button-submit" title="Submit">Submit</button>
                        {hasHint && (
                            <button type="button" className={`challenge_question_submission_button challenge_question_submission_button-hint ${showHint ? 'challenge_question_submission_button-hint-active' : ''}`} onClick={toggleHint}><FontAwesomeIcon icon={faLightbulb} title="Hint"/></button>
                        )}
                    </>
                )}
            </div>

            {/* If the hint is toggled, display it */}
            {showHint && hasHint && (
                <div className="challenge_question_hint">
                    <h3><FontAwesomeIcon icon={faLightbulb} title="Hint"/> Hint</h3>
                    <p dangerouslySetInnerHTML={{ __html: data.hint }} />
                </div>
            )}
        </form>
    );
};

export default ShortAnswer;
