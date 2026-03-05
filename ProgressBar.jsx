

     <a href="https://namastedev.com/practice/progress-bar">Question</a>
    
import React, { useEffect, useState } from 'react';

function ProgressBar() {
    const MAX_PROGRESS = 100
    const MIN_PROGRESS = 0
    const PROGRESS_BAR_WIDTH = 500
    const STEP = 10
    const [progress, setProgress] = useState(0)

    const getColor = (progress) => {
        if (progress < 40) return 'red'
        else if (progress < 80) return 'orange'
        return 'green'
    }
    const handleIncrease = () => {
        setProgress((p) => (Math.min(p + STEP, MAX_PROGRESS)))
    }
    const handleDecrease = () => {
        setProgress((p) => (Math.max(p - STEP, MIN_PROGRESS)))
    }
    const progressColor = getColor(progress)
    return (
        <div style={{
            padding: '20px'
        }}>
            <section
                style={{
                    width: `${PROGRESS_BAR_WIDTH}px`,
                    height: '20px',
                    backgroundColor: 'gray',
                    borderRadius: '20px',
                    display: 'flex',
                    textAlign: 'center',
                    color: 'white',

                }}>
                <section style={{
                    width: `${progress}%`,
                    backgroundColor: `${progressColor}`,

                }}
                    id="testBgColor">
                    {progress}%
                </section>

            </section>
            <section style={{
                display: 'flex',
                gap: '10px',
                padding: '20px'

            }}>
                <button onClick={
                    handleIncrease
                }>+10%</button>
                <button
                    onClick={
                        handleDecrease
                    }>-10%</button>
            </section>
        </div>

    );
}

export default ProgressBar;
