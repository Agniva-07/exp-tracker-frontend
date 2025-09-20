import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';

function History() {
    const {transactionHistory} = useGlobalContext()
    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            <div className="history-header">
                <h2>Recent History</h2>
                <span>{history.length} transactions</span>
            </div>
            <div className="history-list">
                {history.map((item) => {
                    const {_id, title, amount, type} = item
                    return (
                        <div key={_id} className={`history-item ${type}`}>
                            <div className="item-info">
                                <div className="title">{title}</div>
                                <div className="type-badge">{type}</div>
                            </div>
                            <div className={`amount ${type}`}>
                                {type === 'expense' ? `- ₹${amount <= 0 ? 0 : amount}` : `+ ₹${amount <= 0 ? 0 : amount}`}
                            </div>
                        </div>
                    )
                })}
            </div>
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    .history-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        
        h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--modern-primary);
            margin: 0;
        }
        
        span {
            font-size: 0.9rem;
            color: var(--color-grey);
            background: rgba(114, 137, 218, 0.1);
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
        }
    }
    
    .history-list {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        max-height: 300px;
        overflow-y: auto;
        padding-right: 5px;
        
        &::-webkit-scrollbar {
            width: 5px;
        }
        
        &::-webkit-scrollbar-track {
            background: rgba(114, 137, 218, 0.1);
            border-radius: 10px;
        }
        
        &::-webkit-scrollbar-thumb {
            background: var(--modern-blue-text);
            border-radius: 10px;
        }
    }
    
    .history-item {
        background: var(--modern-glass-bg);
        backdrop-filter: var(--modern-glass-blur);
        border-radius: 15px;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: var(--modern-card-shadow);
        border: 1px solid rgba(255, 255, 255, 0.5);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(31, 38, 135, 0.2);
        }
        
        .item-info {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            
            .title {
                font-weight: 600;
                color: var(--modern-primary);
                font-size: 1rem;
            }
            
            .type-badge {
                font-size: 0.7rem;
                text-transform: uppercase;
                background: rgba(114, 137, 218, 0.1);
                color: var(--modern-blue-text);
                padding: 0.2rem 0.5rem;
                border-radius: 10px;
                width: fit-content;
                font-weight: 600;
            }
        }
        
        .amount {
            font-weight: 700;
            font-size: 1.1rem;
        }
        
        &.income .amount {
            color: var(--modern-income-green);
        }
        
        &.expense .amount {
            color: var(--modern-expense-red);
        }
    }
`;

export default History