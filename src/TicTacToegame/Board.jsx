import React ,{useState} from "react";
import Square from "./square";
const Board=()=>{
    const [state,setState]=useState(Array(9).fill(null));
    const[isXturn,setXturn]=useState(true);
    const handleClick=(index)=>{
        if(state[index]!=null){
            return;
        }
        const copyState=[...state];
        copyState[index]=isXturn?"X":"O";
        setState(copyState);
        setXturn(!isXturn);

    }
    const checkWinner=()=>{
        const winnerLogic=[
            [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
        ];
        for(let logic of winnerLogic){
            const [a,b,c]=logic;
           if(state[a]!=null&&state[a]==state[b]&&state[b]==state[c])
           return true;
        }
    
return false;
    }
    const gameEnd=()=>{
        for(let presentState of state){
            if(presentState==null)
            return false;
        }
        return true;
        
    }
    const isGameEnd=gameEnd();
           const isWinner=checkWinner();
           const handleReset=()=>{
            setState(Array(9).fill(null));
            setXturn(true)
           }
    return(
        <><h2 style={{
            "margin": "auto",
    "color": "darkslategray",
    "margin-top": "20px"
        }}>Tic-Tac-Toe Game</h2>
        <div >{isWinner? <><h3 > Congratulations {isXturn?"O":"X"} ,you won the game</h3>
        <button  className="buttonCSS"onClick={handleReset}>Play Again </button></>:<>{isGameEnd?<><h3>Game is over nobody won</h3>
        <button className="buttonCSS" onClick={handleReset}>Play Again</button> </>:
        
        <>

        <div className="board-container">
            <div className="board-row">
                <Square onClick={()=>handleClick(0)}value={state[0]}/>
                <Square  onClick={()=>handleClick(1)} value={state[1]}/>
                <Square onClick={()=>handleClick(2)} value={state[2]}/>

                
            </div>
            <div className="board-row">
            <Square onClick={()=>handleClick(3)} value={state[3]}/>
            <Square onClick={()=>handleClick(4)} value={state[4]}/>
            <Square onClick={()=>handleClick(5)} value={state[5]}/>
           
            </div>
            <div className="board-row">
            <Square onClick={()=>handleClick(6)} value={state[6]}/>
            <Square onClick={()=>handleClick(7)} value={state[7]}/>
            <Square onClick={()=>handleClick(8)} value={state[8]}/>
            </div>

        </div>
        <h3 style={{
            "text-align": "center",
            
            "width": "100px",
            "height": "40px",
            "margin-left": "550px"
        }}>
        Please Move Player {isXturn?"X":"O"}</h3>
        </>
        

        }
        </>}
           
        </div>
        </>
    )
}
export default Board;