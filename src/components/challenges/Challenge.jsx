import React from 'react';
import { Link } from 'react-router-dom';

//Components
import ShortAnswer from './questions/ShortAnswer.jsx'

const Challenge = ({ data }) => {
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
                    <ShortAnswer key={index} data={question} index={index + 1} />
                    ))}
                </div>

            </div>
        </div>
        </div>
    </>
    );
};

export default Challenge;
