// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract Baccarat {
    uint8 constant MAX_CARDS = 3;

    uint8[MAX_CARDS] playerCards;
    uint8[MAX_CARDS] bankerCards;
    uint8 playerTotal;
    uint8 bankerTotal;
    uint8 playerCardCount;
    uint8 bankerCardCount;

    event GameFinished(uint8 playerTotal, uint8 bankerTotal, uint8 winner, uint8[3] playerCards, uint8[3] bankerCards);
    event Monitor(uint8 v1, uint8 v2, uint32 v3, bytes32 str);

    using SafeMath for uint256;

    constructor() {}

    function deal() public returns (uint8) {
        // Deal initial 2 cards to the player and banker
        for (uint8 i = 0; i < 2; i++) {
            playerCards[i] = getRandomNumber(2 * i + 1);
            bankerCards[i] = getRandomNumber(2 * i + 2);
        }

        // Calculate the initial totals
        playerTotal = calculateTotal(playerCards, 2);
        bankerTotal = calculateTotal(bankerCards, 2);

        // Apply drawing rules for the third card
        bool playerDraw = false;
        uint8 playerThirdCard = 0;

        if (playerTotal <= 5 && (bankerTotal > 5 || bankerTotal < 8)) {
            playerDraw = true;
            playerThirdCard = getRandomNumber(5);
            playerCards[2] = playerThirdCard;
            playerTotal = calculateTotal(playerCards, 3);
        }

        bool bankerDraw = false;
        if (bankerTotal <= 2) {
            bankerDraw = true;
        } else if (
            bankerTotal == 3 &&
            (!playerDraw || (playerDraw && playerThirdCard != 8))
        ) {
            bankerDraw = true;
        } else if (
            bankerTotal == 4 &&
            (!playerDraw ||
                (playerDraw && playerThirdCard >= 2 && playerThirdCard <= 7))
        ) {
            bankerDraw = true;
        } else if (
            bankerTotal == 5 &&
            (!playerDraw ||
                (playerDraw && playerThirdCard >= 4 && playerThirdCard <= 7))
        ) {
            bankerDraw = true;
        } else if (
            bankerTotal == 6 &&
            playerDraw &&
            (playerThirdCard == 6 || playerThirdCard == 7)
        ) {
            bankerDraw = true;
        }

        if (bankerDraw) {
            bankerCards[2] = getRandomNumber(6);
            bankerTotal = calculateTotal(bankerCards, 3);
        }
        uint8 winner = determineWinner(playerTotal, bankerTotal);
        emit GameFinished(
            playerTotal,
            bankerTotal,
            winner,
            playerCards,
            bankerCards
        );
        return winner;
    }

    function getRandomNumber(uint256 param) public view returns (uint8) {
        uint256 randomNumber = uint256(
            keccak256(
                abi.encodePacked(block.timestamp, block.difficulty, param)
            )
        );
        uint8 randomInRange = uint8(randomNumber.mod(13).add(1));
        return randomInRange;
    }

    function calculateTotal(
        uint8[MAX_CARDS] memory cards,
        uint8 cardCount
    ) public pure returns (uint8) {
        uint8 total = 0;
        for (uint8 i = 0; i < cardCount; i++) {
            uint8 cardValue = cards[i];

            if (cardValue >= 10 && cardValue <= 13) {
                // Face cards and 10s
                total += 0;
            } else if (cardValue == 1) {
                // Aces
                total += 1;
            } else {
                total += cardValue;
            }
        }
        return total % 10;
    }

    function determineWinner(
        uint8 playerTotal2,
        uint8 bTotal
    ) internal pure returns (uint8) {
        if (playerTotal2 > bTotal) {
            return 1;
        } else if (playerTotal2 < bTotal) {
            return 2;
        } else {
            return 0;
        }
    }
}
