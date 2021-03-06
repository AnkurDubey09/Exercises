
To run the test, please follow these steps: 

Pre-requisites: 

1- Node must be installed.

2- Clone 'local' branch of the repository by running following command:

git clone -b local git@github.com:AnkurDubey09/Exercises.git

Steps: 

1- Go to 'Exercises/TODOS' directory. 

2- Run 'npm install' command on terminal. 

3- There are three commands to run the tests: 

  a- To run sanity scenarios, run 'npm run test_san' on terminal. 
  
  b- To run regression scenarios, run 'npm run test_reg' on terminal. 
  
  c- To run all scenarios, run 'npm run test' on terminal. 
  
  d- Each feature is tagged with a specific tag, you can run that specific feature by running following command: 
  
    npm run test '@<tag_name>' OR npx wdio run ./wdio.conf.js --cucumberOpts.tagExpression '@<tag_name>' 
    
  e- To run the test in HEADLESS mode, please run 'npm run test_headless' command on terminal.
    
4- To generate the report, run 'npm run gen_report' on terminal. This framework uses "allure" reporter for reporting.

Scenarios: Please refer the 'SCENARIOS.md' for the scenarios.

** Note: You can refer the report's screenshot here for the results (report_screenshot.png).
