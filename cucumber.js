const { format } = require("node:path");

module.exports = {
    default: {
        requireModule: ['ts-node/register'],
        require: [
            'support/*.ts',
            'step-definitions/*.ts'
        ],
        format: [
            'progress',
            'html:reports/cucumber-report.html',
            'json:reports/cucumber-report.json',
            'junit:reports/junit.xml'
        ],
        publishQuiet: true
    }
}