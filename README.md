# ABOUT PROJECT

### [Web_Assessment_via_Precily](https://precily.com/)

![weblayout_mp4](https://user-images.githubusercontent.com/68610608/184124317-159a8850-834c-4836-a2d0-0af559e97c58.gif)
---
![image](https://user-images.githubusercontent.com/68610608/184123127-9a3c89c2-1b2e-4b6c-8666-566329c6c0e9.png)



- Resizable Components built using React. 
- Dockerized and supported with git actions. (!working)

```
Stats:

Total time spent: 
15-17hrs ==> Includes Planning, Research, Build, Documenting(readme), Debugging.

```

## Packages used:
- CRA template(OSS)
- Bootstrap(OSS
- Docker(OSS)
- Rapid_API(freemium)

## Platform used:
- Github: git actions for containerized scripts.
- Stackblitz: For hosting MVP plain frontend.
---

### Task_1: Part-A

- [✔️] It consists of three different components with some content (feel free to add any HTML content or Images).  
- [✔️] User Should be able to Re-size the components by dragging them from any of the sides.   Interesting learn.
> Draggable support using CSS resize property. 
Alternatives: [React-grid-layout](https://www.npmjs.com/package/react-grid-layout), [React-rnd](https://bokuweb.github.io/react-rnd/stories/?path=/story/bare--bare), [React-resize-panel](https://www.npmjs.com/package/react-resize-panel)
- [✔️] The neighbour components should expand or shrink based on re-sizing operations performed on target component.   
- [✔️ ] Layout should be responsive on all laptop devices.
- [✔️]  The code should be clean and of production quality. (good enough) 


### Task_1: Part-B

- [✔️] Containerize the Web Application You Developed using Docker.
> Docker didn't worked out due to low end laptop[Penitum process with windows 8.1] and VM problems. Scripts added though. Required docker build during development.
- [✔️] Construct a Well Defined Docker file including ENV, RUN, CMD Commands.  
- [✔️ ] Deploy the Container using any CI tool like Jenkins, or Git Actions etc.  
- [ ]Deploy on Heroku.
> Not performed. [More on Heroku dynos](https://www.heroku.com/dynos) 

<samp>xtras</samp>
- [ ]Real Time Monitoring of the Deployed Application.
- [ ]Any Approach to Ship the logs of Hosted Application to any remote storage.


### Task_2: Part-A

- Create APIs for the front end you have created in the previous task. API to add/edit in these components:

//stats component image

There should be two button:-
- [✔️] Add: On clicking Add button, if there is any data it should get clear and
user should be able to add new data.(It will create new entry in the table)

- [✔️] Update: On clicking this button user should be able to update the data.
(It will update entries in the table)

- [✔️] Count: API to show number of times(count), user has called ADD and
Update API.


### Task_2: Part-B

- [✔️] Provide Automation in your CI/CD Pipeline that you push the new API Changes and job gets triggered to deploy the new feature
- [] Attach the screenshot of scripts used and pipeline execution.
![image](https://user-images.githubusercontent.com/68610608/184121866-9059686b-96df-4720-97ac-ef33e895a9a5.png)
![image](https://user-images.githubusercontent.com/68610608/184122312-7a73187f-8496-45f6-b4f3-44a158547fda.png)

---
>Pipeline and CI/CD ss added. Failed due to non-dockerized build.

- [✔️]  Test the Deployed APIs using any API Testing tool e.g. Postman

<!-- 
https://docs.docker.com/ci-cd/github-actions/ -->

Things to consider:

- [✔️] Clean code with proper commenting.
> Semantic commits and code forma using prettier.
- [✔️] Mention the execution time for each API
![image](https://user-images.githubusercontent.com/68610608/184121244-13b6c945-2796-4a6c-a913-5a40fb636c37.png)
---
- [✔️] Provide the table/collection for database. > Inbuilt with RAPID API support.
- [✔️] Provide basic validations if needed
