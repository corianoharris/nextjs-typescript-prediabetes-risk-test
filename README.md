# Project Title

Prediabetes Risk Test 

## Description

An application for assessing prediabetes risk that utilizes data from the [Center for Disease Control](https://www.cdc.gov/), [American Diabetes Association](https://diabetes.org/), and [National Diabetes Prevention Program](https://www.cdc.gov/diabetes/prevention/index.html). 

- [Project Title](#project-title)
  - [Description](#description)
  - [Hosted](#hosted)
  - [Tech Stack](#tech-stack)
    - [Client-side](#client-side)
    - [Sever-side](#sever-side)
    - [Testing](#testing)
  - [UX Research](#ux-research)
  - [UI Design](#ui-design)
  - [Trello](#trello)
  - [Features](#features)
  - [A11y](#a11y)
    - [AXE audit results](#axe-audit-results)
  - [Lessons Learned](#lessons-learned)
  - [Roadmap](#roadmap)
  - [Color Reference](#color-reference)
  - [Environment Variables](#environment-variables)
  - [API Reference](#api-reference)
  - [Globals](#globals)
  - [Getting Started](#getting-started)
  - [Acknowledgements](#acknowledgements)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Hosted

- Netlify

## Tech Stack

### Client-side

- Next.js, React.js

### Sever-side

- List of sever-side applications

### Testing

- List of testing applications

## UX Research

- ### Problem

- Current Prediabetes web application and not  aesthetically pleasing and user-friendly for assessing prediabetes risk.

- ### Solution

- Create an aesthetically pleasing and user-friendly app for assessing prediabetes risk.

## UI Design

- ### Mockups

![UI Mockups](https://via.placeholder.com/200x200?text=App+Screenshot+Here)

- ### Prototype

![UI Prototype](https://via.placeholder.com/200x200?text=App+Screenshot+Here)

- ### Testing

Live application testing

- #### Users

2

## Trello

![Trello Board](https://via.placeholder.com/200x200?text=App+Screenshot+Here)

## Features

- a form
- a clickable chart

## A11y

- List of tools used

### AXE audit results

![Axe audit](https://via.placeholder.com/200x200?text=App+Screenshot+Here)

## Lessons Learned

Provide a brief description of what you learned from the project.

## Roadmap

Include a brief description of the next phrase of project.

## Color Reference

| Color         | Hex                                                              |
| ------------- | ---------------------------------------------------------------- |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## API Reference

- #### Swagger

![Api gui](https://via.placeholder.com/200x200?text=App+Screenshot+Here)

- #### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

- #### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

- #### Post all items

```http
  POST /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

- #### Post item

```http
  POST /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

- #### PUT item

```http
  PUT /api/items/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

- #### Delete all items

```http
  DELETE /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

- #### Delete item

```http
  DELETE /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Globals

- ### Variables

```
identifier
```

| Required | Property | Key     | Type     | Description |
| :------- | :------- | :------ | :------- | :---------- |
| `true`   | `name`   | `value` | `string` |             |

- ### Arrays

```
identifier
```

Array.length value:

| index    | Key     | Type     | Description |
| :------- | :------ | :------- | :---------- |
| `number` | `value` | `string` |             |

- ### Functions

Number of arguments:

| Parameter | Type     | Return              | Description |
| :-------- | :------- | :------------------ | :---------- |
| `name`    | `string` | **Required**. value |             |

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Acknowledgements

