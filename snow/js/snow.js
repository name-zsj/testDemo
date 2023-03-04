// 构建数据
function buildData() {
    for (let i = 0; i < num; i++) {
        arr.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 2 + 3
        })
    }
};

// 开始绘图
function draw() {
    // 清除路径
    ctx.clearRect(0,0,W,H);
    // 开始绘制路径
    ctx.beginPath();
    // 填充颜色
    ctx.fillStyle = '#fff';

    for(let i = 0; i < num; i++) {
        let positon = arr[i];
        ctx.moveTo(positon.x, positon.y);
        //绘制圆形
        ctx.arc(positon.x, positon.y, positon.r, 0, 2*Math.PI);
        // 填充钜形
        // ctx.fillRect(positon.x, positon.y, 1, positon.r);
    }
    ctx.fill();
    ctx.closePath();
    drop();
};

//下落动画
function drop() {
    for(let i = 0; i < num; i++) {
        let postion = arr[i];
        postion.y += Math.random()*3;
        if (postion.y > H) {
            postion.y = 0;
        }
    }
};
