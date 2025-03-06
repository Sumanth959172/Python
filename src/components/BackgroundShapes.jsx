import React from 'react';

function BackgroundShapes() {
    return (
        <div className="shape-container">
            {/* Cube 1 */}
            <div className="cube" style={{ top: '15%', left: '10%' }}>
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face left"></div>
                <div className="face right"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
            </div>

            {/* Cube 2 */}
            <div className="cube" style={{ top: '60%', left: '75%' }}>
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face left"></div>
                <div className="face right"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
            </div>
        </div>
    );
}

export default BackgroundShapes;
