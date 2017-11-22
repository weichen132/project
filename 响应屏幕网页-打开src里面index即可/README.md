# 响应式网站
## 根据屏幕的50em,30em-50em,30em，图片大小响应，样式响应显示不同页面效果，理财网站主页：src-index.html
### 使用技术
* @media,媒体查询<br>
```css
/*部分代码*/
@media only screen and (max-width: 30em) {
    .footer-content {
        width: 98%;
    }
    .footer-content ul li.title {
        font-size: 1.2rem;
        line-height: 2rem;
    }
}
```

* Owl Carourse<br>
* 使用picture根据不同屏幕显示1600px,800px,480px的轮播图片<br>
```html
/*部分代码*/
<div class="ad">
        <div class="owl-carousel owl-theme">
            <div class="item">
                <picture>
                    <source srcset="img/ad001-l.png" media="(min-width:50em)">
                    <source srcset="img/ad001-m.png" media="(min-width:30em)">
                    <img src="img/ad001.png" alt="2015年度报告">
                </picture>
            </div>
            <div class="item">
```
* gulp自动化压缩css ,js ,img<br>



