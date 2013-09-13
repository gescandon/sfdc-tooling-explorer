Gpage = "<apex:page>CONTENT</apex:page>";

var toolingAll = '{"encoding":"UTF-8","maxBatchSize":200,"sobjects":[{"name":"ApexClass","label":"Apex Class","keyPrefix":"01p","custom":false,"labelPlural":"Apex Classes","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexClass","describe":"/services/data/v28.0/tooling/sobjects/ApexClass/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexClass/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":true,"updateable":true,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":true,"retrieveable":true,"undeletable":false,"triggerable":false},{"name":"ApexClassMember","label":"Metadata Container Member","keyPrefix":"400","custom":false,"labelPlural":"Metadata Container Member","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexClassMember","describe":"/services/data/v28.0/tooling/sobjects/ApexClassMember/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexClassMember/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":true,"updateable":true,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":false,"retrieveable":true,"undeletable":false,"triggerable":false},{"name":"ApexComponent","label":"Visualforce Component","keyPrefix":"099","custom":false,"labelPlural":"Visualforce Components","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexComponent","describe":"/services/data/v28.0/tooling/sobjects/ApexComponent/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexComponent/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":true,"updateable":true,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":true,"retrieveable":true,"undeletable":false,"triggerable":false},{"name":"ApexComponentMember","label":"Metadata Container Member","keyPrefix":"403","custom":false,"labelPlural":"Metadata Container Member","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexComponentMember","describe":"/services/data/v28.0/tooling/sobjects/ApexComponentMember/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexComponentMember/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":true,"updateable":true,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":false,"retrieveable":true,"undeletable":false,"triggerable":false},{"name":"ApexExecutionOverlayAction","label":"Apex Execution Overlay Action","keyPrefix":"1do","custom":false,"labelPlural":"Apex Execution Overlay Actions","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexExecutionOverlayAction","describe":"/services/data/v28.0/tooling/sobjects/ApexExecutionOverlayAction/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexExecutionOverlayAction/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":true,"updateable":true,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":false,"retrieveable":true,"undeletable":false,"triggerable":false},{"name":"ApexExecutionOverlayResult","label":"Apex Execution Overlay Result","keyPrefix":"07n","custom":false,"labelPlural":"Apex Execution Overlay Results","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexExecutionOverlayResult","describe":"/services/data/v28.0/tooling/sobjects/ApexExecutionOverlayResult/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexExecutionOverlayResult/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":false,"updateable":false,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":false,"retrieveable":true,"undeletable":false,"triggerable":false},{"name":"ApexLog","label":"Apex Debug Log","keyPrefix":"07L","custom":false,"labelPlural":"Apex Debug Log","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexLog","describe":"/services/data/v28.0/tooling/sobjects/ApexLog/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexLog/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":false,"updateable":false,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":false,"retrieveable":true,"undeletable":false,"triggerable":false},{"name":"ApexPage","label":"Visualforce Page","keyPrefix":"066","custom":false,"labelPlural":"Visualforce Pages","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexPage","describe":"/services/data/v28.0/tooling/sobjects/ApexPage/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexPage/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":true,"updateable":true,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":true,"retrieveable":true,"undeletable":false,"triggerable":false}]}';

var mockTools = '{"encoding":"UTF-8","maxBatchSize":200,"records":[{"Name":"Tool1","label":"Apex Class","keyPrefix":"01p","custom":false,"labelPlural":"Apex Classes","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/Tool1","describe":"/services/data/v28.0/tooling/sobjects/ApexClass/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexClass/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":true,"updateable":true,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":true,"retrieveable":true,"undeletable":false,"triggerable":false},{"Name":"Tool2","label":"Metadata Container Member","keyPrefix":"400","custom":false,"labelPlural":"Metadata Container Member","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/Tool2","describe":"/services/data/v28.0/tooling/sobjects/ApexClassMember/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexClassMember/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":true,"updateable":true,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":false,"retrieveable":true,"undeletable":false,"triggerable":false},{"Name":"ApexComponentTool","label":"Visualforce Component","keyPrefix":"099","custom":false,"labelPlural":"Visualforce Components","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexComponentTool","describe":"/services/data/v28.0/tooling/sobjects/ApexComponent/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexComponent/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":true,"updateable":true,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":true,"retrieveable":true,"undeletable":false,"triggerable":false},{"Name":"ApexComponentMemberTool","label":"Metadata Container Member","keyPrefix":"403","custom":false,"labelPlural":"Metadata Container Member","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexComponentMemberTool","describe":"/services/data/v28.0/tooling/sobjects/ApexComponentMember/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexComponentMember/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":true,"updateable":true,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":false,"retrieveable":true,"undeletable":false,"triggerable":false},{"Name":"ApexExecutionOverlayActionTool","label":"Apex Execution Overlay Action","keyPrefix":"1do","custom":false,"labelPlural":"Apex Execution Overlay Actions","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexExecutionOverlayActionTool","describe":"/services/data/v28.0/tooling/sobjects/ApexExecutionOverlayAction/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexExecutionOverlayAction/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":true,"updateable":true,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":false,"retrieveable":true,"undeletable":false,"triggerable":false},{"Name":"ApexExecutionOverlayResultTool","label":"Apex Execution Overlay Result","keyPrefix":"07n","custom":false,"labelPlural":"Apex Execution Overlay Results","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexExecutionOverlayResultTool","describe":"/services/data/v28.0/tooling/sobjects/ApexExecutionOverlayResult/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexExecutionOverlayResult/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":false,"updateable":false,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":false,"retrieveable":true,"undeletable":false,"triggerable":false},{"Name":"ApexLogTool","label":"Apex Debug Log","keyPrefix":"07L","custom":false,"labelPlural":"Apex Debug Log","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexLogTool","describe":"/services/data/v28.0/tooling/sobjects/ApexLog/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexLog/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":false,"updateable":false,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":false,"retrieveable":true,"undeletable":false,"triggerable":false},{"Name":"ApexPageTool","label":"Visualforce Page","keyPrefix":"066","custom":false,"labelPlural":"Visualforce Pages","layoutable":false,"activateable":false,"urls":{"sobject":"/services/data/v28.0/tooling/sobjects/ApexPageTool","describe":"/services/data/v28.0/tooling/sobjects/ApexPage/describe","rowTemplate":"/services/data/v28.0/tooling/sobjects/ApexPage/{ID}"},"searchable":false,"deprecatedAndHidden":false,"createable":true,"updateable":true,"deletable":true,"customSetting":false,"feedEnabled":false,"mergeable":false,"queryable":true,"replicateable":true,"retrieveable":true,"undeletable":false,"triggerable":false}]}';