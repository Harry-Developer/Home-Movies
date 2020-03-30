# Home-Movies
Visual interface for selecting and viewing movies you have stored on a home network.

## Install

### OMDb API

Requires API Token from: http://www.omdbapi.com/

This token is free for 1000 requests, suggest using throwaway email sites for registering key. 
The key can then be populated in the .env file for use in the software.

### SQL Server

Project requires a SQL backend, the database configuration is below:

```
CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `file` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

```

Database name and connection properties can be changed in the .env file.

### NodeJS

To install and run the server, follow the rules below:

```
npm install
node index.js
```