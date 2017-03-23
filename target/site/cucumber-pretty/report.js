$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/issuing_company_invoice.feature");
formatter.feature({
  "line": 1,
  "name": "Issuing invoices for companies",
  "description": "In order to avoid errors\r\nAs a Teddysoft employee\r\nI want to brainlessly issue an company invoice with tax included price",
  "id": "issuing-invoices-for-companies",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is \u003ctax_included\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is \u003cVAT\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is \u003ctax_excluded\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;",
  "rows": [
    {
      "comments": [
        {
          "line": 14,
          "value": "# VAT \u003d Value Added Tax"
        }
      ],
      "cells": [
        "tax_included",
        "VAT",
        "tax_excluded",
        "notes"
      ],
      "line": 15,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;1"
    },
    {
      "cells": [
        "36000",
        "1714",
        "34286",
        "Refactoring定價"
      ],
      "line": 16,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;2"
    },
    {
      "cells": [
        "17900",
        "852",
        "17048",
        "Scrum早鳥"
      ],
      "line": 17,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;3"
    },
    {
      "cells": [
        "17000",
        "810",
        "16190",
        "Scrum泰迪之友"
      ],
      "line": 18,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;4"
    },
    {
      "cells": [
        "21000",
        "1000",
        "20000",
        "Scrum定價"
      ],
      "line": 19,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;5"
    },
    {
      "cells": [
        "99",
        "5",
        "94",
        "四捨五入案例"
      ],
      "line": 20,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;6"
    },
    {
      "cells": [
        "1",
        "0",
        "1",
        "邊界條件"
      ],
      "line": 21,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;7"
    },
    {
      "cells": [
        "10",
        "0",
        "10",
        "邊界條件"
      ],
      "line": 22,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;8"
    },
    {
      "cells": [
        "11",
        "1",
        "10",
        "邊界條件"
      ],
      "line": 23,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;9"
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "可以開零元發票"
      ],
      "line": 24,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 36000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 1714",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 34286",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 81418145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:25"
});
formatter.result({
  "duration": 97646,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 366548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1714",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 2418917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34286",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:41"
});
formatter.result({
  "duration": 102453,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 17900",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 852",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 17048",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 58888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17900",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:25"
});
formatter.result({
  "duration": 39659,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 11417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "852",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 60691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17048",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:41"
});
formatter.result({
  "duration": 79919,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 17000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 810",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 16190",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 155332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:25"
});
formatter.result({
  "duration": 51978,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 34251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "810",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 50776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16190",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:41"
});
formatter.result({
  "duration": 59789,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 21000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 1000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 20000",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 63996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:25"
});
formatter.result({
  "duration": 40861,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 11117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 44767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:41"
});
formatter.result({
  "duration": 36655,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 99",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 5",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 94",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 61592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:25"
});
formatter.result({
  "duration": 50776,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 14722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 37856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "94",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:41"
});
formatter.result({
  "duration": 36955,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 1",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 53781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:25"
});
formatter.result({
  "duration": 35753,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 10516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 55283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:41"
});
formatter.result({
  "duration": 36655,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 10",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 10",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 67000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:25"
});
formatter.result({
  "duration": 58588,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 11418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 32749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:41"
});
formatter.result({
  "duration": 54682,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 11",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 10",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 68803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:25"
});
formatter.result({
  "duration": 46870,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 27040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 43565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:41"
});
formatter.result({
  "duration": 48673,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 0",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 0",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 80220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:25"
});
formatter.result({
  "duration": 45368,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 32448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 40861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:41"
});
formatter.result({
  "duration": 38758,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is \u003ctax_excluded\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is \u003cVAT\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is \u003ctax_included\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;",
  "rows": [
    {
      "comments": [
        {
          "line": 35,
          "value": "# VAT \u003d Value Added Tax"
        }
      ],
      "cells": [
        "tax_included",
        "VAT",
        "tax_excluded",
        "notes"
      ],
      "line": 36,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;1"
    },
    {
      "cells": [
        "36000",
        "1714",
        "34286",
        "Refactoring定價"
      ],
      "line": 37,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;2"
    },
    {
      "cells": [
        "17900",
        "852",
        "17048",
        "Scrum早鳥"
      ],
      "line": 38,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;3"
    },
    {
      "cells": [
        "17000",
        "810",
        "16190",
        "Scrum泰迪之友"
      ],
      "line": 39,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;4"
    },
    {
      "cells": [
        "21000",
        "1000",
        "20000",
        "Scrum定價"
      ],
      "line": 40,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;5"
    },
    {
      "cells": [
        "99",
        "5",
        "94",
        "四捨五入案例"
      ],
      "line": 41,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;6"
    },
    {
      "cells": [
        "1",
        "0",
        "1",
        "邊界條件"
      ],
      "line": 42,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;7"
    },
    {
      "comments": [
        {
          "line": 43,
          "value": "#  | 10              | 0     | 10           | 此案例不適用     |"
        }
      ],
      "cells": [
        "11",
        "1",
        "10",
        "邊界條件"
      ],
      "line": 44,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;8"
    },
    {
      "cells": [
        "12",
        "1",
        "11",
        "邊界條件"
      ],
      "line": 45,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;9"
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "可以開零元發票"
      ],
      "line": 46,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 34286",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1714",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 36000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 60691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34286",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:45"
});
formatter.result({
  "duration": 55884,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 20430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1714",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 54382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:51"
});
formatter.result({
  "duration": 74211,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 17048",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 852",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 17900",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 83825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17048",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:45"
});
formatter.result({
  "duration": 43565,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 12318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "852",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 74812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17900",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:51"
});
formatter.result({
  "duration": 35453,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 16190",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 810",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 17000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 48973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16190",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:45"
});
formatter.result({
  "duration": 45969,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 12318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "810",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 31547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:51"
});
formatter.result({
  "duration": 31848,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 20000",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 21000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 70305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:45"
});
formatter.result({
  "duration": 45368,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 25238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 54381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:51"
});
formatter.result({
  "duration": 34552,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 94",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 5",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 99",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 58888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "94",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:45"
});
formatter.result({
  "duration": 32449,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 9615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 30947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:51"
});
formatter.result({
  "duration": 28843,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 1",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 56184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:45"
});
formatter.result({
  "duration": 30946,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 15624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 42364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:51"
});
formatter.result({
  "duration": 51677,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 43,
      "value": "#  | 10              | 0     | 10           | 此案例不適用     |"
    }
  ],
  "line": 44,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 10",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 11",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 81722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:45"
});
formatter.result({
  "duration": 50776,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 18628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 58287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:51"
});
formatter.result({
  "duration": 61592,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 11",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 12",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 88032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:45"
});
formatter.result({
  "duration": 42363,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 13521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 62193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:51"
});
formatter.result({
  "duration": 92839,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 0",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 0",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 72709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:45"
});
formatter.result({
  "duration": 34252,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 10816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 43866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:51"
});
formatter.result({
  "duration": 25538,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "A special case to issue an invoice by assigning 10$ to tax included prices first and tax excluded prices second",
  "description": "",
  "id": "issuing-invoices-for-companies;a-special-case-to-issue-an-invoice-by-assigning-10$-to-tax-included-prices-first-and-tax-excluded-prices-second",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "the tax included price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the tax excluded price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I should see the VAT is 1",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "the tax included price is 11",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the tax excluded price is 10",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 92238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:25"
});
formatter.result({
  "duration": 36054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:45"
});
formatter.result({
  "duration": 28543,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 43866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 174862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:51"
});
formatter.result({
  "duration": 94341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:41"
});
formatter.result({
  "duration": 66400,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "A special case to issue an invoice by assigning 10$ to tax excluded prices first and tax included prices second",
  "description": "",
  "id": "issuing-invoices-for-companies;a-special-case-to-issue-an-invoice-by-assigning-10$-to-tax-excluded-prices-first-and-tax-included-prices-second",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "the tax excluded price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the tax included price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I should see the VAT is 0",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "the tax included price is 10",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the tax excluded price is 10",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:20"
});
formatter.result({
  "duration": 164647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:45"
});
formatter.result({
  "duration": 85027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:25"
});
formatter.result({
  "duration": 52278,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:31"
});
formatter.result({
  "duration": 36054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:35"
});
formatter.result({
  "duration": 76014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:51"
});
formatter.result({
  "duration": 62493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:41"
});
formatter.result({
  "duration": 46569,
  "status": "passed"
});
});