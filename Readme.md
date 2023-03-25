# FullStack_Project_02 - Fake news API

This repository contains code of my first REST API. This application is implemented as an assignment for Full Stack Development course at Laurea.

### Idea 

The Fake News Article API allows users to add, delete, update and get fake news.
#### Update: 
During the development of the 3rd project I've decided to add additional endpoints to the API. Now API allow us to fetch comments for given article, add, edit, and  delete them.

### Project structure
Project structure is done as 3 layered architecture, inspired by this article:
https://blog.treblle.com/egergr/ 

## Rest API hosted on Render available here - https://fake-news-rest-api.onrender.com

#### Available endpoints are :
- /api/getall - get all articles
- /api/:id - get certain article
- /api/add - add article
- /api/update/:id - update article
- /api/delete/:id - delete article
- /api/getcomments/:id - get comments for given article
- /api/addcomment - add comment to the article
- /api/updatecomment/:id - update comment
- /api/deletecomment/:id - delete comment

#### Article structure:

| Key        | Type     | Mandatory?     |
|------------|----------|----------------|
| author     | String   | Mandatory      |
| body       | String   | Mandatory      |
| tags       | [String] | Default - []   |
| created_at | Date     | Default - null |
| edited_at  | Date     | Default - null |

#### Comment structure:

| Key        | Type     | Mandatory?     |
|------------|----------|----------------|
| author     | String   | Mandatory      |
| body       | String   | Mandatory      |
| articleId  | String   | Mandatory      |
| created_at | Date     | Default - null |
| edited_at  | Date     | Default - null |
| likes      | Number   | Default - 0    |


#### Disclaimer
In order to run this repository locally you need to provide your own '.env' file with password to mongoDB. '.env' file should contain one line "PW=<"your password">". In order to make this running password to mongoDB is also stored in secret files in render.
