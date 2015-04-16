sfdc-tooling-explorer
=====================

sfdc tooling explorer
=======
# SFDC Tooling Explorer

Explore the Tooling API.

How to build locally (using mock json responses)

1. > mvn package
2. > export PORT=5000
3. > java -cp target/classes/:"target/dependency/*" Hello
4. Open browser to http://localhost:5000

SFDC oAuth endpoints:
For authorization: https://login.salesforce.com/services/oauth2/authorize
For token requests: https://login.salesforce.com/services/oauth2/token
For revoking OAuth tokens: https://login.salesforce.com/services/oauth2/revoke

