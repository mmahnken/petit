'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "order" to table "Steps"
 *
 **/

var info = {
    "revision": 2,
    "name": "term-normalization",
    "created": "2017-12-14T14:05:11.961Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "Steps",
        "order",
        {
            "type": Sequelize.INTEGER
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
