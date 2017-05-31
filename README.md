# fb-carousel

´npm install fb-carousel --save´

´import { FbCarouselComponent } from 'fb-carousel';´

no component que for usar tem que criar o objeto com:

- id: em ordem pq ele é usado para o position dos banners
- bg: string da imagem, pode ser relativa ao assets como no exemplo ou inteira
- title: pode ou não ter, ainda sairá uma versão que use mais ele
- exibir_title: se quer que exiba ou não o title

```typescript
banners: any[] = [
  { id: 0, bg: '/assets/banner.jpg', title: 'Banner 1', exibir_title: false },
  { id: 1, bg: '/assets/banner.jpg', title: 'Banner 2', exibir_title: false },
  { id: 2, bg: '/assets/banner.jpg', title: 'Banner 3', exibir_title: false },
  { id: 3, bg: '/assets/banner.jpg', title: 'Banner 4', exibir_title: false },
];
```

use arow:

- left: para a seta para esquerda
- right: para a seta para direita

```typescript
arrows: any = {
  left: '/assets/left.svg',
  right: '/assets/right.svg'
}
```

- delay: é em ms ou seja ele vai fazer stop de 5s antes de ir pro proximo

- bullet-color: cor das bullets, ainda pretendo adcionar a opção de mostrar ou não elas e as setas

```html
<fb-carousel [arows]="arrows" [slides]="banners" delay="5000" bullet-color="white"></fb-carousel>
```
