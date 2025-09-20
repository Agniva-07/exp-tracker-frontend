import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses} = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <div className="header">
                    <h1>All Transactions</h1>
                    <p>Welcome back, Mike! Here's your financial overview</p>
                </div>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income card">
                                <div className="icon">{dollar}</div>
                                <div className="content">
                                    <h3>Total Income</h3>
                                    <p>{dollar} {totalIncome()}</p>
                                </div>
                            </div>
                            <div className="expense card">
                                <div className="icon">{dollar}</div>
                                <div className="content">
                                    <h3>Total Expense</h3>
                                    <p>{dollar} {totalExpenses()}</p>
                                </div>
                            </div>
                            <div className="balance card">
                                <div className="icon">{dollar}</div>
                                <div className="content">
                                    <h3>Total Balance</h3>
                                    <p>{dollar} {totalBalance()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <div className="minmax-container">
                            <div className="minmax-card">
                                <h3>Income Range</h3>
                                <div className="values">
                                    <div className="min">
                                        <span>Min</span>
                                        <p>₹{incomes.length ? Math.min(...incomes.map(item => item.amount)) : 0}</p>
                                    </div>
                                    <div className="max">
                                        <span>Max</span>
                                        <p>₹{incomes.length ? Math.max(...incomes.map(item => item.amount)) : 0}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="minmax-card">
                                <h3>Expense Range</h3>
                                <div className="values">
                                    <div className="min">
                                        <span>Min</span>
                                        <p>₹{expenses.length ? Math.min(...expenses.map(item => item.amount)) : 0}</p>
                                    </div>
                                    <div className="max">
                                        <span>Max</span>
                                        <p>₹{expenses.length ? Math.max(...expenses.map(item => item.amount)) : 0}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
  .header {
    margin-bottom: 2rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--modern-primary) 0%, var(--modern-blue-text) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.5rem;
    }
    p {
      color: var(--color-grey);
      font-size: 1.1rem;
    }
  }

  .stats-con {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 1024px) {
      grid-template-columns: 2fr 1fr;
    }

    .chart-con {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .amount-con {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;

        .card {
          background: var(--modern-glass-bg);
          backdrop-filter: var(--modern-glass-blur);
          border-radius: 20px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          box-shadow: var(--modern-card-shadow);
          border: 1px solid rgba(255, 255, 255, 0.5);

          .icon {
            font-size: 2.5rem;
            margin-right: 1rem;
            padding: 0.8rem;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
          }

          .content {
            h3 {
              font-size: 1rem;
              margin-bottom: 0.5rem;
              color: var(--modern-primary);
              font-weight: 600;
            }

            p {
              font-size: 1.8rem;
              font-weight: 800;
            }
          }
        }

        .income {
          .icon {
            color: var(--modern-income-green);
            background: rgba(67, 233, 123, 0.15);
          }
          p {
            color: var(--modern-income-green);
          }
        }

        .expense {
          .icon {
            color: var(--modern-expense-red);
            background: rgba(255, 106, 106, 0.15);
          }
          p {
            color: var(--modern-expense-red);
          }
        }

        .balance {
          .icon {
            color: var(--modern-blue-text);
            background: rgba(114, 137, 218, 0.15);
          }
          p {
            color: var(--modern-blue-text);
          }
        }
      }
    }

    .history-con {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .minmax-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .minmax-card {
          background: var(--modern-glass-bg);
          backdrop-filter: var(--modern-glass-blur);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: var(--modern-card-shadow);
          border: 1px solid rgba(255, 255, 255, 0.5);

          h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: var(--modern-primary);
            text-align: center;
            font-weight: 700;
          }

          .values {
            display: flex;
            justify-content: space-between;

            .min,
            .max {
              text-align: center;

              span {
                display: block;
                font-size: 0.9rem;
                color: var(--color-grey);
                margin-bottom: 0.5rem;
                font-weight: 600;
              }

              p {
                font-size: 1.5rem;
                font-weight: 800;
              }
            }

            .min p {
              color: var(--modern-blue-text);
            }

            .max p {
              color: var(--modern-income-green);
            }
          }
        }
      }
    }
  }

  /* Responsive styling */

  // Tablet and below (max width 1023px)
  @media (max-width: 1023px) {
    .stats-con {
      grid-template-columns: 1fr;
      gap: 1.5rem;

      .chart-con,
      .amount-con,
      .history-con {
        gap: 1rem;
        padding: 0.5rem;
      }

      .amount-con {
        grid-template-columns: 1fr !important; 
      }

      .card,
      .minmax-card {
        padding: 1rem;
      }
    }

    .history-con {
      .minmax-container {
        flex-direction: column;
      }
    }

    .header {
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  // Mobile and small devices (max width 599px)
  @media (max-width: 599px) {
    padding: 0.5rem;

    .header {
      margin-bottom: 1rem;

      h1 {
        font-size: 1.6rem;
        margin-bottom: 0.3rem;
      }

      p {
        font-size: 0.9rem;
      }
    }

    .stats-con {
      gap: 1rem;

      .chart-con,
      .amount-con,
      .history-con {
        gap: 0.5rem;
        padding: 0.25rem;
      }

      .amount-con {
        grid-template-columns: 1fr !important;
      }

      .card,
      .minmax-card {
        padding: 0.7rem;
        font-size: 0.9rem;
      }
    }

    /* Handle chart overflow on smaller screens */
    .chart-con {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
`;



export default Dashboard;