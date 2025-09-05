// It means when JS calls Functions it does call function in a hierarchy but if a function that take time that is passed to envirment (browser/node), then the event loop takes other execute able functions from "call stack" and excecute them in meanwhile the function in envirment go to queque then event loop check the queqe and execute those function

// Asynchronous
/* CODE > CALL STACK > EVENT LOOP > IF (EXECUTABLE) > EXECUTE, ELSE (ENVIRMENT) RUN IT > PUT TO QUEQE > THE EVENT LOOP > EXECUTE IT */
