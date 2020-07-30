# Simple Linked scraping project.

## Table of Contents

 - [Structure](#structure)
 - [Usage](#usage)
 - [Run](#run)
 - [Result](#result)
 - [Warning](#warning)

## Structure

```
📦Linkedin-crawler
 ┣ 📂data
 ┣ 📂extractor
 ┃ ┣ 📜extractCompanyInfo.js
 ┃ ┣ 📜extractJobDescription.js
 ┃ ┣ 📜extractJobDescriptionDetail.js
 ┃ ┣ 📜extractJobId.js
 ┃ ┣ 📜extractJobTitle.js
 ┃ ┗ 📜index.js
 ┣ 📂logger
 ┃ ┣ 📜index.js
 ┃ ┣ 📜log.js
 ┃ ┗ 📜logTimeExe.js
 ┣ 📂parser
 ┃ ┣ 📜index.js
 ┃ ┣ 📜parseCompanyInfo.js
 ┃ ┣ 📜parseJobDescription.js
 ┃ ┣ 📜parseJobDescriptionDetail.js
 ┃ ┗ 📜parseJobId.js
 ┣ 📂sample
 ┃ ┣ 📜data.csv
 ┃ ┗ 📜data.json
 ┣ 📂screenshots
 ┣ 📂utils
 ┃ ┣ 📜genFileName.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜initFolder.js
 ┣ 📂writer
 ┃ ┣ 📜csv.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜json.js
 ┣ 📜.gitignore
 ┣ 📜config.js
 ┣ 📜index.js
 ┣ 📜package.json
 ┣ 📜selector.js
 ┣ 📜url.js
 ┗ 📜yarn.lock
```

## Usage
1. Clone repository

```
  git clone https://github.com/NguyenThanhDat741862/Linkedin-crawler.git
```

2. Cd into directory

```
  cd Linkedin-crawler
```

3. Install dependencies using npm

```
  npm i
```

## Run

```
  node index.js <FILE_DATA_FORMAT> <YOUR_LINKEDIN_USERNAME> <YOUR_LINKEDIN_PASSWORD>
```

## Result

 - Data file can be found in data directory (only support JSON and CSV format)
   
## Sample

 - Sample crawled data file can be found in sample directory
   
## Warning

 - Your account can be restricted. Because of the violation Linkedin's Terms of Service.

 - You should create new account to run this app.
