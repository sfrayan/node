const express = require("express");
const serialize = require('node-serialize');
const vm2 = require("vm2");
const vm = new vm2.VM({
    timeout: 200,
    sandbox: {}
});

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { result: null, code: null });
});

router.post("/", (req, res) => {
    const code = req.body.code + '';
    let result = "";
    if (code.length != 0) {
        try {
            let data = vm.run(code);
            if (data !== undefined) {
                if (data['result'] !== undefined) {
                    result = {
                        result: data['result']
                    };
                }
                else {
                    result = {
                        result: data
                    };
                }
            }
            else {
                result = {result: "undefined"};
            }
        }
        catch (err) {
            result = {result: err};
        }
    }
    else {
        result = {result: 'Empty code'};
    }
 
    try {
        res.render("index", { code: code, result: result["result"]});
    }
    catch (err) {
        res.render("index", { code: code, result: err });
    }
});

module.exports = router;

