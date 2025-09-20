import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-color: #222260;
        --primary-color2: 'color: rgba(34, 34, 96, .6)';
        --primary-color3: 'color: rgba(34, 34, 96, .4)';
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
        --color-blue: #2c2ce5ff;

        /* ADD new modern variables below */
    --modern-primary: #1E1E2F;
    --modern-accent: #7289DA;
    --modern-gradient-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    --modern-glass-bg: rgba(255, 255, 255, 0.8);
    --modern-glass-blur: blur(12px);
    --modern-income-green: #43E97B;
    --modern-expense-red: #FF6A6A;
    --modern-secondary-grey: #e0e5ec;
    --modern-card-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    --modern-blue-text: #7289DA;
    }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, .6);
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
    }

    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }

     /* NEW MODERN styles that you can USE selectively in components */
    body {
        background: var(--modern-gradient-bg);
        color: var(--modern-primary);
    }

    h1, h2, h3 {
        font-weight: 800;
        color: var(--modern-primary);
    }
`;