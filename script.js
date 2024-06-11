function generateIntro() {
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const twitter = document.getElementById('twitter').value;
    const instagram = document.getElementById('instagram').value;
    const youtube = document.getElementById('youtube').value;
    const bgColor = document.getElementById('bg-color').value;
    const fontColor = document.getElementById('font-color').value;
    const fontSize = document.getElementById('font-size').value;
    const fontFamily = document.getElementById('font-family').value;
    const layout = document.getElementById('layout').value;
    const profilePic = document.getElementById('profile-pic').files[0];

    const output = document.getElementById('output');
    output.style.backgroundColor = bgColor;
    output.style.color = fontColor;
    output.style.fontSize = fontSize;
    output.style.fontFamily = fontFamily;

    document.getElementById('bg-color').style.backgroundColor = bgColor;
    document.getElementById('font-color').style.backgroundColor = fontColor;

    let profilePicHtml = '';
    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePicHtml = `<img src="${e.target.result}" alt="プロフィール画像" class="profile-pic">`;
            renderOutput();
        };
        reader.readAsDataURL(profilePic);
    } else {
        renderOutput();
    }

    function renderOutput() {
        let layoutHtml = '';

        if (layout === 'layout1') {
            layoutHtml = `
                ${profilePicHtml}
                <h2>${name}</h2>
                <p>${bio}</p>
                <div class="sns-icons">
                    ${twitter ? `<a href="${twitter}" class="twitter" target="_blank"></a>` : ''}
                    ${instagram ? `<a href="${instagram}" class="instagram" target="_blank"></a>` : ''}
                    ${youtube ? `<a href="${youtube}" class="youtube" target="_blank"></a>` : ''}
                </div>
            `;
        } else if (layout === 'layout2') {
            layoutHtml = `
                <h2>${name}</h2>
                ${profilePicHtml}
                <p>${bio}</p>
                <div class="sns-icons">
                    ${twitter ? `<a href="${twitter}" class="twitter" target="_blank"></a>` : ''}
                    ${instagram ? `<a href="${instagram}" class="instagram" target="_blank"></a>` : ''}
                    ${youtube ? `<a href="${youtube}" class="youtube" target="_blank"></a>` : ''}
                </div>
            `;
        } else if (layout === 'layout3') {
            layoutHtml = `
                <h2>${name}</h2>
                <p>${bio}</p>
                ${profilePicHtml}
                <div class="sns-icons">
                    ${twitter ? `<a href="${twitter}" class="twitter" target="_blank"></a>` : ''}
                    ${instagram ? `<a href="${instagram}" class="instagram" target="_blank"></a>` : ''}
                    ${youtube ? `<a href="${youtube}" class="youtube" target="_blank"></a>` : ''}
                </div>
            `;
        }

        output.innerHTML = layoutHtml;
    }
}

function downloadCode() {
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const twitter = document.getElementById('twitter').value;
    const instagram = document.getElementById('instagram').value;
    const youtube = document.getElementById('youtube').value;
    const bgColor = document.getElementById('bg-color').value;
    const fontColor = document.getElementById('font-color').value;
    const fontSize = document.getElementById('font-size').value;
    const fontFamily = document.getElementById('font-family').value;
    const profilePic = document.getElementById('profile-pic').files[0];

    let profilePicHtml = '';
    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePicHtml = `<img src="${e.target.result}" alt="プロフィール画像" class="profile-pic">`;
            generateDownload();
        };
        reader.readAsDataURL(profilePic);
    } else {
        generateDownload();
    }

    function generateDownload() {
        const htmlContent = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}の自己紹介</title>
    <style>
        body { background-color: ${bgColor}; font-family: ${fontFamily}; color: ${fontColor}; font-size: ${fontSize}; margin: 0; padding: 0; }
        .container { width: 800px; margin: 0 auto; background: #fff; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
        h2 { text-align: center; }
        p { text-align: center; font-size: 16px; }
        .profile-pic { max-width: 150px; border-radius: 50%; display: block; margin: 0 auto; }
        .sns-icons { display: flex; justify-content: center; gap: 10px; margin: 10px 0; }
        .sns-icons a { display: inline-block; width: 32px; height: 32px; background-size: cover; }
        .sns-icons .twitter { background-image: url('twitter-icon.png'); }
        .sns-icons .instagram { background-image: url('instagram-icon.png'); }
        .sns-icons .youtube { background-image: url('youtube-icon.png'); }
    </style>
</head>
<body>
    <div class="container">
        ${profilePicHtml}
        <h2>${name}</h2>
        <p>${bio}</p>
        <div class="sns-icons">
            ${twitter ? `<a href="${twitter}" class="twitter" target="_blank"></a>` : ''}
            ${instagram ? `<a href="${instagram}" class="instagram" target="_blank"></a>` : ''}
            ${youtube ? `<a href="${youtube}" class="youtube" target="_blank"></a>` : ''}
        </div>
    </div>
</body>
</html>
        `;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${name}_intro.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
