var posts=["2023/09/29/My-New-Post/","2023/10/03/hello-world/","2023/10/01/图床测试/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};