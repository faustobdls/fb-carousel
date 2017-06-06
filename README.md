# FB Carosel

Angular component to be able to make carousel easily.

## Getting started

Use this component is easy, just: 
  1. Install dependencies `npm install hammerjs --save`
  2. Configure `hammerjs` in `.angular-cli` add in: 
    - ```json 
      "scripts": [
        "../node_modules/hammerjs/hammer.min.js"
      ],
    ``` 
  3. Add `import 'hammerjs';` in `app.module.ts` file;
  4. `npm install fb-carousel --save` inside your Angular project
  5. `import { FbCarousel } from 'fb-carousel';` import the component inseide your `app.module.ts` file
  6. inside your slide component use this two object to create the `banners` and the `arrows`  
  7. finally, but not least use the component on your html slide file

If you are a learning learner you can consult [this](https://github.com/yesroh/fb-carousel-example) repository where that component is used.

Banner object:
  - id: banners positions
  - bg: image link
  - title: banner title
  - exibir_title: show or not the banner title
```typescript
banners: any[] = [
  { id: 0, bg: '/assets/banner.jpg', title: 'Banner 1', exibir_title: false },
  { id: 1, bg: '/assets/banner.jpg', title: 'Banner 2', exibir_title: false },
  { id: 2, bg: '/assets/banner.jpg', title: 'Banner 3', exibir_title: false },
  { id: 3, bg: '/assets/banner.jpg', title: 'Banner 4', exibir_title: false },
];
```
Arros object:
```typescript
arrows: any = {
  left: '/assets/left.svg',
  right: '/assets/right.svg'
}
```

HTML element:
  - delay: seconds between bannes, is in ms
  - bullet-color: self-exploitative
```html
<fb-carousel [arows]="arrows" [slides]="banners" delay="5000" bullet-color="white"></fb-carousel>
```

## Future features
  - Improve title presentation and features
  - Improve bullet presentation and features

## CHANGELOG
  - Add swipe events left and right
  - Update `README.md` file
