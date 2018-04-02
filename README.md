# Welcome to the Oasis
 - [http://www.myoasis.xyz](http://www.myoasis.xyz)

## What?
 - ERC20 Web wallet currently for use with Ethereum and [Oasis Credit](https://github.com/alsco77/oasis-credit)
 - Operates on the Ropsten Network
 - Allows balance checking and purchasing of Credits
 
### Oasis Credit?
 - Inspiration from [Ready Player One](https://www.goodreads.com/book/show/9969571-ready-player-one), my favourite book that has recently adapted to a [movie](https://www.youtube.com/watch?v=cSp1dM2Vj48)
 - Digital ownership of items is an interesting concept, whether it be for virtual or physical items, so conceptually designing a currency for a virtual reality seemed like a fun idea

## Stack
 - [Angular](https://angular.io/) ^5.2
    - [CLI](https://github.com/angular/angular-cli)
    - Animations
    - [Flex Layout](https://github.com/angular/flex-layout)
    - [Material / themes](https://material.angular.io/)
 - [Firebase](https://firebase.google.com/)
    - [AngularFire2](https://github.com/angular/angularfire2)
 - [Web3](https://github.com/ethereum/web3.js/)
    - [Ethereumjs-tx](https://github.com/ethereumjs/ethereumjs-tx)
 - [TSLint](https://palantir.github.io/tslint/) 
 - Hosted via [GH pages](https://pages.github.com/)


## Future plans (todo list)
 - Pop down for each coin with tx history etc
    - List TX info and automatically update status
 - Sending and receiving of tokens
 - Login upgrades
    - Address creation
    - Nano support
 - Allow addition of custom own tokens
 - Make fully responsive
 - Improve token purchase UI
    - Shapeshift-esque plugin for exchanging tokens
    - 2 way purchasing window
 - SSL cert for HTTPS
 - Proper Angular native form validation
 - Further validation
    - Tests
    - Logging
    - Auth guard
