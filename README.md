# BitBurner
## Changelog
### [v1.0] - 2024-12-16
#### Added startup.js 
- This is copy-pasted from the in-game beginners' guide.
#### Added get-max-money.js:
- Argument: `hostname`
- Prints the max amount of money a server can have
- Unit is in million $ since it automatically divides the amount by 1,000,000 to help with reading the numbers
- Just messing around with the scripts, I will develop this later.
#### Added GRASS.js
- Stands for "Gain Root Access and Send Script".
- Is a counter when someone tells me to touch grass.
- Argument: `hostname`
- Function:
1. Send `early-hack-template.js` to the target server
2. Check for the required open ports to nuke (only goes up to 2 ports since I only progressed so far)
3. Open SSH and FTP ports depending on how many are required
4. Nuke the target server
