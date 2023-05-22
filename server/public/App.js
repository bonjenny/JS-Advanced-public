import { PickingButton } from "./PickingButton.js";
import { Queue } from "./Queue.js";

export default function App({ $target }) {
    this.state = {
        //
    }

    this.setState = (nextState) => {
        //
    }

    function game(item) {
        let next = items.getNext(item);
        if(item === computerCurrentItem) {
            alert("비겼습니다");
        } else if (next === computerCurrentItem) {
            alert("졌습니다");
        } else {
            alert("이겼습니다");
        }

        clearInterval(timerRandomComputerData);
        
        btnStart.removeAttribute('disabled');
        items.getAll().forEach(function (item) {
<<<<<<< HEAD
            item.disable(true);
=======
            item.disable(false);
>>>>>>> 0fd630a55bf1f2f3255db7dfd599f70b2e347bf7
        });
    }

    const items = new Queue([
        new PickingButton({
            key: 'scissors',
            name: "가위",
            onClick: game
        }),
        new PickingButton({
            key: 'rock',
            name: "바위",
            onClick: game
        }),
        new PickingButton({
            key: 'paper',
            name: "보",
            onClick: game
        })
    ]);

    let timerRandomComputerData;
    let btnStart = document.getElementById("btnStart");
    let computerCurrentItem = items.getAll()[0];
    let computerData = document.getElementById("computerData");
    
    let divPickingBtn = document.getElementById("divPickingBtn");
    items.getAll().forEach(item => {
        item.render(divPickingBtn);
        item.disable(true);
    });

    btnStart.onclick = () => {
        btnStart.setAttribute('disabled', true);
        items.getAll().forEach(item => item.disable(false));

        timerRandomComputerData = setInterval(() => {
            computerCurrentItem = items.getNext(computerCurrentItem);
            computerData.textContent = computerCurrentItem.name;
        }, 100);
    }
}