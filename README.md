# api
# it is define a way to implement secure api
- [x] start service instruction 
     - cd api
     - tsc
     - node -r dotenv/config .\build\server.js

## disable x-powered-by from express API, 
 ``` javascript
  app.disable('x-powered-by')
  ```
  
- [x] Note: Disabling the X-Powered-By header does not prevent a sophisticated attacker from determining that an app is running Express. It may discourage a casual exploit, but there are other ways to determine an app is running Express.
