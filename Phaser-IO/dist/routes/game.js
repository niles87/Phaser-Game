"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
router.get('/', (req, res) => {
    res.render('game');
});
module.exports = router;
//# sourceMappingURL=game.js.map