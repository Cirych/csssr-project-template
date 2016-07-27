# CSSSR Project Template
**Попытка быстрого старта**

View dist on [GitHub](https://cirych.github.io/csssr-project-template/)

Base image for PixelPerfect [image](https://github.com/Cirych/csssr-project-template/raw/anketa/compare/screenshots/baseimage_0.png)

[PhantomCSS](https://github.com/Huddle/PhantomCSS) used to take diffs. (in progress!!!)
example diff [image](https://github.com/Cirych/csssr-project-template/raw/anketa/compare/failures/baseimage_0.fail.png)

### Start server
```
npm start
```

### Generate diffs in second console window
Diffs image (if any different with base image) under 'compare/failures' folder
```
npm run compare
```

### Generate new base image from psd
baseimage.psd must be under 'compare/psd' folder
```
npm run psd
```