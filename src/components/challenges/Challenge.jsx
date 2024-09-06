import React from 'react';
import { Link } from 'react-router-dom';

//Components
import ShortAnswer from './questions/ShortAnswer.jsx'

const Challenge = ({ data }) => {

    //Reset Local Storage for this challenge
    const handleReset = () => {
        // Confirm with the user
        if (window.confirm("Are you sure you want to reset this challenge? All progress and submitted questions will be lost.")) {
            // Remove the localStorage key that matches data.uid
            localStorage.removeItem(data.uid);
            window.location.reload(); // Refresh the page
        }
    };

    return (
    <>
        <div>
        <div className="container">

            <div className="header">
                <div className="header_breadcrumb">
                    <div className="header_breadcrumb_item">SOC 101 Challenges</div>
                    <Link to={`/c/${data.uid}`} className="header_breadcrumb_item">{data.title}</Link>
                </div>
            </div>


            <div className="challenge_form">

                {/*Challenge Instructions*/}
                <div
                className="challenge_instructions"
                dangerouslySetInnerHTML={{
                    __html: `<h2>Instructions:</h2> ${data.instructions}`
                }}
                />

                {/* Questions */}
                <div className="questions">
                    {data.questions.map((question, index) => (
                    <ShortAnswer 
                        key={index} 
                        data={question} 
                        index={index + 1} 
                        uid={data.uid}
                    />
                    ))}
                </div>

                {/* Reset Button */}
                <div className="reset_button">
                    <button 
                        type="button" 
                        className="challenge_question_reset_button" 
                        title="Reset" 
                        tabIndex="-1"
                        onClick={handleReset} // Add onClick handler
                    >
                        Reset Challenge
                    </button>
                </div>

            </div>
        </div>
        </div>
    </>
    );
};

export default Challenge;
