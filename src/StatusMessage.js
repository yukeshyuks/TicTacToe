import React from 'react'

export const StatusMessage = ({winner, current}) => {
  const noMoves = current.board.every(e1 => e1 !== null);

  return (
    <div className="status-message">
      {winner && (<>
        Winner is{' '} 
        <span className={winner ==='X' ? 'text-green' : 'text-orange'}>
        {winner} </span>
      </>
      )}
      {!winner && !noMoves && (
      <>
      Next player is {''}
      <span className={current.isXNext ? 'text-green' : 'text-orange'}>
        {current.isXNext ? 'X' : 'O'}{''}
        </span> 
      </>
      )}
      {!winner && noMoves && 
      <>
      <span className="text-green">X</span> and <span className="text-orange">O</span> tied
      </>
      }
      
    </div>
  );
};

export default StatusMessage;